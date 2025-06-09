/**
 * Checks if `value` is an Error object.
 *
 * @param {unknown} value The value to check.
 * @returns {value is Error} Returns `true` if `value` is an Error object, `false` otherwise.
 *
 * @example
 * console.log(isError(new Error())); // true
 * console.log(isError('Error')); // false
 * console.log(isError({ name: 'TestError', message: 'test message' })); // false
 */
export function isError(value: unknown): value is Error {
    if (!value || typeof value !== 'object') {
        return false
    }

    const proto = Object.getPrototypeOf(value)
    return proto !== null && ((proto.constructor && proto.constructor.name === 'Error') || proto instanceof Error)
}

export default isError
