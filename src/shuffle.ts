import {isArrayLike} from './internal/array'
import isArray from './isArray'

import type {Collection} from './internal/types'

export function shuffle<T>(collection: Collection<T> | null | undefined): T[] {
    if (collection == null) {
        return []
    }
    let result: T[]
    if (collection instanceof Map) {
        result = []
        const entries = Array.from(collection.entries())
        const entriesLength = entries.length
        for (let i = 0; i < entriesLength; i++) {
            result.push(entries[i][0] as unknown as T)
            result.push(entries[i][1] as T)
        }
    } else if (collection instanceof Set) {
        result = Array.from(collection)
    } else if (typeof collection === 'string' || isArray(collection)) {
        result = [...collection] as T[]
    } else if (typeof collection === 'object') {
        if (isArrayLike(collection)) {
            result = Array.from(collection as ArrayLike<T>)
        } else {
            result = Object.values(collection) as T[]
        }
    } else {
        return []
    }
    let index = result.length
    while (index > 0) {
        const rand = Math.floor(Math.random() * index--)
        const temp = result[index]
        result[index] = result[rand]
        result[rand] = temp
    }
    return result
}

export default shuffle
