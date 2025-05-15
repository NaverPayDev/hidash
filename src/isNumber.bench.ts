import _isNumber from 'lodash/isNumber'
import {bench, describe} from 'vitest'

import {isNumber} from './isNumber'

const testCases = [
    0,
    1,
    -1,
    0.1,
    -0.1,
    Infinity,
    -Infinity,
    NaN,
    '123',
    '-123',
    '0',
    '3.14',
    '-3.14',
    'string',
    null,
    undefined,
    {},
    [],
    [1],
    true,
    false,
]

const ITERATIONS = 1000

describe('isNumber performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isNumber(testCase)
            })
        }
    })
    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isNumber(testCase)
            })
        }
    })
})
