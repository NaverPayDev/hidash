/**
 * @description https://unpkg.com/lodash.sum lodash.sum is only compatible with number arrays
 */
export function sum(elements: number[]): number {
    let result = 0
    const elementLength = elements.length
    for (let i = 0; i < elementLength; i++) {
        result += elements[i]
    }
    return result
}

export default sum
