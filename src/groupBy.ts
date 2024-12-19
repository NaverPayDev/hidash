import {isArrayLike} from './internal/array'
import {baseIteratee, ValueIteratee} from './internal/baseIteratee'
import isPlainObject from './isPlainObject'

type PropertyName = string | number | symbol

export function groupBy<T>(collection: T[] | null | undefined, iteratee?: ValueIteratee<T>): Record<string, T[]>
export function groupBy<T extends object>(
    collection: T | null | undefined,
    iteratee?: ValueIteratee<T[keyof T]>,
): Record<string, T[keyof T][]>
export function groupBy(collection: unknown, iteratee?: ValueIteratee<unknown>): Record<string, unknown[]> {
    if (collection == null) {
        return {}
    }

    const iterFn = baseIteratee(iteratee ?? ((v: unknown) => v))
    const result: Record<string, unknown[]> = {}

    if (isArrayLike(collection)) {
        const arr = collection as ArrayLike<unknown>
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i]
            const key = iterFn(value, i, arr)
            const stringKey = key == null ? 'undefined' : String(key)
            const group = result[stringKey] || (result[stringKey] = [])
            group.push(value)
        }
        return result
    }

    if (isPlainObject(collection)) {
        // 객체일 경우 values 추출
        const values = Object.values(collection as Record<PropertyName, unknown>)
        for (let i = 0; i < values.length; i++) {
            const value = values[i]
            const key = iterFn(value, i, values)
            const stringKey = key == null ? 'undefined' : String(key)
            const group = result[stringKey] || (result[stringKey] = [])
            group.push(value)
        }
        return result
    }

    return {}
}

export default groupBy
