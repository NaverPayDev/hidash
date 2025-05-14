import _get from 'lodash/get'
import {bench, describe} from 'vitest'

import {get} from './get'

const ITERATIONS = 1000

const obj = {
    a: [{b: {c: 3}}],
    x: {y: {z: 'hello'}},
    e: {
        f: {
            g: 42,
        },
        h: null,
        'complex.key': {
            c: 'complexValue',
            'escaped\\"quotes"': 'withEscapedQuotes',
        },
    },
    arr: [1, 2, {x: 'hello'}, [5, 6, 7]],
    'weird.key': 'value',
    123: 'number key',
}
const PATHS = [
    ['a', 0, 'b', 'c'],
    ['x', 'y', 'z'],
    'not.exist',
    ['a', '0', 'b', 'notThere'],
    ['e', 'f', 'g'],
    ['e', 'f', 'x'],
    ['arr', '0'],
    ['arr', '2', 'x'],
    ['arr', '4', 0],
    '123',
    ['a', 'd'],
    ['a', 'b', 'c'],
    ['arr', 2, 'x'],
    ['weird.key'],
    'weird.key',
    '',
]

describe('get performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            PATHS.forEach((path) => {
                get(obj, path, 'default')
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            PATHS.forEach((path) => {
                _get(obj, path, 'default')
            })
        }
    })
})
