import isArray from './isArray'

import type {List, Many} from './internal/types'

function baseFlatten<T>(array: List<Many<T>>, depth: number = 1, result?: T[]): T[] {
    const flattenResult: unknown[] = result || []

    const length = array.length

    if (array && length > 0) {
        for (let i = 0; i < length; i++) {
            const element = array[i]
            if (element && isArray(element) && depth > 0) {
                baseFlatten(element, depth - 1, flattenResult)
            } else {
                flattenResult.push(element)
            }
        }
    }

    return flattenResult as T[]
}

/**
 * @description
 * Flattens a nested array a single level deep.
 *
 * @param {List<Many<T>>|null|undefined} array The array to flatten.
 * @returns {T[]} Returns the new flattened array.
 */
export function flatten<T>(array: List<Many<T>> | null | undefined): T[] {
    if (array === null || array === undefined) {
        return []
    }
    return baseFlatten(array, 1)
}

export default flatten
