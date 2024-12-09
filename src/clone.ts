import isArray from './isArray'
import isObject from './isObject'

export function clone<T>(value: T): T {
    if (value === null || typeof value !== 'object') {
        return value
    }

    if (isArray(value)) {
        return value.slice() as T
    }

    if (value instanceof Date) {
        return new Date(value.getTime()) as T
    }

    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags) as T
    }

    if (ArrayBuffer.isView(value) && !(value instanceof DataView)) {
        const TypedArrayConstructor = value.constructor as new (buffer: ArrayBuffer) => ArrayBufferView
        return new TypedArrayConstructor(value.buffer.slice(0)) as T
    }

    if (value instanceof ArrayBuffer) {
        return value.slice(0) as T
    }

    if (value instanceof Map) {
        return new Map(value) as T
    }

    if (value instanceof Set) {
        return new Set(value) as T
    }

    if (isObject(value)) {
        const result = Object.create(Object.getPrototypeOf(value))

        Object.assign(result, value)

        const symbols = Object.getOwnPropertySymbols(value)
        if (symbols.length) {
            symbols.forEach((sym) => {
                if (Object.prototype.propertyIsEnumerable.call(value, sym)) {
                    result[sym] = value[sym as keyof typeof value]
                }
            })
        }

        return result as T
    }

    return {} as T
}

export default clone
