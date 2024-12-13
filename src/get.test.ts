import _get from 'lodash/get'
import {describe, it, expect} from 'vitest'

import get from './get'

describe('get', () => {
    it('should get property by string path', () => {
        const obj = {a: {b: {c: 3}}}
        expect(get(obj, 'a.b.c')).toBe(_get(obj, 'a.b.c'))
    })

    it('should get property by array path', () => {
        const obj = {a: [{b: {c: 3}}]}
        expect(get(obj, ['a', 0, 'b', 'c'])).toBe(_get(obj, ['a', '0', 'b', 'c']))
    })

    it('should return default if not found', () => {
        const obj = {a: {b: 2}}
        expect(get(obj, 'a.b.c', 'default')).toBe(_get(obj, 'a.b.c', 'default'))
    })

    it('should handle null/undefined object', () => {
        expect(get(null, 'a.b.c', 'default')).toBe(_get(null, 'a.b.c', 'default'))
        expect(get(undefined, 'x.y', 10)).toBe(_get(undefined, 'x.y', 10))
    })

    it('should handle non-object', () => {
        expect(get(42, 'a', 'not found')).toBe(_get(42, 'a', 'not found'))
    })

    it('should handle symbol keys', () => {
        const sym = Symbol('test')
        const obj = {[sym]: 'symbolValue'}
        expect(get(obj, sym)).toBe(_get(obj, sym))
    })

    // 복잡한 경로 테스트
    it('should handle complex paths with brackets and quotes', () => {
        const obj = {
            a: [
                {
                    b: {
                        'complex.key': {
                            c: 'complexValue',
                            'escaped\\"quotes"': 'withEscapedQuotes',
                        },
                    },
                },
            ],
            'weird key with spaces': {x: 123},
        }

        // 경로: a[0].b["complex.key"].c
        expect(get(obj, 'a[0].b["complex.key"].c')).toBe(_get(obj, 'a[0].b["complex.key"].c'))
        // 경로: a[0].b["complex.key"]["escaped\\\"quotes"]
        expect(get(obj, 'a[0].b["complex.key"]["escaped\\"quotes"]')).toBe(
            _get(obj, 'a[0].b["complex.key"]["escaped\\"quotes"]'),
        )

        // 공백 포함 키: ["weird key with spaces"].x
        expect(get(obj, '["weird key with spaces"].x')).toBe(_get(obj, '["weird key with spaces"].x'))
    })

    it('should handle array indices as strings and negative indices as keys', () => {
        const obj = {
            a: {
                '0': {d: 4},
                '-1': {d: 'negativeIndexKey'},
            },
        }
        expect(get(obj, 'a["0"].d')).toBe(_get(obj, 'a["0"].d'))
        expect(get(obj, 'a[-1].d')).toBe(_get(obj, 'a[-1].d'))
    })

    it('should handle empty string key', () => {
        const obj = {
            '': {value: 'emptyKey'},
            a: {'': {nested: 'emptyNested'}},
        }

        expect(get(obj, '[""].value')).toBe(_get(obj, '[""].value'))
        expect(get(obj, 'a[""].nested')).toBe(_get(obj, 'a[""].nested'))
    })

    it('should return undefined if intermediate property is missing', () => {
        const obj = {a: {b: {c: 3}}}
        expect(get(obj, 'a.x.y', 'not found')).toBe(_get(obj, 'a.x.y', 'not found'))
        expect(get(obj, 'a.b.x.y', 'defaultVal')).toBe(_get(obj, 'a.b.x.y', 'defaultVal'))
    })

    it('should work with numeric paths as part of a complex path', () => {
        const obj = {
            arr: [
                {
                    nested: [{val: 'first'}, {val: 'second'}],
                },
            ],
        }

        expect(get(obj, 'arr[0].nested[1].val')).toBe(_get(obj, 'arr[0].nested[1].val'))
        expect(get(obj, 'arr[0]["nested"][0].val')).toBe(_get(obj, 'arr[0]["nested"][0].val'))
    })
})
