import _get from 'lodash/get'
import {describe, bench} from 'vitest'

import get from './get'

const obj = {a: [{b: {c: 3}}], x: {y: {z: 'hello'}}}
const PATHS = ['a[0].b.c', ['x', 'y', 'z'], 'a.0.b.c', 'not.exist', ['a', '0', 'b', 'notThere']]

const ITERATIONS = 10000

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
