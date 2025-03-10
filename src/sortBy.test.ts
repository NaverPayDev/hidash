import _sortBy from 'lodash/sortBy'
import {describe, it, expect} from 'vitest'

import sortBy from './sortBy'

describe('sortBy', () => {
    it('sorts an array of objects by single property', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 34},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        const customResult = sortBy(data, 'age')
        const lodashResult = _sortBy(data, 'age')
        expect(customResult).toEqual(lodashResult)
    })

    it('sorts an array with multiple property iteratees', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 36},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        const customResult = sortBy(data, ['user', 'age'])
        const lodashResult = _sortBy(data, ['user', 'age'])
        expect(customResult).toEqual(lodashResult)
    })

    it('sorts an array with function + property iteratees', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 36},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        // 첫 번째 기준: user → 사전순, 두 번째 기준: age → 오름차순
        const customResult = sortBy(data, (o) => o.user, 'age')
        const lodashResult = _sortBy(data, [(o) => o.user, 'age'])
        expect(customResult).toEqual(lodashResult)
    })

    it('stably sorts items with the same criteria', () => {
        const data = [
            {id: 1, group: 'alpha', order: 2},
            {id: 2, group: 'alpha', order: 1},
            {id: 3, group: 'beta', order: 1},
            {id: 4, group: 'beta', order: 1},
        ]
        const customResult = sortBy(data, ['group', 'order'])
        const lodashResult = _sortBy(data, ['group', 'order'])
        expect(customResult).toEqual(lodashResult)

        const customBeta = customResult.filter((d) => d.group === 'beta')
        const lodashBeta = lodashResult.filter((d) => d.group === 'beta')
        expect(customBeta.map((d) => d.id)).toEqual(lodashBeta.map((d) => d.id))
    })

    it('sorts the values of an object as if it were an array', () => {
        const dataObj = {
            a: {user: 'fred', age: 48},
            b: {user: 'barney', age: 36},
            c: {user: 'wilma', age: 40},
        }
        const customResult = sortBy(dataObj, 'user')
        const lodashResult = _sortBy(Object.values(dataObj), 'user')
        expect(customResult).toEqual(lodashResult)
    })

    it('handles empty array or empty object', () => {
        expect(sortBy([], 'age')).toEqual(_sortBy([], 'age'))
        expect(sortBy({}, 'age')).toEqual(_sortBy({}, 'age'))
    })

    it('returns a new sorted array (does not mutate original)', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 36},
        ]
        const dataClone = [...data]
        const customResult = sortBy(data, 'age')
        expect(data).toEqual(dataClone)
        expect(customResult).toEqual(_sortBy(data, 'age'))
    })

    it('sorts numbers or strings properly', () => {
        const numericData = [10, 2, 5, 2]
        const customNumResult = sortBy(numericData)
        const lodashNumResult = _sortBy(numericData)
        expect(customNumResult).toEqual(lodashNumResult)

        const stringData = ['pear', 'apple', 'banana', 'Apple']
        const customStrResult = sortBy(stringData)
        const lodashStrResult = _sortBy(stringData)
        expect(customStrResult).toEqual(lodashStrResult)
    })
})
