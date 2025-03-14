import _filter from 'lodash/filter'

import {isArrayLike} from './internal/array'
import {baseIteratee} from './internal/baseIteratee'
import {
    type ListIterateeCustom,
    type ListIterator,
    type ListIteratorTypeGuard,
    type ObjectIterateeCustom,
    type ObjectIterator,
    type ObjectIteratorTypeGuard,
} from './internal/baseIteratee.type'
import isNull from './isNull'
import isPlainObject from './isPlainObject'
import {isUndefined} from './isUndefined'

import type {List} from './internal/types'

export function filter<T extends Record<string, unknown>>(
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
): T[keyof T][]
export function filter<T extends Record<string, unknown>, S extends T[keyof T]>(
    collection: T | null | undefined,
    predicate: ObjectIteratorTypeGuard<T, S>,
): S[]
export function filter(collection: string | null | undefined, predicate?: ListIterateeCustom<string, boolean>): string[]
export function filter<T, S extends T>(
    collection: List<T> | null | undefined,
    predicate: ListIteratorTypeGuard<T, S>,
): S[]
export function filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[]
export function filter<T>(collection: T, predicate?: unknown) {
    if (isNull(collection) || isUndefined(collection)) {
        return []
    }

    const iteratee = baseIteratee(predicate as Parameters<typeof baseIteratee>) as
        | ListIterator<T, boolean>
        | ObjectIterator<T, boolean>
    const result: T[] = []

    if (isArrayLike(collection)) {
        const arrayLike = collection as ArrayLike<T>

        const collectionLength = collection.length
        for (let index = 0; index < collectionLength; index++) {
            const value = arrayLike[index]
            if ((iteratee as ListIterator<T, boolean>)(value, index, collection)) {
                result.push(value)
            }
        }
    } else if (isPlainObject(collection)) {
        for (const key in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, key)) {
                const obj = collection as Record<string, T>

                const value = obj[key]
                if ((iteratee as ObjectIterator<Record<string, T>, boolean>)(value, key, obj)) {
                    result.push(value)
                }
            }
        }
    }

    return result
}

export default filter
