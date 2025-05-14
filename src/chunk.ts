/**
 * @description
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 * This function is similar to lodash's `_.chunk`.
 * (Original source inspiration for Lodash version: https://unpkg.com/lodash@4.17.21/chunk.js)
 *
 * @template T - The type of elements in the array.
 * @param {T[] | null | undefined} array - The array to process.
 * @param {number} [size=1] - The length of each chunk. Defaults to 1.
 * If `size` is less than 1, an empty array is returned.
 * @returns {T[][]} Returns the new array of chunks, or an empty array if the input
 * array is null/undefined or size is invalid.
 */
export function chunk<T>(array: T[] | null | undefined, size: number = 1): T[][] {
    // Guard clause: if the array is null/undefined or size is less than 1,
    // return an empty array as no valid chunking can be performed.
    if (!array || size < 1) {
        return []
    }

    // Determine the actual size for each chunk.
    // It's the floored value of `size`, but never less than 1.
    // (e.g., if size is 2.5, chunks will be of size 2).
    const absoluteSize = Math.max(Math.floor(size), 1)
    const length = array.length // Cache array length for minor performance optimization.

    // Pre-allocate the result array with the calculated number of chunks needed.
    const result: T[][] = new Array(Math.ceil(length / absoluteSize))

    let resIndex = 0 // Index for populating the result array.
    // Iterate over the input array, incrementing by `absoluteSize` in each step.
    for (let i = 0; i < length; i += absoluteSize) {
        // Extract a chunk from the array using `slice` and add it to the result array.
        result[resIndex++] = array.slice(i, i + absoluteSize)
    }

    return result
}

export default chunk
