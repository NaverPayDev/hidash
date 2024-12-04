import {baseIteratee, ListIterateeCustom} from './internal/baseIteratee'
import isArray from './isArray'

export function find<T>(
    collection: T[] | Record<string, T>,
    predicate?: ListIterateeCustom<T, unknown>,
): T | undefined {
    const array = isArray(collection) ? collection : Object.values(collection)

    const iteratee = baseIteratee(predicate)

    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (item !== undefined && iteratee(item, i, array)) {
            return item
        }
    }

    return undefined
}

export default find
