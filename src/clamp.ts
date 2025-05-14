/**
 * @description
 * Clamps `number` within inclusive bounds. The interpretation of `bounds` and `upperBound` arguments
 * determines the effective lower and upper limits for clamping:
 *
 * 1.  **If `upperBound` is `undefined` (e.g., `clamp(number, singleBound)`):**
 * - `bounds` (the second argument) is treated as the **upper** limit.
 * - There is no explicit lower limit defined by the parameters. In this scenario, for the internal logic,
 * `number` itself effectively acts as the floor in the `Math.max(number, floor_value)` step,
 * meaning clamping primarily occurs against the provided upper limit.
 *
 * 2.  **If `upperBound` is provided (e.g., `clamp(number, lowerLimit, upperLimit)`):**
 * - `bounds` (the second argument) is treated as the **lower** limit.
 * - `upperBound` (the third argument) is treated as the **upper** limit.
 *
 * Special handling for `NaN` values:
 * - If the input `number` itself is `NaN`, the function returns `NaN`.
 * - If any of the determined effective lower or upper limits (after parameter resolution and defaulting)
 * is `NaN`, the function returns `0`.
 *
 * This function is conceptually similar to Lodash's `_.clamp`, but specific behaviors (like
 * `NaN` handling for bounds and parameter interpretation) might differ from the linked Lodash version.
 * @see https://unpkg.com/lodash.clamp@4.0.3/index.js
 *
 * @param {number} number - The number to clamp.
 * @param {number} [bounds] - This argument's role depends on `upperBound`.
 * If `upperBound` is undefined, `bounds` acts as the upper limit.
 * Otherwise, `bounds` acts as the lower limit.
 * @param {number} [upperBound] - If provided, this is the upper limit, and the `bounds`
 * argument is treated as the lower limit.
 * @returns {number} The clamped number. Returns `NaN` if the input `number` is `NaN`.
 * Returns `0` if the determined effective bounds are `NaN`.
 */
export function clamp(number: number, bounds?: number, upperBound?: number): number {
    // Determine the actual lower and upper bounds based on whether `upperBound` is provided.
    // Case 1: Called as clamp(num, upper_val) -> lowerBound is undefined, finalUpperBound is `bounds` (upper_val).
    // Case 2: Called as clamp(num, lower_val, upper_val) -> lowerBound is `bounds` (lower_val), finalUpperBound is `upperBound` (upper_val).
    const [lowerBound, finalUpperBound] = upperBound === undefined ? [undefined, bounds] : [bounds, upperBound]

    // If the number to be clamped is NaN, return NaN immediately as per typical NaN propagation.
    if (isNaN(number)) {
        return NaN
    }

    // Resolve the effective lower bound for clamping.
    // If `lowerBound` is undefined (e.g., when only one bound argument, acting as upper, was provided),
    // `number` itself is used. This means Math.max(number, number) occurs, effectively not applying a separate lower clamp.
    const lower = lowerBound ?? number

    // Resolve the effective upper bound for clamping.
    // If `finalUpperBound` is undefined (e.g., if `bounds` was `undefined` in the single-bound argument scenario),
    // `number` itself is used, effectively not applying a separate upper clamp.
    const upper = finalUpperBound ?? number

    // Specific behavior: if either of the determined effective bounds is NaN, the function returns 0.
    // This differs from some clamp implementations but is the defined behavior here.
    if (isNaN(lower) || isNaN(upper)) {
        return 0
    }

    // Apply the clamping logic:
    // Math.max ensures the number is not less than the lower bound.
    // Math.min ensures the result of that is not greater than the upper bound.
    return Math.min(Math.max(number, lower), upper)
}

export default clamp
