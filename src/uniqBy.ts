import {baseIteratee} from './internal/baseIteratee'
import {List} from './internal/types'

import type {ValueIteratee} from './internal/baseIteratee.type'

export function uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[] {
    if (!array || !('length' in array)) {
        return []
    }

    const seen = new Map<unknown, boolean>()
    const result: T[] = []
    const iterateeFn = baseIteratee(iteratee)
    const arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        const value = array[i]
        const computed = iterateeFn(value, i, array)

        if (!seen.has(computed)) {
            seen.set(computed, true)
            result.push(value)
        }
    }

    return result
}

export default uniqBy
