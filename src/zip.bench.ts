import _zip from 'lodash/zip'
import {bench, describe} from 'vitest'

import {zip} from './zip'

const testCases = [
    [
        ['a', 'b', 'c'],
        [1, 2, 3],
        [true, false, true],
    ],
    [Array(1000).fill('a'), Array(1000).fill(1), Array(1000).fill(true)],
    [
        [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jane'},
        ],
        [
            {age: 30, city: 'New York'},
            {age: 25, city: 'London'},
        ],
    ],
    [
        [
            Object.fromEntries(
                Array(1000)
                    .fill(0)
                    .map((_, i) => [`key${i}`, `value${i}`]),
            ),
        ],
        [
            Object.fromEntries(
                Array(1000)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i]),
            ),
        ],
    ],
    [
        ['string', 123, true, null, undefined, Symbol('test'), () => {}, new Date()],
        [
            new Set([1, 2, 3]),
            new Map([
                ['a', 1],
                ['b', 2],
            ]),
            /regex/,
            BigInt(123),
        ],
    ],
    [
        [1, [2, [3, [4]]]],
        ['a', ['b', ['c', ['d']]]],
    ],
    [Array(100).fill('a'), Array(50).fill(1), Array(25).fill(true)],
    [[], [null], [undefined], [null, undefined]],
]

const ITERATIONS = 1000

describe('zip performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                zip(...testCase)
            }
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                _zip(...testCase)
            }
        }
    })
})
