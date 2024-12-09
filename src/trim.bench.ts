import _trim from 'lodash/trim'
import {bench, describe} from 'vitest'

import trim from './trim'

const testCases = [
    {value: '  hello  '},
    {value: '\tworld\t'},
    {value: '\ntrim me\n'},
    {value: ' no-space'},
    {value: 'space-only '},
    {value: '   mixed spaces \t \n'},
    {value: ''},
    {value: '    '},

    {value: ['--hello--', '-']},
    {value: ['__world__', '_']},
    {value: ['##test##', '#']},
    {value: ['!!important!!', '!']},
    {value: ['abcdeabc', 'abc']},
    {value: ['---test--', '-']},
    {value: ['xxtrimxx', 'x']},

    {value: [null, undefined]},
    {value: ['$$$hello$$$', '$']},
    {value: ['@@@world@@@', '@']},
    {value: ['###javascript###', '#']},
    {value: ['***code***', '*']},
]

const ITERATIONS = 10000

describe('trim performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                Array.isArray(value) ? trim(value[0], value[1]) : trim(value as string)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                Array.isArray(value) ? _trim(value[0], value[1]) : _trim(value as string)
            })
        }
    })
})
