import _find from 'lodash/find'
import {describe, it, expect} from 'vitest'

import {find} from './find'

describe('find', () => {
    it('should find the first matching element based on the predicate', () => {
        const array = [1, 2, 3, 4, 5]

        expect(find(array, (x) => x === 10)).toBe(undefined)
        expect(find(array, (x) => x === 3)).toBe(_find(array, (x) => x === 3))
        expect(find(array, (x) => x > 3)).toBe(_find(array, (x) => x > 3))
        expect(find(array, (x) => x === 10)).toBe(_find(array, (x) => x === 10))
    })

    it('should handle shorthand predicates', () => {
        const nestedArray = [{a: 1}, {a: 2}, {a: 3}]

        expect(find(nestedArray, {a: 2})).toEqual({a: 2})
        expect(find(nestedArray, {a: 10})).toBe(undefined)
        expect(find(nestedArray, {a: 2})).toEqual(_find(nestedArray, {a: 2}))
        expect(find(nestedArray, {a: 10})).toEqual(_find(nestedArray, {a: 10}))
    })

    it('should handle array shorthand predicates', () => {
        const nestedArray = [{a: 1}, {a: 2}, {a: 3}]

        expect(find(nestedArray, ['a', 2])).toEqual({a: 2})
        expect(find(nestedArray, ['a', 10])).toBe(undefined)
        expect(find(nestedArray, ['a', 2])).toEqual(_find(nestedArray, ['a', 2]))
        expect(find(nestedArray, ['a', 10])).toEqual(_find(nestedArray, ['a', 10]))
    })

    it('should handle string shorthand predicates', () => {
        const nestedArray = [{a: 1}, {b: 2}, {a: 3}]

        expect(find(nestedArray, 'a')).toEqual(_find(nestedArray, 'a'))
        expect(find(nestedArray, 'b')).toEqual(_find(nestedArray, 'b'))
    })

    it('should return undefined for an empty array', () => {
        expect(find([], (x) => x === 1)).toBe(undefined)
        expect(find([], (x) => x === 1)).toBe(_find([], (x) => x === 1))
    })

    it('should handle complex objects with nested properties', () => {
        const nestedArray = [
            {name: {first: 'Alice', last: 'Smith'}},
            {name: {first: 'Bob', last: 'Jones'}},
            {name: {first: 'Alice', last: 'Brown'}},
        ]

        expect(find(nestedArray, {name: {first: 'Alice'}})).toEqual(_find(nestedArray, {name: {first: 'Alice'}}))
        expect(find(nestedArray, {name: {first: 'Alice', last: 'Brown'}})).toEqual(
            _find(nestedArray, {name: {first: 'Alice', last: 'Brown'}}),
        )
    })

    it('should handle truthy values if no predicate is provided', () => {
        const array = [0, 1, false, 2, '', 3]

        expect(find(array)).toBe(_find(array))
    })

    it('should handle sparse arrays', () => {
        // eslint-disable-next-line no-sparse-arrays
        const sparseArray = [0, , 1, , , 3]
        expect(find(sparseArray)).toBe(_find(sparseArray))
    })
})
