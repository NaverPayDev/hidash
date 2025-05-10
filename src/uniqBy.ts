import {baseIteratee} from './internal/baseIteratee'
import {List} from './internal/types'

import type {ValueIteratee} from './internal/baseIteratee.type'

/**
 * @description
 * Creates a duplicate-free version of an array. Uniqueness of elements is determined by
 * the result of passing each element to the `iteratee` function.
 * The order of result values is determined by the order they occur in the original array.
 * This function is similar to lodash's `uniqBy`.
 *
 * @param {List<T> | null | undefined} array - The array to inspect. If null, undefined, or not an array-like object, an empty array is returned.
 * @param {ValueIteratee<T>} iteratee - The function invoked per element to generate the criterion for uniqueness.
 * It receives three arguments: (value: T, index: number, collection: List<T>).
 * @returns {T[]} Returns the new array of unique elements.
 */
export function uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[] {
    // Handle cases where the input is null, undefined, or not an array-like object.
    if (!array || !('length' in array)) {
        return []
    }

    // A Map to store encountered computed values to track uniqueness.
    // The key is the computed value from the iteratee, and the value is boolean (true if seen).
    const seen = new Map<unknown, boolean>()
    const result: T[] = []

    // Normalize the iteratee using `baseIteratee`.
    // This allows `iteratee` to be a function, a property name string, or other shorthands.
    const iterateeFn = baseIteratee(iteratee)
    const arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        const value = array[i]
        // Compute the criterion for uniqueness using the iteratee function.
        const computed = iterateeFn(value, i, array)

        // If the computed criterion has not been seen before,
        // mark it as seen and add the original value to the result array.
        if (!seen.has(computed)) {
            seen.set(computed, true)
            result.push(value)
        }
    }

    return result
}

export default uniqBy
