import _flow from 'lodash/flow'
import {bench, describe} from 'vitest'

import {flow} from './flow'

const ITERATIONS = 10000

describe('flow performance', () => {
    const addOne = (x: number) => x + 1
    const double = (x: number) => x * 2

    const hidashFlow = flow(addOne, double)
    const lodashFlow = _flow(addOne, double)

    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            hidashFlow(i)
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            lodashFlow(i)
        }
    })
})
