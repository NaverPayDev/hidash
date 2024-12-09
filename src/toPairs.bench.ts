import _toPairs from 'lodash/toPairs'
import {bench, describe} from 'vitest'

import toPairs from './toPairs'

const testCases = [
    'a'.repeat(100),
    Array.from({length: 100}, (_, i) => i),
    Array.from({length: 100}, (_, i) => [`key${i}`, {value: i, nested: {child: i * 2}}]),
    new Map(Array.from({length: 100}, (_, i) => [`key${i}`, `value${i}`])),
    new Set(Array.from({length: 100}, (_, i) => i)),
]

const ITERATIONS = 1000

describe('toPairs performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                toPairs(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _toPairs(testCase)
            })
        }
    })
})
