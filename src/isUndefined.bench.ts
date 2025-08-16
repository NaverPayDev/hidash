import _isUndefined from 'lodash/isUndefined'
import {bench, describe} from 'vitest'

import {isUndefined} from './isUndefined'

const testCases = [null, 0, '', false, {}, [], 'undefined', NaN]

const ITERATIONS = 1000

describe('isUndefined performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isUndefined(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isUndefined(testCase)
            })
        }
    })
})
