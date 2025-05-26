/**
 * @description
 * Creates an array of `array` values not included in the other given arrays.
 * This implementation utilizes a `Set` for improved performance when checking for exclusions,
 * offering O(1) average time complexity for lookups.
 *
 * @param {ArrayLike<T> | null | undefined} array - The array to inspect.
 * @param {...ArrayLike<T>[]} values - The values to exclude.
 * @returns {T[]} Returns the new array of filtered values.
 */
export function difference<T>(array: ArrayLike<T> | null | undefined, ...values: ArrayLike<T>[]): T[] {
    // Return an empty array if the input array is null, undefined, or empty.
    if (!array || array.length === 0) {
        return []
    }

    const toExclude = new Set<T>()
    const valueLength = values.length

    // Populate the Set with all values to be excluded.
    // This allows for efficient O(1) average time complexity checks later.
    for (let i = 0; i < valueLength; i++) {
        const val = values[i]
        if (val) {
            const valLength = val.length
            for (let j = 0; j < valLength; j++) {
                toExclude.add(val[j])
            }
        }
    }

    const result: T[] = []
    // Iterate through the input array.
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        // If the element is not in the exclusion Set, add it to the result.
        if (!toExclude.has(element)) {
            result.push(element)
        }
    }

    return result
}

export default difference
