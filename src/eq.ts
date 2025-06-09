/**
 * @description Performs a SameValueZero comparison between two values to determine if they are equivalent.
 * This method is like the strict equality operator (`===`) except that it considers `NaN` equal to `NaN`.
 *
 * @param {unknown} value The value to compare.
 * @param {unknown} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
export function eq(value: unknown, other: unknown): boolean {
    // eslint-disable-next-line no-self-compare
    return value === other || (value !== value && other !== other)
}

export default eq
