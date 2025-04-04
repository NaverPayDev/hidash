/**
 * @description: https://unpkg.com/browse/lodash.isnil@4.0.0/index.js
 */
export function isNil(value: unknown): value is null | undefined {
    return value == null
}

export default isNil
