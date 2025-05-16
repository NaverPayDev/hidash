/**
 * Reverses the order of elements in an array `in place` and returns the reversed array.
 *
 * @template T
 * @param {T[]} array - The array to reverse.
 * @returns {T[]} The same array with elements in reversed order.
 */
export function reverse<T>(array: T[]): T[] {
    return Array.prototype.reverse.call(array)
}

export default reverse
