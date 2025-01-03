import _every from 'lodash/every'
import {describe, expect, it} from 'vitest'

import {every} from './every'

type List<T> = ArrayLike<T>

describe('every', () => {
    it('should handle basic array cases', () => {
        const nums = [1, 2, 3]
        const predicate = (x: number) => x > 0
        expect(every(nums, predicate)).toBe(_every(nums, predicate))
    })

    it('should handle object cases', () => {
        const obj = {a: 1, b: 2}
        const predicate = (x: number) => x > 0
        expect(every(obj, predicate)).toBe(_every(obj, predicate))
    })

    it('should handle null/undefined', () => {
        expect(every(null)).toBe(_every(null))
        expect(every(undefined)).toBe(_every(undefined))
    })

    it('should handle array-like objects', () => {
        const arrayLike = {0: 'a', 1: 'b', length: 2}
        const predicate = (x) => Boolean(x)
        expect(every(arrayLike, predicate)).toBe(_every(arrayLike, predicate))
    })

    it('should pass correct arguments to predicate', () => {
        const collection: List<number> = {0: 1, 1: 2, 2: 3, length: 3}
        const predicateArgs: [number, number, List<number>][] = []

        every(collection, (value, index, col) => {
            predicateArgs.push([value, index, col])
            return true
        })

        predicateArgs.forEach(([value, index, col]) => {
            expect(col).toBe(collection)
            expect(typeof index).toBe('number')
            expect(typeof value).toBe('number')
        })
    })

    it('should handle object arrays with property name', () => {
        expect(every([{name: 'jj'}, {name: 'bb'}], 'name')).toBe(_every([{name: 'jj'}, {name: 'bb'}], 'name'))
    })

    it('should handle empty objects', () => {
        expect(every({})).toBe(_every({}))
        expect(every({}, (v) => !!v)).toBe(_every({}, (v) => !!v))
    })

    it('should handle empty arrays', () => {
        expect(every([])).toBe(_every([]))
        expect(every([], (v) => !!v)).toBe(_every([], (v) => !!v))
    })
})
