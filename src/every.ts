import {baseIteratee} from './internal/baseIteratee'

import type {ListIterateeCustom, ObjectIterateeCustom} from './internal/baseIteratee.type'
import type {List} from './internal/types'

/**
 * @description
 * Checks if the `predicate` function returns a truthy value for all elements in the `collection`.
 * The iteration stops as soon as an element is found for which the `predicate` returns a falsy value.
 * For objects, this function iterates over the object's own enumerable property values.
 *
 * @param {Array|Object|null|undefined} collection The collection to iterate over.
 * @param {Function} [predicate=Boolean] The function invoked per iteration. It receives three arguments: `(value, index|key, collection)`. If omitted, it defaults to the `Boolean` constructor to check for the truthiness of each element.
 * @returns {boolean} Returns `true` if all elements pass the predicate check, otherwise `false`.
 */
export function every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean
export function every<T extends object>(
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
): boolean
export function every<T, U extends T[keyof T]>(
    collection: T | List<U> | null | undefined,
    predicate: ListIterateeCustom<U, boolean> | ObjectIterateeCustom<T, boolean> = Boolean,
): boolean {
    if (!collection) {
        return true
    }

    const values = Object.values(collection)
    const length = values.length

    if (length === 0) {
        return true
    }

    const iteratee = baseIteratee<unknown, boolean>(predicate)

    for (let i = 0; i < length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!iteratee(values[i], i, collection)) {
            return false
        }
    }

    return true
}

export default every
