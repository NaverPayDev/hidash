/**
 * Checks whether the given value is strictly `undefined`.
 *
 * This function returns `true` only if the input is exactly `undefined`, and `false` for all other values,
 * including `null`, `0`, `false`, empty strings, and other falsy values.
 *
 * It also serves as a TypeScript type guard, narrowing the type of the input to `undefined` when true.
 *
 * @param value - The value to check.
 * @returns Whether the value is `undefined`.
 *
 * @example
 * const a = undefined;
 * const b = null;
 * const c = 0;
 *
 * console.log(isUndefined(a)); // true
 * console.log(isUndefined(b)); // false
 * console.log(isUndefined(c)); // false
 */
export function isUndefined(value: unknown): value is undefined {
    return value === undefined
}

export default isUndefined
