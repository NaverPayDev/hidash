/* eslint-disable @typescript-eslint/no-explicit-any */

type Predicate<T> = ((item: T) => boolean) | string | number | object | (string | number)[]

function isMatch<T>(obj: T, path: string | number | (string | number)[]): boolean {
    try {
        if (obj == null) {
            return false
        }
        if (!path) {
            return (obj as any)[path]
        }

        const paths: (string | number)[] = Array.isArray(path) ? path : [path]

        let result: any = obj

        const length = paths.length - 1
        for (let i = 0; i < length; i++) {
            const p = paths[i]
            if (p in result) {
                result = result[p]
            } else {
                return false
            }
        }

        const item = paths[length]

        if (typeof result === 'object') {
            return item in result
        }

        return result === item
    } catch {
        return false
    }
}

function isDeepMatch<T>(obj: T, source: object): boolean {
    if (typeof obj !== 'object') {
        return obj === source
    }
    return Object.entries(source).every(([key, value]) => {
        if (Array.isArray(obj) || typeof obj !== 'object') {
            return obj === source
        }
        if (key in (obj as any)) {
            return isDeepMatch((obj as any)[key], value)
        }
        return false
    })
}

function makeCheck<T>(predicate?: Predicate<T>): (item: T) => boolean {
    if (predicate == null) {
        return (item) => !!item
    }
    if (typeof predicate === 'function') {
        return predicate as (item: T) => boolean
    }
    if (!Array.isArray(predicate) && typeof predicate === 'object') {
        return (item) => isDeepMatch(item, predicate)
    }
    return (item) => isMatch(item, predicate)
}

/**
 * @description
 * Iterates over elements of collection, return first matched element
 *
 * @param {Array|Object} collection collection to find.
 * @param {Function} predicate function invoked per iteration.
 *
 * @return Returns the matched element.
 */
export function find<T = unknown>(collection: T[] | object, predicate?: Predicate<T>): T | undefined {
    if (collection == null) {
        return undefined
    }

    const check = makeCheck(predicate)

    const arr: T[] = Array.isArray(collection) ? collection : Object.values(collection)

    for (const item of arr) {
        if (check(item)) {
            return item
        }
    }

    return undefined
}

export default find
