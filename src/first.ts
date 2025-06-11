/**
 * @description
 * Gets the first element of an array.
 *
 * @param {Array<T>|null|undefined} array The array to query.
 * @returns {T|undefined} Returns the first element of the array, or `undefined` if the array is empty, null, or undefined.
 */
export function first<T>(array: T[] | null | undefined): T | undefined {
    return array && array.length ? array[0] : undefined
}

export default first
