import _has from 'lodash/has'
import {bench, describe} from 'vitest'

import {has} from './has'

const testCases = [
    // Simple paths
    [{a: 1}, 'a'],
    [{a: {b: 2}}, 'a.b'],
    [{a: {b: {c: 3}}}, ['a', 'b', 'c']],
    // Null & undefined
    [null, 'a'],
    [undefined, 'a.b'],
    // Arrays
    [[1, 2, 3], '1'],
    [[1, [2, [3]]], '1.1.0'],
    [Array(1000).fill(1), '999'],
    // Nested objects
    [{a: {b: {c: {d: {e: 5}}}}}, 'a.b.c.d.e'],
    [{'a.b.c': 3}, 'a.b.c'],
    [{'a.b.c': 3}, ['a.b.c']],
    // Objects with prototype
    [Object.create({inherited: true}, {own: {value: true, enumerable: true}}), 'own'],
    [Object.create({inherited: true}, {own: {value: true, enumerable: true}}), 'inherited'],
    // Array-like objects
    [{length: 2, 0: 'a', 1: 'b'}, 'length'],
    [{length: 2, 0: 'a', 1: 'b'}, '0'],
    // Edge cases
    [{}, ''],
    [{}, []],
    [{}, '.'],
    [{}, '..'],
    // Deep paths
    [
        Object.fromEntries(
            Array(100)
                .fill(0)
                .map((_, i) => [`level${i}`, {}]),
        ),
        Array(100)
            .fill(0)
            .map((_, i) => `level${i}`)
            .join('.'),
    ],
    // Symbol keys
    [{[Symbol('test')]: true}, [Symbol('test')]],
] as const

const ITERATIONS = 1000

describe('has performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, path]) => {
                has(obj, path as string | string[])
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, path]) => {
                _has(obj, path as string | string[])
            })
        }
    })
})
