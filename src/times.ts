export function times(n: number): number[]
export function times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[]
export function times<TResult>(n: number, iteratee?: (num: number) => TResult): (number | TResult)[] {
    if (!Number.isInteger(n) || n < 1 || n >= Number.MAX_SAFE_INTEGER) {
        return []
    }

    const nTimes = n
    const result = new Array(nTimes)

    if (iteratee) {
        for (let i = 0; i < nTimes; i++) {
            result[i] = iteratee(i) // temp
        }
    } else {
        for (let i = 0; i < nTimes; i++) {
            result[i] = i
        }
    }

    return result
}

export default times
