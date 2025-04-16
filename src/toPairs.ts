import {AnyKindOfDictionary} from './internal/types'
import isArray from './isArray'
import isEmpty from './isEmpty'
import isMap from './isMap'
import isPlainObject from './isPlainObject'
import isSet from './isSet'
import isString from './isString'

export function toPairs<Value, Key = Value>(
    object?: AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>,
): [Key, Value][] {
    if (!object) {
        return []
    }

    if (isString(object)) {
        return object.split('').map((char, index) => [String(index) as unknown as Key, char as unknown as Value])
    }

    if (isArray(object)) {
        return object.map((value, index) => [String(index) as unknown as Key, value as Value])
    }

    if (isEmpty(object)) {
        return []
    }

    if (isPlainObject(object)) {
        return Object.entries(object) as [Key, Value][]
    }

    if (isMap(object)) {
        return [...(object as unknown as Map<Key, Value>).entries()]
    }

    if (isSet(object)) {
        return [...(object as unknown as Set<Value>).entries()] as unknown as [Key, Value][]
    }

    return []
}

export default toPairs
