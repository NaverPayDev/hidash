import {before} from './before'

/**
 * Creates a function that is invoked only once.
 * Subsequent calls to the new function return the result of the first invocation.
 * Internally uses `before(2, func)` to allow the original function to be called only once.
 *
 * @template T - The type of the function to restrict.
 * @param {T} func - The function to invoke once.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} A new function that calls `func` at most once.
 *
 * @example
 * const initialize = once(() => {
 *   console.log('Initialized!');
 *   return 'result';
 * });
 *
 * initialize(); // Logs: 'Initialized!' and returns 'result'
 * initialize(); // Returns 'result' without logging
 */
export function once<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
): (...args: Parameters<T>) => ReturnType<T> {
    return before(2, func)
}

export default once
