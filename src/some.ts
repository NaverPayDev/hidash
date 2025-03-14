import {isArrayLike} from './internal/array'
import {baseIteratee} from './internal/baseIteratee'
import isPlainObject from './isPlainObject'
import keys from './keys'

import type {ListIterateeCustom, ObjectIterateeCustom} from './internal/baseIteratee.type'
import type {List} from './internal/types'

export function some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean
export function some<T extends object>(
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
): boolean
export function some<T>(
    collection: unknown,
    predicate?: ListIterateeCustom<T, boolean> | ObjectIterateeCustom<T, boolean>,
) {
    if (!predicate && keys(collection).length === 0) {
        return false
    }

    const iteratee = baseIteratee<unknown, boolean>(predicate)

    if (isPlainObject(collection)) {
        for (const key in collection) {
            if (
                Object.prototype.hasOwnProperty.call(collection, key) &&
                iteratee(collection[key as keyof typeof collection], 0, [])
            ) {
                return true
            }
        }
    }

    if (isArrayLike(collection)) {
        const arrayLike = collection as ArrayLike<T>

        const collectionLength = collection.length
        for (let i = 0; i < collectionLength; i++) {
            if (iteratee(arrayLike[i], i, arrayLike)) {
                return true
            }
        }
    }

    return false
}

export default some
