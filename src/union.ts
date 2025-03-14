export function union<T>(...arrays: (T[] | null | undefined)[]): T[] {
    const result: T[] = []
    const seen = new Map<T, boolean>()
    const arrayLength = arrays.length

    for (let i = 0; i < arrayLength; i++) {
        const array = arrays[i]
        if (array) {
            const length = array.length
            for (let j = 0; j < length; j++) {
                const item = array[j]
                if (!seen.has(item)) {
                    seen.set(item, true)
                    result.push(item)
                }
            }
        }
    }

    return result
}

export default union
