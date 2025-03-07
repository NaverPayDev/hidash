import _zip from 'lodash/zip'
import {describe, expect, it} from 'vitest'

import {zip} from './zip'

describe('zip', () => {
    it('should zip basic arrays with equal lengths', () => {
        const result = zip(['a', 'b'], [1, 2], [true, false])
        const expected = _zip(['a', 'b'], [1, 2], [true, false])
        expect(result).toEqual(expected)
    })

    it('should handle arrays of different lengths', () => {
        const result = zip(['a', 'b', 'c'], [1, 2], [true])
        const expected = _zip(['a', 'b', 'c'], [1, 2], [true])
        expect(result).toEqual(expected)
    })

    it('should return an empty array for empty inputs', () => {
        const result = zip([], [], [])
        const expected = _zip([], [], [])
        expect(result).toEqual(expected)
    })

    it('should handle a single array input', () => {
        const result = zip(['a', 'b', 'c'])
        const expected = _zip(['a', 'b', 'c'])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with undefined and null values', () => {
        const result = zip(['a', undefined, 'c'], [1, null, 3])
        const expected = _zip(['a', undefined, 'c'], [1, null, 3])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with object values', () => {
        const result = zip([{x: 1}, {y: 2}], [{z: 3}, {w: 4}])
        const expected = _zip([{x: 1}, {y: 2}], [{z: 3}, {w: 4}])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with nested arrays', () => {
        const result = zip([1, [2, 3]], [4, [5, 6]])
        const expected = _zip([1, [2, 3]], [4, [5, 6]])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with different types', () => {
        const result = zip(['a', 1, true], [{x: 1}, [2, 3], null])
        const expected = _zip(['a', 1, true], [{x: 1}, [2, 3], null])
        expect(result).toEqual(expected)
    })

    it('should handle large arrays efficiently', () => {
        const largeArray1 = Array(1000).fill('a')
        const largeArray2 = Array(1000).fill(1)
        const result = zip(largeArray1, largeArray2)
        const expected = _zip(largeArray1, largeArray2)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with symbols correctly', () => {
        const result = zip([Symbol('a'), Symbol('b')], [1, 2])
        const expected = _zip([Symbol('a'), Symbol('b')], [1, 2])

        // Symbol은 고유한 식별자를 생성하므로, 같은 설명을 가진 두 개의 Symbol이라도 서로 다른 값으로 간주
        // 따라서 설명으로 비교
        expect(result.map(([sym, num]) => [sym?.description, num])).toEqual(
            expected.map(([sym, num]) => [sym?.description, num]),
        )
    })

    it('should handle arrays with functions correctly', () => {
        const fn1 = () => {}
        const fn2 = () => {}
        const result = zip([fn1, fn2], [1, 2])
        const expected = _zip([fn1, fn2], [1, 2])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with NaN and Infinity values correctly', () => {
        const result = zip([NaN, Infinity], [1, 2])
        const expected = _zip([NaN, Infinity], [1, 2])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with Date objects correctly', () => {
        const date1 = new Date()
        const date2 = new Date()
        const result = zip([date1, date2], [1, 2])
        const expected = _zip([date1, date2], [1, 2])
        expect(result).toEqual(expected)
    })

    it('should handle arrays with RegExp objects correctly', () => {
        const regex1 = /abc/
        const regex2 = /def/
        const result = zip([regex1, regex2], [1, 2])
        const expected = _zip([regex1, regex2], [1, 2])
        expect(result).toEqual(expected)
    })

    // Additional specific test cases
    it('should return an empty array when no arguments are provided', () => {
        expect(zip()).toEqual([])
    })

    it('should handle a single argument correctly', () => {
        const arr = ['a', 'b', 'c']
        expect(zip(arr)).toEqual([['a'], ['b'], ['c']])
    })

    it('should handle arrays of different lengths', () => {
        const result = zip([1, 2], [3, 4, 5], [6])
        expect(result).toEqual([
            [1, 3, 6],
            [2, 4, undefined],
            [undefined, 5, undefined],
        ])
    })

    it('should handle arrays with undefined values', () => {
        const result = zip([1, undefined, 3], [4, 5, undefined])
        expect(result).toEqual([
            [1, 4],
            [undefined, 5],
            [3, undefined],
        ])
    })

    it('should handle arrays with null values', () => {
        const result = zip([1, null, 3], [null, 5, 6])
        expect(result).toEqual([
            [1, null],
            [null, 5],
            [3, 6],
        ])
    })

    it('should handle arrays with object values', () => {
        const obj1 = {a: 1}
        const obj2 = {b: 2}
        const result = zip([obj1, obj2], [3, 4])
        expect(result).toEqual([
            [obj1, 3],
            [obj2, 4],
        ])
    })

    it('should handle arrays with symbol values', () => {
        const sym1 = Symbol('test1')
        const sym2 = Symbol('test2')
        const result = zip([sym1, sym2], [1, 2])
        expect(result).toEqual([
            [sym1, 1],
            [sym2, 2],
        ])
    })

    it('should handle arrays with function values', () => {
        const fn1 = () => {}
        const fn2 = () => {}
        const result = zip([fn1, fn2], [1, 2])
        expect(result).toEqual([
            [fn1, 1],
            [fn2, 2],
        ])
    })

    it('should handle very large arrays', () => {
        const arr1 = Array(10000).fill('a')
        const arr2 = Array(10000).fill(1)
        const result = zip(arr1, arr2)
        expect(result.length).toBe(10000)
        expect(result[0]).toEqual(['a', 1])
        expect(result[9999]).toEqual(['a', 1])
    })

    it('should handle arrays with NaN and Infinity', () => {
        const result = zip([NaN, Infinity], [1, 2])
        expect(result).toEqual([
            [NaN, 1],
            [Infinity, 2],
        ])
    })

    it('should handle arrays with Date objects', () => {
        const date1 = new Date('2023-01-01')
        const date2 = new Date('2023-01-02')
        const result = zip([date1, date2], [1, 2])
        expect(result).toEqual([
            [date1, 1],
            [date2, 2],
        ])
    })

    it('should handle arrays with RegExp objects', () => {
        const regex1 = /test1/
        const regex2 = /test2/
        const result = zip([regex1, regex2], [1, 2])
        expect(result).toEqual([
            [regex1, 1],
            [regex2, 2],
        ])
    })
})
