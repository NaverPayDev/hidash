import {baseIteratee} from './internal/baseIteratee'

import type {ValueIteratee} from './internal/baseIteratee.type'

export function sumBy<T>(elements: T[], iteratee: ValueIteratee<T>): number {
    const len = elements.length
    let sum = 0

    const iterateeFn = baseIteratee(iteratee)

    for (let i = 0; i < len; i++) {
        sum += iterateeFn(elements[i], i, elements) as number
    }

    return sum
}

export default sumBy
