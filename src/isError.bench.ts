import _isError from 'lodash/isError'
import {bench, describe} from 'vitest'

import {noop} from './internal/noop'
import {isError} from './isError'

const testCases = [
    new Error(),
    new TypeError(),
    new RangeError(),
    new SyntaxError(),
    new ReferenceError(),
    new EvalError(),
    new URIError(),
    {
        name: 'TestError',
        message: 'test message',
    },
    {},
    [],
    Object.create(null),
    new Map(),
    new Set(),
    new Date(),
    42,
    'string',
    true,
    false,
    Symbol('symbol'),
    null,
    undefined,
    new Proxy(new Error('test'), {}),
    new Proxy({}, {}),
    new Proxy(noop, {}),
    Reflect,
    JSON,
    Math,
    Atomics,
    globalThis,
]

const ITERATIONS = 10000

describe('isError performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isError(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isError(testCase)
            })
        }
    })
})
