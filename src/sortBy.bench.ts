import _sortBy from 'lodash/sortBy'
import {bench, describe} from 'vitest'

import sortBy from './sortBy'

interface User {
    user: string
    age: number
}

const USERS_SMALL: User[] = [
    {user: '김용찬', age: 48},
    {user: '김현석', age: 36},
    {user: '이한주', age: 40},
    {user: '전유정', age: 45},
    {user: '변영화', age: 28},
    {user: '김승현', age: 21},
    {user: '구경택', age: 25},
]

const USERS_BIG: User[] = Array.from({length: 1000}, (_, i) => ({
    user: 'user' + (i % 100),
    age: Math.floor(Math.random() * 100),
}))

const USERS_HUGE: User[] = Array.from({length: 10_000}, (_) => ({
    user: 'randomUser' + Math.floor(Math.random() * 1000),
    age: Math.floor(Math.random() * 1000),
}))

const USERS_MULTI: User[] = [
    {user: 'barney', age: 36},
    {user: 'fred', age: 48},
    {user: 'wilma', age: 40},
    {user: 'wilma', age: 36},
    {user: 'betty', age: 36},
    {user: 'barney', age: 34},
    {user: 'fred', age: 48},
    {user: 'betty', age: 40},
] as const

const testCases = [
    {data: USERS_SMALL, iteratees: ['age']},
    {data: USERS_SMALL, iteratees: [(o: User) => o.user]},
    {data: USERS_BIG, iteratees: ['user']},
    {data: USERS_HUGE, iteratees: ['age']},
    {data: USERS_MULTI, iteratees: ['user', 'age']},
] as const

const ITERATIONS = 10

describe('sortBy performance', () => {
    bench('hidash sortBy', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const {data, iteratees} of testCases) {
                sortBy(data, ...iteratees)
            }
        }
    })

    bench('lodash sortBy', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const {data, iteratees} of testCases) {
                _sortBy(data, ...iteratees)
            }
        }
    })
})
