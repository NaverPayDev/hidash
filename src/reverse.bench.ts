import _reverse from 'lodash/reverse'
import {bench, describe} from 'vitest'

import reverse from './reverse'

const testCases = [
    [1, 2, 3, 4, 5],
    ['a', 'b', 'c'],
    [true, false, true],
    [null, undefined, 0],
    [],
    [1, 'a', null, undefined, true],
    Array.from({length: 1000}, (_, i) => i),
]

const ITERATIONS = 1000

describe('reverse performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                reverse(testCase)
            })
        }
    })
    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _reverse(testCase)
            })
        }
    })
})
