import _once from 'lodash/once'
import {bench, describe} from 'vitest'

import once from './once'

const testCase = () => 'result'

const ITERATIONS = 1000

describe('once performance', () => {
    bench('hidash', () => {
        const hidashOnce = once(testCase)
        for (let i = 0; i < ITERATIONS; i++) {
            hidashOnce()
        }
    })
    bench('lodash', () => {
        const lodashOnce = _once(testCase)
        for (let i = 0; i < ITERATIONS; i++) {
            lodashOnce()
        }
    })
})
