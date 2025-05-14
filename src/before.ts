/**
 * @description
 * Creates a function that invokes `func` as long as it's called less than `initialN` times.
 * Subsequent calls to the new function return the result of the last `func` invocation.
 * This behavior is similar to lodash's `_.before` function.
 *
 * @template T - The type of the function to restrict.
 * @param {number} initialN - The number determining how many times `func` can be called.
 * `func` is invoked if called less than `initialN` times (i.e., up to `initialN - 1` times).
 * If `initialN` is less than or equal to 1, `func` will not be invoked.
 * @param {T} func - The function to restrict.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} Returns the new restricted function.
 * @throws {TypeError} If `func` is not a function.
 */
export function before<T extends (...args: Parameters<T>) => ReturnType<T>>(
    initialN: number,
    func: T,
): (...args: Parameters<T>) => ReturnType<T> {
    // Ensure `func` is a function, otherwise throw an error.
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }

    let result: ReturnType<T>
    // Ensure 'n' is an integer. It tracks the remaining times `func` can be called before it's restricted.
    let n = Math.floor(initialN)

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
        // Decrement n. If n is still greater than 0 after decrementing, it means func can be invoked.
        // This allows func to be called `initialN - 1` times if initialN was originally > 1.
        if (--n > 0) {
            result = func.apply(this, args)
        }
        // If `n` has reached 1 or less (meaning `func` has been called the intended maximum times,
        // or was not supposed to be called at all if initialN was <=1),
        // disassociate `func` to prevent further calls and aid garbage collection.
        if (n <= 1) {
            // eslint-disable-next-line no-param-reassign
            func = undefined as unknown as T // Original func is no longer needed.
        }
        // Return the result of the last actual invocation, or undefined if never invoked.
        return result
    }
}

export default before
