/* eslint-disable @typescript-eslint/no-explicit-any */
type Value = string | number | undefined | null | boolean
type FnType<T> = (item: T) => Value
type Iteratee<T> = FnType<T> | Value

type Iteratees<T> = Iteratee<T> | Iteratee<T>[]

const convertValues = function <T>(iteratees: Iteratees<T>[]) {
    const baseIteratee: FnType<T> = (v) => v as Value
    let result: Iteratee<T>[] = []

    for (const iteratee of iteratees.length ? iteratees : [baseIteratee]) {
        if (Array.isArray(iteratee)) {
            result = result.concat(iteratee)
        } else {
            result.push(iteratee)
        }
    }
    return result.map((fn): FnType<T> => {
        if (typeof fn === 'function') {
            return fn
        }
        const key = fn as any
        return ((item: any) => item[key]) as FnType<T>
    })
}

function compareValues(a: unknown, b: unknown): number {
    if (!(a == null) && !(b == null)) {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
    }
    if (a == null) {
        return 1
    }
    if (b == null) {
        return -1
    }

    return 0
}

export function sortBy<T>(collection: T[], ...iteratees: Iteratees<T>[]): T[] {
    if (!collection) {
        return []
    }

    const getValues = convertValues(iteratees)
    const valuesLength = getValues.length

    return collection
        .map((value, index) => {
            return {
                origin: value,
                index,
                values: getValues.map((fn) => fn(value)),
            }
        })
        .sort((a, b) => {
            for (let i = 0; i < valuesLength; i++) {
                const c = compareValues(a.values[i], b.values[i])
                if (c !== 0) {
                    return c
                }
            }

            return 0
        })
        .map(({origin}) => origin)
}

export default sortBy
