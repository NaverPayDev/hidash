import isFunction from '../isFunction'
import isPlainObject from '../isPlainObject'
import {isArrayLike} from './array'

import type {List} from './types'

type PropertyName = string | number | symbol

type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P]
}

type IterateeShorthand<T> = PropertyName | [PropertyName, unknown] | PartialShallow<T> | undefined | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getValueByPath(element: unknown, path: PropertyName[]): unknown {
    let result = element
    for (let i = 0; i < path.length; i++) {
        if (result == null || typeof result !== 'object') {
            return undefined
        }
        const obj = result as Record<PropertyName, unknown>
        result = obj[path[i]]
    }
    return result
}

export type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult

export type ListIteratee<T> = ListIterator<T, unknown> | IterateeShorthand<T>
export type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>
export type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S

export type ValueIteratee<T> = ((value: T) => unknown) | IterateeShorthand<T>
export type ObjectIterator<T, TResult> = (value: T[keyof T], key: string, collection: T) => TResult
export type ObjectIteratee<TObject> = ObjectIterator<TObject, unknown> | IterateeShorthand<TObject[keyof TObject]>
export type ObjectIterateeCustom<TObject, TResult> =
    | ObjectIterator<TObject, TResult>
    | IterateeShorthand<TObject[keyof TObject]>
export type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (
    value: TObject[keyof TObject],
    key: string,
    collection: TObject,
) => value is S

function isMatch(element: unknown, source: unknown): boolean {
    if (!isPlainObject(element) || !isPlainObject(source)) {
        return false
    }
    const elementObj = element as Record<PropertyName, unknown>
    const sourceObj = source as Record<PropertyName, unknown>

    const keys = Object.keys(sourceObj)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const value = sourceObj[key]
        const elementValue = elementObj[key]

        if (elementValue === value) {
            continue
        }

        if (value == null || typeof value !== 'object') {
            return false
        }
        if (!isMatch(elementValue, value)) {
            return false
        }
    }
    return true
}

export function baseIteratee<T, TResult>(iteratee: ObjectIterateeCustom<T, TResult>): ObjectIterator<T, TResult>
export function baseIteratee<T, TResult>(iteratee: ListIterateeCustom<T, TResult>): ListIterator<T, TResult>
export function baseIteratee<T, TResult>(
    iteratee: ListIterateeCustom<T, TResult> | ObjectIterateeCustom<T, TResult>,
): ListIterator<T, TResult> | ObjectIterator<T, TResult> {
    if (iteratee == null) {
        return function (element: T) {
            return element as unknown as TResult
        }
    }

    if (typeof iteratee === 'function') {
        return iteratee
    }

    if (typeof iteratee === 'string' && !iteratee.includes('.')) {
        return function (element: T) {
            if (element == null) {
                return undefined as TResult
            }
            return (element as Record<PropertyName, unknown>)[iteratee] as TResult
        }
    }

    if (typeof iteratee === 'string' || typeof iteratee === 'symbol' || typeof iteratee === 'number') {
        const path = typeof iteratee === 'string' ? iteratee.split('.') : [iteratee]

        return function (element: T) {
            if (element == null) {
                return undefined as TResult
            }
            // 간단히 getValueByPath 써도 됨
            let result = element as unknown
            for (const key of path) {
                if (result == null) {
                    return undefined as TResult
                }
                result = (result as Record<PropertyName, unknown>)[key]
            }
            return result as TResult
        }
    }

    if (isArrayLike(iteratee) && !isFunction(iteratee)) {
        const [key, value] = iteratee as [PropertyName, unknown]

        if (typeof key === 'string' && !key.includes('.')) {
            return function (element: T) {
                if (element == null) {
                    return false as unknown as TResult
                }
                return ((element as Record<string, unknown>)[key] === value) as unknown as TResult
            }
        }
        const path = typeof key === 'string' ? key.split('.') : [key]

        return function (element: T) {
            if (element == null) {
                return false as TResult
            }
            let result = element as unknown
            for (const prop of path) {
                if (result == null) {
                    return false as TResult
                }
                result = (result as Record<PropertyName, unknown>)[prop]
            }
            return (result === value) as TResult
        }
    }

    if (isPlainObject(iteratee) && !isFunction(iteratee)) {
        return function (element: T) {
            if (!isPlainObject(element)) {
                return false as TResult
            }
            return isMatch(element, iteratee) as unknown as TResult
        }
    }

    throw new Error('Invalid iteratee')
}
