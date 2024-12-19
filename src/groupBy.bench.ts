import _groupBy from 'lodash/groupBy'
import {bench, describe} from 'vitest'

import {groupBy} from './groupBy'

const basicTestCases = [
    {
        data: [
            {id: 1, category: 'A', value: 10},
            {id: 2, category: 'B', value: 20},
            {id: 3, category: 'A', value: 30},
            {id: 4, category: 'C', value: 40},
            {id: 5, category: 'B', value: 50},
        ],
        iteratee: 'category',
    },
    {
        data: Array.from({length: 100}, (_, i) => i),
        iteratee: (num: number) => (num % 2 === 0 ? 'even' : 'odd'),
    },
    {
        data: [null, undefined, {id: 1, value: 'a'}, {id: 2, value: 'b'}, null, {id: 3, value: 'a'}],
        iteratee: 'value',
    },
] as const

const complexTestCases = [
    {
        data: [
            {user: {age: 25}, score: 90},
            {user: {age: 30}, score: 85},
            {user: {age: 25}, score: 95},
            {user: {age: 35}, score: 88},
            {user: {age: 30}, score: 92},
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iteratee: (item: any) => item.user.age,
    },
    {
        data: [1, '2', true, false, null, undefined, {id: 1}, [1, 2, 3]],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iteratee: (x: any) => typeof x,
    },
    {
        data: Array.from({length: 1000}, (_, i) => ({
            id: i,
            category: String.fromCharCode(65 + (i % 26)), // A-Z 반복
            value: i * 10,
        })),
        iteratee: 'category',
    },
] as const

// 패턴(객체, [key,value]) 기반 iteratee 테스트 케이스 추가
const patternTestCases = [
    {
        data: [
            {id: 1, category: 'A', name: 'Foo'},
            {id: 2, category: 'B', name: 'Bar'},
            {id: 3, category: 'A', name: 'Baz'},
        ],
        iteratee: {category: 'A'} as const,
    },
    {
        data: [
            {id: 1, category: 'A', name: 'Foo'},
            {id: 2, category: 'B', name: 'Bar'},
            {id: 3, category: 'A', name: 'Baz'},
        ],
        iteratee: ['category', 'B'] as const,
    },
    {
        data: [
            {user: {age: 25, level: 'junior'}},
            {user: {age: 25, level: 'senior'}},
            {user: {age: 30, level: 'junior'}},
        ],
        iteratee: {user: {age: 25}} as const,
    },
] as const

const largeArray = Array.from({length: 10000}, (_, i) => ({
    id: i,
    category: String.fromCharCode(65 + (i % 26)),
    value: i * 10,
    tags: [i % 5, i % 3],
    nested: {level: i % 4},
}))

describe('groupBy performance comparison', () => {
    bench('hidash', () => {
        basicTestCases.forEach(({data, iteratee}) => {
            groupBy(data, iteratee)
        })

        complexTestCases.forEach(({data, iteratee}) => {
            groupBy(data, iteratee)
        })

        patternTestCases.forEach(({data, iteratee}) => {
            groupBy(data, iteratee)
        })

        groupBy(largeArray, 'category')
        groupBy(largeArray, (item) => item.tags[0])
        groupBy(largeArray, (item) => item.nested.level)
    })

    bench('lodash', () => {
        basicTestCases.forEach(({data, iteratee}) => {
            _groupBy(data, iteratee)
        })

        complexTestCases.forEach(({data, iteratee}) => {
            _groupBy(data, iteratee)
        })

        patternTestCases.forEach(({data, iteratee}) => {
            _groupBy(data, iteratee)
        })

        _groupBy(largeArray, 'category')
        _groupBy(largeArray, (item) => item.tags[0])
        _groupBy(largeArray, (item) => item.nested.level)
    })
})
