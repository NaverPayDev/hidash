import _lt from 'lodash/lt'
import {bench, describe} from 'vitest'

import lt from './lt'

const testCases = [
    {value: 1, other: 0}, // 숫자 비교
    {value: -1, other: -2}, // 음수 비교
    {value: 0, other: 0}, // 같은 숫자 비교
    {value: 3.14, other: 2.71}, // 소수 비교
    {value: '5', other: '3'}, // 문자열 숫자 비교
    {value: 'a', other: 'b'}, // 문자열 비교
    {value: '123', other: 456}, // 문자열과 숫자 혼합
    {value: null, other: undefined}, // null과 undefined
    {value: {}, other: []}, // 객체와 배열 비교
    {value: NaN, other: Infinity}, // 특수값 비교
]

const ITERATIONS = 10000

describe('lt performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, other}) => {
                lt(value, other)
            })
        }
    })
    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, other}) => {
                _lt(value, other)
            })
        }
    })
})
