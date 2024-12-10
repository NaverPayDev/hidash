import uniq from './uniq'

export function uniqWith<T>(array: T[] | null | undefined, comparator?: (a: T, b: T) => boolean): T[] {
    if (!Array.isArray(array)) {
        return []
    }

    const length = array.length

    if (!comparator && length > 200) {
        return [...new Set(array)]
    }

    if (!comparator) {
        return uniq(array)
    }

    const result: T[] = []

    let i = -1

    while (++i < length) {
        let isDuplicate = false
        const item = array[i]

        for (const existing of result) {
            if (comparator(existing, item)) {
                isDuplicate = true
                break
            }
        }

        if (!isDuplicate) {
            result.push(item)
        }
    }

    return result
}

export default uniqWith
