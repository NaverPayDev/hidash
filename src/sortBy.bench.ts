import _sortBy from 'lodash/sortBy'
import {bench, describe} from 'vitest'

import {sortBy} from './sortBy'

const ITERATIONS = 100

interface User {
    user: string
    age: number
}

const USERS_SMALL: User[] = [
    {user: 'ChengJha', age: 48},
    {user: 'JoelSaad', age: 36},
    {user: 'RaulIsmail', age: 40},
    {user: 'VeraSaeed', age: 45},
    {user: 'RobertoRamos', age: 28},
    {user: 'OscarWatanabe', age: 21},
    {user: 'AnnXiang', age: 25},
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
    {data: USERS_BIG, iteratees: [(o: User) => o.age]},
    {data: USERS_HUGE, iteratees: ['age']},
    {data: USERS_MULTI, iteratees: ['user', 'age']},
    {data: USERS_MULTI, iteratees: ['user', (o: User) => o.age]},
] as const
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
