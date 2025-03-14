export function difference<T>(array: ArrayLike<T> | null | undefined, ...values: ArrayLike<T>[]): T[] {
    if (!array || array.length === 0) {
        return []
    }

    const toExclude = new Set<T>()
    const valueLength = values.length
    for (let i = 0; i < valueLength; i++) {
        const val = values[i]
        const valLength = val.length
        for (let j = 0; j < valLength; j++) {
            toExclude.add(val[j])
        }
    }

    const result: T[] = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (!toExclude.has(element)) {
            result.push(element)
        }
    }

    return result
}

export default difference
