import _get from 'lodash/get'
import {describe, it, expect} from 'vitest'

import {get} from './get'

describe('get', () => {
    it('should get property', () => {
        const obj = {
            a: {
                b: {
                    c: 42,
                },
                d: null,
                'complex.key': {
                    c: 'complexValue',
                    'escaped\\"quotes"': 'withEscapedQuotes',
                },
            },
            arr: [1, 2, {x: 'hello'}, [5, 6, 7]],
            'weird.key': 'value',
            123: 'number key',
        }

        const list: {
            value: string | number | (string | number)[] | undefined | null
            options?: {default?: string}
        }[] = [
            {value: ['a', 'b', 'c']},
            {value: ['a', 'b', 'x']},
            {value: ['a', 'b', 'x'], options: {default: 'default'}},
            {value: ['a', 'b', 'complex.key', 'c'], options: {default: 'default'}},
            {value: ['arr', 0]},
            {value: ['arr', 2, 'x']},
            {value: ['arr', 4, 0]},
            {value: ['123']},
            {value: 123},
            {value: ['arr', 2, 'x']},
            {value: ['weird.key']},
            {value: 'weird.key'},
            {value: ''},
            {value: undefined},
            {value: null},
        ]
        list.forEach(({value, options: {default: d} = {}}) => {
            const v = value as string | symbol | (string | number)[]
            expect({
                k: v,
                v: get(obj, v, d),
            }).toEqual({
                k: v,
                v: _get(obj, v, d),
            })
        })
    })

    it('should get property by array path', () => {
        const obj = {a: [{b: {c: 3}}]}
        expect(get(obj, ['a', 0, 'b', 'c'])).toBe(_get(obj, ['a', '0', 'b', 'c']))
    })

    it('should handle non-object', () => {
        expect(get(42, 'a', 'not found')).toBe(_get(42, 'a', 'not found'))
    })

    it('should handle symbol keys', () => {
        const sym = Symbol('test')
        const obj = {[sym]: 'symbolValue'}
        expect(get(obj, sym)).toBe(_get(obj, sym))
    })
})
