import toNumber from './toNumber'

/**
 * @description Invokes `func` after `wait` milliseconds. Any additional arguments are provided to `func` when it's invoked.
 * @category Function
 * @param {(...args: T) => void} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...T} args The arguments to invoke `func` with.
 * @returns {number} Returns the timer ID.
 * @example
 *
 * delay((text) => {
 * console.log(text);
 * }, 1000, 'later');
 * => Logs 'later' after 1 second.
 */
export function delay<T extends unknown[]>(func: (...args: T) => void, wait: number, ...args: T): number {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    // Use `setTimeout` directly as it's the core of the delay functionality.
    const timeout = setTimeout(() => func(...args), +wait || 0)

    // In Node.js, setTimeout returns a Timeout object, while in browsers it returns a number.
    // We attempt to convert it to a number for consistency, although returning
    // the native `setTimeout` return type might be more flexible.
    // However, lodash returns a number, so we follow that for compatibility.
    // If `toNumber` is not strictly necessary or if the environment guarantees a number,
    // this could be simplified. Given we have `toNumber`, we use it.
    return toNumber(timeout)
}

export default delay
