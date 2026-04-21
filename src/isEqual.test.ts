/* eslint-disable no-new-wrappers */
import _isEqual from 'lodash/isEqual'
import {describe, it, expect} from 'vitest'

import {isEqual} from './isEqual'

describe('isEqual', () => {
    it.concurrent.each([
        [1, 1],
        ['abc', 'abc'],
        [true, true],
        [{a: 1}, {a: 1}],
        [
            [1, 2, 3],
            [1, 2, 3],
        ],
        [[{a: 1}], [{a: 1}]],
        [[{person: {name: 'jane'}}], [{person: {name: 'jane'}}]],
        [new String('1'), new String(1)],
        [new Boolean(), new Boolean()],
        [!!1, !!2],
        [{}, {}],
        [NaN, NaN],
        [[], []],
        [null, null],
        [undefined, undefined],
    ])('should be equal %o and %o', (a, b) => {
        expect(isEqual(a, b)).toEqual(_isEqual(a, b))
    })

    it.concurrent.each([
        ['a', 'b'],
        [1, 2],
        [true, false],
        [
            [1, 2, 3],
            [1, 2],
        ],
        [{a: 1}, {b: 1}],
        [{a: 1}, {a: 2}],
        [[{person: {name: 'jane'}}], [{person: {name: 'jane', age: 28}}]],
        [!!1, !!0],
        [new String(1), new String(2)],
    ])('should not be equal %o and %o', (a, b) => {
        expect(isEqual(a, b)).toEqual(_isEqual(a, b))
    })

    describe('Map', () => {
        it('should treat empty Maps as equal', () => {
            expect(isEqual(new Map(), new Map())).toEqual(_isEqual(new Map(), new Map()))
        })

        it('should treat Maps with same entries as equal', () => {
            expect(isEqual(new Map([[1, 'a']]), new Map([[1, 'a']]))).toEqual(
                _isEqual(new Map([[1, 'a']]), new Map([[1, 'a']])),
            )
        })

        it('should treat Maps with different values as not equal', () => {
            expect(isEqual(new Map([[1, 'a']]), new Map([[1, 'b']]))).toEqual(
                _isEqual(new Map([[1, 'a']]), new Map([[1, 'b']])),
            )
        })

        it('should treat Maps with different keys as not equal', () => {
            expect(isEqual(new Map([[1, 'a']]), new Map([[2, 'a']]))).toEqual(
                _isEqual(new Map([[1, 'a']]), new Map([[2, 'a']])),
            )
        })

        it('should treat Maps with different sizes as not equal', () => {
            expect(
                isEqual(
                    new Map([
                        [1, 'a'],
                        [2, 'b'],
                    ]),
                    new Map([[1, 'a']]),
                ),
            ).toEqual(
                _isEqual(
                    new Map([
                        [1, 'a'],
                        [2, 'b'],
                    ]),
                    new Map([[1, 'a']]),
                ),
            )
        })

        it('should not treat a Map and a plain object as equal', () => {
            expect(isEqual(new Map(), {})).toEqual(_isEqual(new Map(), {}))
        })
    })

    describe('Set', () => {
        it('should treat empty Sets as equal', () => {
            expect(isEqual(new Set(), new Set())).toEqual(_isEqual(new Set(), new Set()))
        })

        it('should treat Sets with same values as equal', () => {
            expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toEqual(
                _isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])),
            )
        })

        it('should treat Sets with different values as not equal', () => {
            expect(isEqual(new Set([1, 2]), new Set([1, 3]))).toEqual(_isEqual(new Set([1, 2]), new Set([1, 3])))
        })

        it('should treat Sets with different sizes as not equal', () => {
            expect(isEqual(new Set([1, 2]), new Set([1]))).toEqual(_isEqual(new Set([1, 2]), new Set([1])))
        })

        it('should not treat a Set and an Array as equal', () => {
            expect(isEqual(new Set([1, 2]), [1, 2])).toEqual(_isEqual(new Set([1, 2]), [1, 2]))
        })
    })
})
