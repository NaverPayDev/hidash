import isArray from './isArray' // Assuming isArray correctly checks for Array type
import isObject from './isObject' // Assuming isObject correctly checks for 'plain' Object type

/**
 * @description
 * Creates a shallow clone of `value`. This function handles primitives, null, and common
 * JavaScript object types such as Array, Date, RegExp, TypedArray (excluding DataView),
 * ArrayBuffer, Map, Set, and plain objects.
 * For plain objects, the clone will have the same prototype and a copy of its own
 * enumerable properties (both String-keyed and Symbol-keyed).
 * This function is similar in purpose to lodash's `_.clone` (which also performs a shallow clone).
 *
 * @template T - The type of the value to clone.
 * @param {T} value - The value to clone.
 * @returns {T} Returns the shallow cloned value.
 */
export function clone<T>(value: T): T {
    // Primitives (string, number, boolean, undefined, symbol, bigint) and null
    // are returned directly as they are immutable or effectively passed by value.
    if (value === null || typeof value !== 'object') {
        return value
    }

    // For Arrays, create a shallow copy using the slice method.
    // `value.slice()` creates a new array with its elements shallowly copied.
    if (isArray(value)) {
        return value.slice() as T
    }

    // For Date objects, create a new Date instance with the same time value.
    if (value instanceof Date) {
        return new Date(value.getTime()) as T
    }

    // For RegExp objects, create a new RegExp instance with the same source and flags.
    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags) as T
    }

    // Handle TypedArrays (e.g., Uint8Array, Int32Array, etc.),
    // explicitly excluding DataView which might require different handling or is not supported here.
    if (ArrayBuffer.isView(value) && !(value instanceof DataView)) {
        // Get the specific TypedArray constructor (e.g., Uint8Array, Float32Array).
        const TypedArrayConstructor = value.constructor as new (buffer: ArrayBuffer) => ArrayBufferView
        // Create a new TypedArray instance. Its underlying ArrayBuffer is a shallow copy
        // of the original TypedArray's buffer. `value.buffer.slice(0)` creates this new buffer.
        return new TypedArrayConstructor(value.buffer.slice(0) as ArrayBuffer) as T
    }

    // For ArrayBuffer objects, create a shallow copy using the slice method.
    // `value.slice(0)` creates a new ArrayBuffer with a copy of the original's bytes.
    if (value instanceof ArrayBuffer) {
        return value.slice(0) as T
    }

    // For Map objects, create a new Map. The constructor `new Map(iterable)`
    // performs a shallow copy of the key-value pairs from the original Map.
    if (value instanceof Map) {
        return new Map(value) as T
    }

    // For Set objects, create a new Set. The constructor `new Set(iterable)`
    // performs a shallow copy of the values from the original Set.
    if (value instanceof Set) {
        return new Set(value) as T
    }

    // Handle plain objects (or objects considered as such by the `isObject` helper).
    // This typically targets objects created via `{}` literals or `new Object()`.
    if (isObject(value)) {
        // Create a new object with the same prototype as the original object.
        const result = Object.create(Object.getPrototypeOf(value))

        // Shallow copy own enumerable string-keyed properties from `value` to `result`.
        Object.assign(result, value)

        // Shallow copy own enumerable symbol-keyed properties, as Object.assign does not handle these.
        const symbols = Object.getOwnPropertySymbols(value)
        if (symbols.length > 0) {
            symbols.forEach((sym) => {
                // Check if the symbol property is enumerable on the original object.
                if (Object.prototype.propertyIsEnumerable.call(value, sym)) {
                    result[sym] = value[sym as keyof typeof value]
                }
            })
        }
        return result as T
    }

    // Fallback for any other 'object' types not explicitly handled by the conditions above
    // and not matching `isObject`. This returns a new, empty plain object cast to type T.
    // Warning: This may not produce the desired clone for all unhandled complex object types,
    // as it discards all data and specific type information, effectively returning `{}`.
    return {} as T
}

export default clone
