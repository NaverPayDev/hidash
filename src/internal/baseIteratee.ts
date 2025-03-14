import isFunction from '../isFunction'
import isPlainObject from '../isPlainObject'
import {isArrayLike} from './array'

import type {
    ListIterateeCustom,
    ListIterator,
    ObjectIterateeCustom,
    ObjectIterator,
    PropertyName,
    ValueKeyIteratee,
} from './baseIteratee.type'

function isMatch(element: unknown, source: unknown): boolean {
    if (!isPlainObject(element) || !isPlainObject(source)) {
        return false
    }
    const elementObj = element as Record<PropertyName, unknown>
    const sourceObj = source as Record<PropertyName, unknown>

    const keys = Object.keys(sourceObj)
    const keyLength = keys.length
    for (let i = 0; i < keyLength; i++) {
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
export function baseIteratee<T, TResult>(iteratee: ValueKeyIteratee<T>): ObjectIterator<T, TResult>
export function baseIteratee<T, TResult>(iteratee: unknown) {
    if (iteratee == null) {
        return function (element: T) {
            return element as unknown as TResult
        }
    }

    if (typeof iteratee === 'function') {
        return iteratee
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
