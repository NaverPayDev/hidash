import _isEqual from 'lodash/isEqual'
import _uniqWith from 'lodash/uniqWith'
import {describe, expect, it} from 'vitest'

import {uniqWith} from './uniqWith'

describe('uniqWith', () => {
    describe('should match lodash behavior', () => {
        it('basic comparator usage', () => {
            const objects = [
                {x: 1, y: 2},
                {x: 2, y: 1},
                {x: 1, y: 2},
            ]

            const result = uniqWith(objects, _isEqual)
            const lodashResult = _uniqWith(objects, _isEqual)

            expect(result).toEqual(lodashResult)
            expect(result).toEqual([
                {x: 1, y: 2},
                {x: 2, y: 1},
            ])
        })

        it('custom comparator', () => {
            const objects = [
                {id: 1, name: 'John'},
                {id: 2, name: 'Jane'},
                {id: 1, name: 'Johnny'},
            ]

            const comparator = (a: {id: number}, b: {id: number}) => a.id === b.id
            expect(uniqWith(objects, comparator)).toEqual(_uniqWith(objects, comparator))
        })

        it('edge cases', () => {
            // null or undefined array
            expect(uniqWith(null)).toEqual([])
            expect(uniqWith(undefined)).toEqual([])

            // empty array
            expect(uniqWith([])).toEqual([])

            // without comparator
            const arr = [1, 2, 1]
            expect(uniqWith(arr)).toEqual([1, 2])
            expect(uniqWith(arr)).toEqual(_uniqWith(arr))

            // invalid comparator
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(uniqWith(arr, null as any)).toEqual([1, 2])
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(uniqWith(arr, null as any)).toEqual(_uniqWith(arr, null as any))
        })

        it('array with different types', () => {
            const mixed = [{x: 1}, {x: '1'}, {x: 1}]

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const comparator = (a: {x: any}, b: {x: any}) => a.x === b.x
            expect(uniqWith(mixed, comparator)).toEqual(_uniqWith(mixed, comparator))
        })

        it('array with nested objects', () => {
            const nested = [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 1}}]

            expect(uniqWith(nested, _isEqual)).toEqual(_uniqWith(nested, _isEqual))
        })
    })
})
