import _some from 'lodash/some'
import {describe, it, expect} from 'vitest'

import {some} from './some'

import type {ListIterateeCustom} from './internal/baseIteratee.type'
import type {Collection} from './internal/types'

function compareResults<T>(collection: Collection<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>) {
    return {
        lodash: _some(collection, predicate),
        hidash: some(collection, predicate),
    }
}

describe('some', () => {
    it('should handle arrays with predicates', () => {
        const result = compareResults([0, 0, 1, 2], (v) => v > 1)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle strings with predicates', () => {
        const result = compareResults('hello world', (v) => v === 'w')
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle plain strings', () => {
        const result = compareResults('000000')
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle numbers', () => {
        const result = compareResults(10000, (v) => !!v)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle booleans', () => {
        const result = compareResults(true)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle null', () => {
        const result = compareResults(null)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle symbols', () => {
        const result = compareResults(Symbol(1), (s) => !!s)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle Sets', () => {
        const result = compareResults(new Set([1, 2, 3]), (v) => v > 1)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle Maps', () => {
        const result = compareResults(
            new Map([
                ['a', 1],
                ['b', 2],
            ]),
            (v) => v > 1,
        )
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle objects (truthy values)', () => {
        const result = compareResults({z: 0, a: 1, b: 2})
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle objects (falsy values)', () => {
        const result = compareResults({z: 0})
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle objects with predicates', () => {
        const result = compareResults({z: 0}, (v) => !v)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle arrays (truthy values)', () => {
        const result = compareResults([1, 2, 3])
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle arrays (falsy values)', () => {
        const result = compareResults([0, null, undefined])
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle arrays with predicates', () => {
        const result = compareResults([0, null, undefined], (v) => v === null)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle deeply nested arrays', () => {
        const result = compareResults([[0], [1, 2], [3]], (arr) => arr.includes(2))
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle deeply nested objects', () => {
        const result = compareResults(
            {
                a: {b: {c: 1}},
                d: {e: {f: 2}},
            },
            (obj) => obj.f === 2,
        )
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle arrays with mixed types', () => {
        const result = compareResults([1, 'a', null, undefined, true], (v) => typeof v === 'string')
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle objects with mixed value types', () => {
        const result = compareResults(
            {
                num: 1,
                str: 'hello',
                bool: true,
                arr: [1, 2, 3],
            },
            (v) => Array.isArray(v),
        )
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle sparse arrays', () => {
        // eslint-disable-next-line no-sparse-arrays
        const sparseArray = [1, , 3]
        const result = compareResults(sparseArray, (v) => v === undefined)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle NaN values', () => {
        const result = compareResults([1, NaN, 3], (v) => Number.isNaN(v))
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle functions as values', () => {
        const result = compareResults(
            {
                a: () => true,
                b: () => false,
            },
            (v) => typeof v === 'function',
        )
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle arrays with functions', () => {
        const result = compareResults([1, () => true, 3], (v) => typeof v === 'function')
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle object arrays with property name', () => {
        const result = compareResults([{name: 'jj'}, {age: 30}], 'name')
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle objects with undefined values', () => {
        const result = compareResults({a: undefined, b: 1}, (v) => v === undefined)
        expect(result.lodash).toBe(result.hidash)
    })

    it('should handle empty objects', () => {
        const result = compareResults({}, (v) => !!v)
        expect(result.lodash).toBe(result.hidash)

        const result2 = compareResults({})
        expect(result2.lodash).toBe(result2.hidash)
    })

    it('should handle empty arrays', () => {
        const result = compareResults([], (v) => !!v)
        expect(result.lodash).toBe(result.hidash)

        const result2 = compareResults([])
        expect(result2.lodash).toBe(result2.hidash)
    })
})
