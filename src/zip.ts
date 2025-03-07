import type {List} from './internal/types'

export function zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): [T1 | undefined, T2 | undefined][]
export function zip<T1, T2, T3>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
): [T1 | undefined, T2 | undefined, T3 | undefined][]
export function zip<T1, T2, T3, T4>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
    arrays4: List<T4>,
): [T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined][]
export function zip<T1, T2, T3, T4, T5>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
    arrays4: List<T4>,
    arrays5: List<T5>,
): [T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined][]
export function zip<T>(...arrays: (List<T> | null | undefined)[]): (T | undefined)[][]
export function zip<T>(...arrays: (List<T> | null | undefined)[]) {
    const length = arrays.length
    if (length === 0) {
        return []
    }

    let maxLength = 0
    for (let i = 0; i < length; i++) {
        const arr = arrays[i]
        if (arr && arr.length > maxLength) {
            maxLength = arr.length
        }
    }

    const result: (T | undefined)[][] = new Array(maxLength)
    for (let i = 0; i < maxLength; i++) {
        const row: (T | undefined)[] = new Array(length)
        for (let j = 0; j < length; j++) {
            const arr = arrays[j]
            row[j] = arr ? arr[i] : undefined
        }
        result[i] = row
    }

    return result
}

export default zip
