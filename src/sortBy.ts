type PropertyName = string | number | symbol
type Many<T> = T | T[]
type Iteratee<T> = ((value: T) => unknown) | PropertyName
type SortByIteratee<T> = Many<Iteratee<T>>

function buildIteratee<T>(it: Iteratee<T>): (val: T) => unknown {
    if (typeof it === 'function') {
        return it as (val: T) => unknown
    }
    return (val: T) => val[it as keyof T]
}

function compareValue(a: unknown, b: unknown): number {
    if (Object.is(a, b)) {
        return 0
    }
    if (a === undefined) {
        return 1
    }
    if (b === undefined) {
        return -1
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return a - b
    }

    if (typeof a === 'string' && typeof b === 'string') {
        if (a === b) {
            return 0
        }
        return a < b ? -1 : 1
    }

    const aStr = String(a)
    const bStr = String(b)
    if (aStr === bStr) {
        return 0
    }
    return aStr < bStr ? -1 : 1
}

function compareMulti<T>(
    a: {value: T; index: number; criteria: unknown[]},
    b: {value: T; index: number; criteria: unknown[]},
): number {
    const len = Math.min(a.criteria.length, b.criteria.length)
    for (let i = 0; i < len; i++) {
        const c = compareValue(a.criteria[i], b.criteria[i])
        if (c !== 0) {
            return c
        }
    }
    return a.index - b.index
}

export function sortBy<T>(collection: T[] | Record<string, T>, ...iteratees: SortByIteratee<T>[]): T[] {
    const arr: T[] = Array.isArray(collection) ? collection : Object.values(collection)
    if (!arr.length) {
        return []
    }

    const flat: Iteratee<T>[] = ([] as Iteratee<T>[]).concat(...iteratees)
    const built = flat.length ? flat.map(buildIteratee) : [(v: T) => v]

    const mapped = arr.map((value, index) => {
        const criteria = built.map((fn) => fn(value))
        return {value, index, criteria}
    })

    mapped.sort(compareMulti)
    return mapped.map((item) => item.value)
}

export default sortBy
