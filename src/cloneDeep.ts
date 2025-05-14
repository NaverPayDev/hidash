import {FUNCTION_TAG, WEAK_SET_TAG, WEAK_MAP_TAG} from './internal/to-string-tags'
import isArray from './isArray'

/**
 * @description
 * Creates a deep clone of `value`. This function recursively clones nested objects and arrays.
 * It includes basic handling for circular references by returning an empty object (`{}`)
 * for objects already encountered during the current cloning process.
 *
 * Key behaviors and limitations for specific types:
 * - **Primitives** (string, number, boolean, null, undefined, symbol, bigint): Returned as-is.
 * - **Arrays**: A new array is created, and its elements are deep cloned.
 * - **Maps**: A new Map is created. Its values are deep cloned; keys are assigned by reference.
 * - **Sets**: A new Set is created, and its values are deep cloned.
 * - **Plain Objects** (specifically, those where `Object.prototype.toString.call(v)` returns `[object Object]`):
 * A new object is created with the same prototype, and its own enumerable properties are deep cloned.
 * - **Functions, WeakMaps, WeakSets**: An empty object (`{}`) is returned. These types are not deeply cloned by this implementation.
 * - **Circular References**: When a circular reference is detected, an empty object (`{}`) is returned for that reference point
 * to break the cycle, meaning the original circular structure is not fully replicated.
 * - **Other Object Types (e.g., Date, RegExp, TypedArray, ArrayBuffer, custom class instances not matching `[object Object]`):
 * These types are **returned by reference (i.e., NOT cloned)**. This is a significant limitation for a "deep" clone.
 *
 * This function is conceptually similar to lodash's `_.cloneDeep` but has notable
 * differences in its handling of certain types, circular references, and overall completeness.
 * It is a simplified implementation.
 *
 * @template T - The type of the value to clone.
 * @param {T} value - The value to deeply clone.
 * @returns {T} Returns the deeply cloned value, subject to the specific behaviors and limitations noted above.
 */
export function cloneDeep<T>(value: T): T {
    // `seen` tracks objects already processed in the current cloning operation.
    // This is crucial for handling circular references and preventing infinite loops.
    const seen = new WeakSet()

    // Inner recursive helper function that performs the actual deep cloning.
    function deepClone<R>(v: R): R {
        // Get the internal [[Class]] string tag for more precise type checking.
        const type = Object.prototype.toString.call(v)

        // Functions, WeakMaps, and WeakSets are complex to clone deeply or their identity is key.
        // This implementation opts to return a new empty object for them, signifying they are not cloned.
        if (type === WEAK_MAP_TAG || type === WEAK_SET_TAG || type === FUNCTION_TAG) {
            return {} as R // Design choice: return an empty object.
        }

        // Primitives (string, number, etc.) and null are immutable or passed by value,
        // so they don't need cloning and can be returned directly.
        if (v === null || typeof v !== 'object') {
            return v
        }

        // Handle circular references: If this object has already been encountered in the
        // current cloning path (i.e., it's part of a cycle), return an empty object.
        // This breaks the infinite loop but means the circular structure isn't replicated with the original reference.
        if (seen.has(v)) {
            return {} as R // Design choice: return an empty object for circular references.
        }
        // Add the current object to the `seen` set before processing its properties/elements.
        seen.add(v as object)

        // If the value is an array, create a new array and deep clone each of its elements.
        if (isArray(v)) {
            // Using `any[]` temporarily for `result` simplifies pushing mixed-type cloned items.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result: any[] = []
            v.forEach((item) => {
                result.push(deepClone(item)) // Recursively clone each array element.
            })
            // Cast the result back to the expected generic type R.
            return result as unknown as R
        }

        // If the value is a Map, create a new Map.
        // Keys are assigned by reference; values are deep cloned.
        if (v instanceof Map) {
            const result = new Map()
            v.forEach((item, k) => {
                result.set(k, deepClone(item)) // `k` (key) is by reference, `item` (value) is deep cloned.
            })
            return result as unknown as R
        }

        // If the value is a Set, create a new Set and deep clone each of its elements.
        if (v instanceof Set) {
            const result = new Set()
            v.forEach((item) => {
                result.add(deepClone(item)) // Recursively clone each Set element.
            })
            return result as unknown as R
        }

        // Handle plain JavaScript objects (those identified by `Object.prototype.toString.call(v) === '[object Object]'`).
        if (type === '[object Object]') {
            const proto = Object.getPrototypeOf(v) // Get the prototype of the original object.
            const result = Object.create(proto) // Create the new object with the same prototype.

            // Iterate over all enumerable properties (own and potentially inherited via `for...in`).
            for (const key in v) {
                // Ensure that we only copy own properties, not inherited ones.
                if (Object.prototype.hasOwnProperty.call(v, key)) {
                    // Recursively deep clone the value of each own property.
                    result[key] = deepClone((v as Record<string, unknown>)[key])
                }
            }
            return result as R
        }

        // Fallback for any other object types not explicitly handled above.
        // This includes types like Date, RegExp, TypedArrays, ArrayBuffer, DataView,
        // and custom class instances that don't have `[object Object]` as their string tag.
        // These objects are returned by reference, meaning they are NOT deeply cloned.
        // This is a significant limitation of this simplified `cloneDeep` version.
        return v
    }

    // Start the deep cloning process with the initial value.
    return deepClone(value)
}

export default cloneDeep
