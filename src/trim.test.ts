import _trim from 'lodash/trim'
import {describe, expect, it} from 'vitest'

import trim from './trim'

describe('trim', () => {
    describe('should match lodash behavior', () => {
        it('trims whitespace by default', () => {
            const values = [
                '  hello  ',
                '\tworld\t',
                '\ntrim me\n',
                ' no-space',
                'space-only ',
                '   mixed spaces \t \n',
                '',
                '    ',
            ]

            values.forEach((value) => {
                expect(trim(value)).toBe(_trim(value))
            })
        })

        it('trims custom characters', () => {
            const testCases = [
                ['--hello--', '-', 'hello'],
                ['__world__', '_', 'world'],
                ['##test##', '#', 'test'],
                ['!!important!!', '!', 'important'],
                ['abcdeabc', 'abc', 'de'],
                ['---test--', '-', 'test'],
                ['xxtrimxx', 'x', 'trim'],
                ['-_-abc-_-', '_-', 'abc'],
            ]

            testCases.forEach(([input, chars, expected]) => {
                expect(trim(input, chars)).toBe(_trim(input, chars))
                expect(trim(input, chars)).toBe(expected)
            })
        })

        it('handles empty strings and undefined inputs', () => {
            const values = [undefined, null, '', '    ']

            values.forEach((value) => {
                expect(trim(value)).toBe(_trim(value))
            })
        })

        it('works with complex strings', () => {
            const values = [
                ['$$$hello$$$', '$', 'hello'],
                ['@@@world@@@', '@', 'world'],
                ['###javascript###', '#', 'javascript'],
                ['***code***', '*', 'code'],
            ]

            values.forEach(([input, chars, expected]) => {
                expect(trim(input, chars)).toBe(_trim(input, chars))
                expect(trim(input, chars)).toBe(expected)
            })
        })
    })
})
