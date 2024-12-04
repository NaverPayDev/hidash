import isArray from './isArray'
import isEqual from './isEqual'
import isObject from './isObject'

type Predicate<T> = (item: T, index: number, array: T[]) => boolean
type Shorthand<T> = DeepPartial<T> | [keyof T, unknown] | keyof T

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

function isPartialMatch<T>(item: T, partial: DeepPartial<T>): boolean {
    if (!item || !partial) {
        return false
    }

    return Object.keys(partial).every((key) => {
        const partialValue = partial[key as keyof T]
        const itemValue = item[key as keyof T]

        if (isObject(partialValue) && isObject(itemValue)) {
            return isPartialMatch(itemValue, partialValue as DeepPartial<typeof itemValue>)
        }

        return isEqual(itemValue, partialValue)
    })
}

function isMatchPredicate<T>(item: T | undefined, predicate: Predicate<T> | Shorthand<T>): boolean {
    if (!item) {
        return false
    }

    if (typeof predicate === 'function') {
        return predicate(item, 0, [])
    }

    if (isArray(predicate)) {
        const [key, value] = predicate
        return isEqual(item[key], value)
    }

    if (typeof predicate === 'string') {
        return Boolean(item[predicate as keyof T])
    }

    return isPartialMatch(item, predicate as DeepPartial<T>)
}

export function find<T>(collection: T[] | Record<string, T>, predicate?: Predicate<T> | Shorthand<T>): T | undefined {
    const array = isArray(collection) ? collection : Object.values(collection)

    const isMatch = predicate ? (item: T) => isMatchPredicate(item, predicate) : (item: T) => Boolean(item)

    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (item !== undefined && isMatch(item)) {
            return item
        }
    }

    return undefined
}

export default find
