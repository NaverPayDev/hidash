import _create from 'lodash/create'
import _has from 'lodash/has'
import {describe, it, expect} from 'vitest'

import {has} from './has'

const testObj = {
    a: {
        b: {
            c: 3,
            d: null,
            e: undefined,
            f: 0,
            g: false,
        },
        'x.y': {
            z: 1,
        },
    },
    'p.q': 2,
    arr: [1, 2, {nested: 'value'}],
}

describe('basic functionality (lodash official webpage)', () => {
    it('should handle simple paths', () => {
        var object = {a: {b: 2}}
        var other = _create({a: _create({b: 2})})

        expect(has(object, 'a')).toBe(true)
        expect(has(object, 'a')).toBe(_has(object, 'a'))
        expect(has(object, 'a.b')).toBe(true)
        expect(has(object, 'a.b')).toBe(_has(object, 'a.b'))
        expect(has(object, ['a', 'b'])).toBe(true)
        expect(has(object, ['a', 'b'])).toBe(_has(object, ['a', 'b']))
        expect(has(other, 'a')).toBe(false)
        expect(has(other, 'a')).toBe(_has(other, 'a'))
    })
})

describe('basic functionality', () => {
    it('should handle simple paths', () => {
        expect(has(testObj, 'a')).toBe(_has(testObj, 'a'))
        expect(has(testObj, 'b')).toBe(_has(testObj, 'b'))
        expect(has(testObj, 'a.b')).toBe(_has(testObj, 'a.b'))
        expect(has(testObj, 'a.b.c')).toBe(_has(testObj, 'a.b.c'))
    })

    it('should handle array paths', () => {
        expect(has(testObj, ['a'])).toBe(_has(testObj, ['a']))
        expect(has(testObj, ['a', 'b'])).toBe(_has(testObj, ['a', 'b']))
        expect(has(testObj, ['a', 'b', 'c'])).toBe(_has(testObj, ['a', 'b', 'c']))
    })
})

describe('edge cases', () => {
    it('should handle null and undefined values', () => {
        expect(has(null, 'a')).toBe(_has(null, 'a'))
        expect(has(undefined, 'a')).toBe(_has(undefined, 'a'))
        expect(has(testObj, 'a.b.d')).toBe(_has(testObj, 'a.b.d')) // null value
        expect(has(testObj, 'a.b.e')).toBe(_has(testObj, 'a.b.e')) // undefined value
    })

    it('should handle falsy values', () => {
        expect(has(testObj, 'a.b.f')).toBe(_has(testObj, 'a.b.f')) // 0
        expect(has(testObj, 'a.b.g')).toBe(_has(testObj, 'a.b.g')) // false
    })

    it('should handle paths with dots in key names', () => {
        expect(has(testObj, ['a', 'x.y'])).toBe(_has(testObj, ['a', 'x.y']))
        expect(has(testObj, ['a', 'x.y', 'z'])).toBe(_has(testObj, ['a', 'x.y', 'z']))
        expect(has(testObj, 'p.q')).toBe(_has(testObj, 'p.q'))
    })
})

describe('array handling', () => {
    it('should handle array indices', () => {
        expect(has(testObj, 'arr.0')).toBe(_has(testObj, 'arr.0'))
        expect(has(testObj, 'arr.2.nested')).toBe(_has(testObj, 'arr.2.nested'))
        expect(has(testObj, ['arr', '2', 'nested'])).toBe(_has(testObj, ['arr', '2', 'nested']))
    })

    it('should handle non-existent array indices', () => {
        expect(has(testObj, 'arr.5')).toBe(_has(testObj, 'arr.5'))
        expect(has(testObj, ['arr', '5'])).toBe(_has(testObj, ['arr', '5']))
    })
})

describe('error cases', () => {
    it('should handle invalid paths gracefully', () => {
        expect(has(testObj, '')).toBe(_has(testObj, ''))
        expect(has(testObj, '.')).toBe(_has(testObj, '.'))
        expect(has(testObj, '..')).toBe(_has(testObj, '..'))
        expect(has(testObj, [])).toBe(_has(testObj, []))
    })

    it('should handle non-object values in path', () => {
        expect(has(testObj, 'a.b.c.d')).toBe(_has(testObj, 'a.b.c.d')) // trying to go deeper than primitive
        expect(has(testObj, ['a', 'b', 'c', 'd'])).toBe(_has(testObj, ['a', 'b', 'c', 'd']))
    })
})
