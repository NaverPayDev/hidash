/**
 *
 * @description
 * Performs a **deep equality comparison** between two values.
 * Handles special cases such as `NaN` and object references.
 *
 * This function recursively compares the properties of objects and elements of arrays,
 * ensuring that all nested values are equal.
 *
 * @param {unknown} value The first value to compare
 * @param {unknown} other The second value to compare
 * @returns {boolean} `true` if the values are equal, `false` otherwise
 *
 *  * @example
 * isEqual({ a: 1 }, { a: 1 }); // true
 * isEqual([1, 2], [1, 2]);     // true
 * isEqual(NaN, NaN);           // true
 * isEqual({ a: { b: 2 } }, { a: { b: 2 } }); // true (deep comparison)
 */
export function isEqual(value: unknown, other: unknown) {
    if (typeof value === 'number' && typeof other === 'number') {
        if (isNaN(value) && isNaN(other)) {
            return true
        }
    }

    if (value === other) {
        return true
    }

    if (typeof value === 'object' && value !== null && typeof other === 'object' && other !== null) {
        const valueObject = value as Record<string, unknown>
        const otherObject = other as Record<string, unknown>
        if (Object.getPrototypeOf(valueObject) !== Object.getPrototypeOf(otherObject)) {
            return false
        }

        const valueKeys = Object.keys(valueObject)
        const otherKeys = Object.keys(otherObject)

        if (valueKeys.length !== otherKeys.length) {
            return false
        }

        for (const key of valueKeys) {
            if (!isEqual(valueObject[key], otherObject[key])) {
                return false
            }
        }

        return true
    }

    return false
}

export default isEqual
