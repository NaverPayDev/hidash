import _flow from 'lodash/flow'
import {describe, test, expect} from 'vitest'

import {flow} from './flow'

describe('flow function', () => {
    test('composes functions correctly', () => {
        const addOne = (x: number) => x + 1
        const double = (x: number) => x * 2

        const customFlow = flow(addOne, double)
        const lodashFlow = _flow(addOne, double)

        expect(customFlow(2)).toBe(lodashFlow(2))
    })

    test('handles single function correctly', () => {
        const addOne = (x: number) => x + 1

        const customFlow = flow(addOne)
        const lodashFlow = _flow(addOne)

        expect(customFlow(3)).toBe(lodashFlow(3))
    })

    test('handles multiple functions correctly', () => {
        const square = (x: number) => x * x
        const double = (x: number) => x * 2
        const subtractFive = (x: number) => x - 5

        const customFlow = flow(square, double, subtractFive)
        const lodashFlow = _flow(square, double, subtractFive)

        expect(customFlow(4)).toBe(lodashFlow(4))
    })

    test('works with different types', () => {
        const toString = (x: number) => x.toString()
        const repeat = (x: string) => x.repeat(3)

        const customFlow = flow(toString, repeat)
        const lodashFlow = _flow(toString, repeat)

        expect(customFlow(5)).toBe(lodashFlow(5))
    })

    test('preserves type inference', () => {
        const increment = (x: number) => x + 1
        const stringify = (x: number) => x.toString()
        const length = (x: string) => x.length

        const customFlow = flow(increment, stringify, length)
        const lodashFlow = _flow(increment, stringify, length)

        expect(customFlow(3)).toBe(lodashFlow(3))
    })
})
