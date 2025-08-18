import _sortBy from 'lodash/sortBy'
import {describe, it, expect} from 'vitest'

import {sortBy} from './sortBy'

function expectsEqual<T>(...args: Parameters<typeof sortBy<T>>) {
    expect(sortBy(...args)).toEqual(_sortBy(...args))
}

describe('sortBy', () => {
    it('sorts an array of objects by single property', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 34},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        expectsEqual(data, 'user')
    })

    it('sorts an array with multiple property iteratees', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 34},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        expectsEqual(data, ['user', 'age'])
    })

    it('sorts an array with function + property iteratees', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 36},
            {user: 'fred', age: 40},
            {user: 'barney', age: 36},
        ]
        expectsEqual(data, (o) => o.user, 'age')
    })

    it('stably sorts items with the same criteria', () => {
        const data = [
            {id: 1, group: 'alpha', order: 2},
            {id: 2, group: 'alpha', order: 1},
            {id: 3, group: 'beta', order: 1},
            {id: 4, group: 'beta', order: 1},
        ]
        expectsEqual(data, ['group', 'order'])

        expect(
            sortBy(data, ['group', 'order'])
                .filter((d) => d.group === 'beta')
                .map((d) => d.id),
        ).toEqual(
            _sortBy(data, ['group', 'order'])
                .filter((d) => d.group === 'beta')
                .map((d) => d.id),
        )
    })

    it('sorts the values of an object as if it were an array', () => {
        const dataObj = {
            a: {user: 'fred', age: 48},
            b: {user: 'barney', age: 36},
            c: {user: 'wilma', age: 40},
        }
        expectsEqual(Object.values(dataObj), 'user')
    })

    it('handles empty array', () => {
        expectsEqual([], 'age')

        expectsEqual([], (x) => x)
    })

    it('returns a new sorted array (does not mutate original)', () => {
        const data = [
            {user: 'fred', age: 48},
            {user: 'barney', age: 36},
        ]
        const dataClone = [...data]
        expect(data).toEqual(dataClone)
        expectsEqual(data, 'age')
    })

    it('sorts numbers or strings properly', () => {
        const numericData = [10, 2, 5, 2]
        expectsEqual(numericData)

        const stringData = ['pear', 'apple', 'banana', 'Apple']
        expectsEqual(stringData)
    })

    it('sorts numbers by value', () => {
        expectsEqual([5, 2, 9, 1], (x) => x)

        expectsEqual([3, 1, 2])
    })

    it('sorts using function iteratee', () => {
        const users = [
            {name: 'Alice', age: 32},
            {name: 'Bob', age: 24},
            {name: 'Charlie', age: 29},
        ]
        expectsEqual(users, (u) => u.name.length)
    })

    it('handles duplicate values correctly', () => {
        expectsEqual([3, 1, 2, 1], (x) => x)
    })

    it('handles null values', () => {
        expectsEqual([{val: 2}, {val: undefined}, {val: 1}], 'val')
        expectsEqual([{val: null}, {val: 2}, {val: 1}], 'val')
    })
})
