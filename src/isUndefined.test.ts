import _isUndefined from 'lodash/isUndefined'
import {expect, describe, it} from 'vitest'

import {isUndefined} from './isUndefined'

describe('isUndefined - direct behavior', () => {
    it('returns true for undefined', () => {
        expect(isUndefined(undefined)).toBe(true)
    })

    it('returns false for null', () => {
        expect(isUndefined(null)).toBe(false)
    })

    it('returns false for 0', () => {
        expect(isUndefined(0)).toBe(false)
    })

    it('returns false for empty string', () => {
        expect(isUndefined('')).toBe(false)
    })

    it('returns false for false', () => {
        expect(isUndefined(false)).toBe(false)
    })

    it('returns false for empty object', () => {
        expect(isUndefined({})).toBe(false)
    })

    it('returns false for empty array', () => {
        expect(isUndefined([])).toBe(false)
    })

    it('returns false for "undefined" string', () => {
        expect(isUndefined('undefined')).toBe(false)
    })

    it('returns false for NaN', () => {
        expect(isUndefined(NaN)).toBe(false)
    })
})

describe('isUndefined - lodash parity', () => {
    it('matches lodash for various defined values', () => {
        const testCases = [null, 0, '', false, {}, [], 'undefined', NaN]
        testCases.forEach((value) => {
            expect(isUndefined(value)).toBe(_isUndefined(value))
        })
    })
})
