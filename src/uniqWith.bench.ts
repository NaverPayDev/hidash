import _uniqWith from 'lodash/uniqWith'
import {bench, describe} from 'vitest'

import {uniqWith} from './uniqWith'

interface TestCase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comparator: (a: any, b: any) => boolean
}

const testCases: TestCase[] = [
    {
        value: [
            {x: 1, y: 2},
            {x: 2, y: 1},
            {x: 1, y: 2},
            {x: 3, y: 4},
            {x: 2, y: 1},
        ],
        comparator: (a: {x: number; y: number}, b: {x: number; y: number}) => a.x === b.x && a.y === b.y,
    },
    {
        value: Array.from({length: 1000}, (_, i) => ({
            x: i % 3,
            y: i % 2,
        })),
        comparator: (a: {x: number; y: number}, b: {x: number; y: number}) => a.x === b.x && a.y === b.y,
    },
    {
        value: [
            {a: {b: {c: 1}}, d: 2},
            {a: {b: {c: 2}}, d: 1},
            {a: {b: {c: 1}}, d: 2},
            {a: {b: {c: 3}}, d: 4},
        ],
        comparator: (a: {a: {b: {c: number}}; d: number}, b: {a: {b: {c: number}}; d: number}) =>
            a.a.b.c === b.a.b.c && a.d === b.d,
    },
    {
        value: [
            {id: 1, name: 'a', value: true},
            {id: 2, name: 'b', value: false},
            {id: 1, name: 'a', value: true},
            {id: 3, name: 'c', value: null},
        ],
        comparator: (a: {id: number; name: string; value: boolean}, b: {id: number; name: string; value: boolean}) =>
            a.id === b.id && a.name === b.name && a.value === b.value,
    },
    {
        value: Array.from({length: 100}, (_, i) => ({
            id: i % 100,
            name: `user_${i % 50}`,
            points: i % 1000,
            status: i % 2 === 0,
            metadata: {
                lastLogin: i % 24,
                region: `region_${i % 5}`,
                settings: {
                    preference1: i % 3,
                    preference2: i % 4,
                },
            },
        })),
        comparator: (
            a: {
                id: number
                name: string
                points: number
                status: boolean
                metadata: {
                    lastLogin: number
                    region: string
                    settings: {
                        preference1: number
                        preference2: number
                    }
                }
            },
            b: {
                id: number
                name: string
                points: number
                status: boolean
                metadata: {
                    lastLogin: number
                    region: string
                    settings: {
                        preference1: number
                        preference2: number
                    }
                }
            },
        ) =>
            a.id === b.id &&
            a.name === b.name &&
            a.points === b.points &&
            a.status === b.status &&
            a.metadata.lastLogin === b.metadata.lastLogin &&
            a.metadata.region === b.metadata.region &&
            a.metadata.settings.preference1 === b.metadata.settings.preference1 &&
            a.metadata.settings.preference2 === b.metadata.settings.preference2,
    },
] as const

const ITERATIONS = 1000

describe('uniqWith performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, comparator}) => {
                uniqWith(value, comparator)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, comparator}) => {
                _uniqWith(value, comparator)
            })
        }
    })
})
