import {isArrayLike} from './internal/array'

/**
 * @description hhttps://unpkg.com/browse/lodash.isempty@4.4.0/index.js
 */
export function isEmpty(value: unknown): boolean {
    if (value == null) {
        return true
    }

    const typeOf = typeof value
    if (typeOf === 'number' || typeOf === 'boolean' || typeOf === 'function') {
        return true
    }
    if (isArrayLike(value)) {
        return !(value as ArrayLike<unknown>).length
    }

    const type = Object.prototype.toString.call(value)

    if (type === '[object Date]') {
        return true
    }

    if (type === '[object Map]' || type === '[object Set]') {
        return !(value as Map<unknown, unknown> | Set<unknown>).size
    }

    if (type === '[object Object]') {
        for (const key in value as object) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                return false
            }
        }
        return true
    }

    return false
}

export default isEmpty
