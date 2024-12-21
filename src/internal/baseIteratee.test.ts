import {describe, it, expect} from 'vitest'

import {baseIteratee} from './baseIteratee'

describe('baseIteratee', () => {
    it('should handle string property path', () => {
        const iteratee = baseIteratee<{a: {b: {c: number}}}, number>('a.b.c')
        const obj = {a: {b: {c: 42}}}
        expect(iteratee(obj, 0, [])).toBe(42)
    })

    it('should handle number as property key', () => {
        const iteratee = baseIteratee<number[], number>(2)
        const collection: number[][] = [
            [10, 20, 30],
            [40, 50, 60],
        ]
        const value = collection[0]
        expect(iteratee(value, 0, collection)).toBe(30)
    })

    it('should handle symbol as property key', () => {
        const symKey = Symbol('key')
        type ObjWithSym = Record<typeof symKey, string>

        const iteratee = baseIteratee<ObjWithSym, string>(symKey)
        const obj: ObjWithSym = {[symKey]: 'value'}
        expect(iteratee(obj, 0, [])).toBe('value')
    })

    it('should handle array [key, value] pairs', () => {
        const iteratee = baseIteratee<{name: string; age: number}, boolean>(['name', 'Alice'])
        const obj = {name: 'Alice', age: 30}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {name: 'Bob', age: 25}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee<{name: {first: string; last?: string}}, boolean>(['name.first', 'a'])
        const obj2 = {
            name: {
                first: 'a',
                last: 'b',
            },
        }
        expect(complicated(obj2, 0, [])).toBe(true)
    })

    it('should handle plain object for partial match', () => {
        const iteratee = baseIteratee<{active: boolean; role: string; id?: number}, boolean>({
            active: true,
            role: 'admin',
        })
        const obj = {active: true, role: 'admin', id: 1}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {active: true, role: 'user'}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee<{name: {first: string; last?: string}}, boolean>({
            name: {
                first: 'a',
            },
        })
        const obj2 = {
            name: {
                first: 'a',
                last: 'b',
            },
        }
        expect(complicated(obj2, 0, [])).toBe(true)
    })

    it('should return the function if iteratee is already a function', () => {
        const customFunction = (value: number) => value > 10
        const iteratee = baseIteratee<number, boolean>(customFunction)
        expect(iteratee(15, 0, [])).toBe(true)
        expect(iteratee(5, 0, [])).toBe(false)
    })

    it('should reduce paths correctly with mixed keys (string & number)', () => {
        const iteratee = baseIteratee<{a: {b?: number}[]}, number>('a.1.b')
        const obj = {a: [{}, {b: 42}]}
        expect(iteratee(obj, 0, [])).toBe(42)
    })

    it('should handle missing keys gracefully', () => {
        const iteratee = baseIteratee<{a: {b: {c?: number}}}, number | undefined>('a.b.c')
        const obj = {a: {b: {}}}
        expect(iteratee(obj, 0, [])).toBeUndefined()
    })

    it('should handle NaN edge case with [key, value] pair', () => {
        const iteratee = baseIteratee<{score: number}, boolean>(['score', NaN])
        const obj = {score: NaN}
        expect(iteratee(obj, 0, [])).toBe(false)
    })

    it('should handle NaN edge case with plain object match', () => {
        const iteratee = baseIteratee<{score: number}, boolean>({score: NaN})
        const obj = {score: NaN}
        expect(iteratee(obj, 0, [])).toBe(false)
    })
})
