type Func<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult

/**
 * @description
 * Creates a composite function that invokes the provided functions in sequence from left to right.
 * The first function is called with the initial arguments provided to the new function,
 * and its result is passed as the sole argument to the next function, continuing the chain.
 *
 * As an enhancement over lodash, this implementation provides strong TypeScript type inference
 * for a sequence of up to 7 functions, ensuring type safety through the composition chain.
 *
 * @param {...Function} funcs The sequence of functions to compose.
 * @returns {Function} Returns the new, composed function.
 */
export function flow<TArgs extends unknown[], TResult>(fn: Func<TArgs, TResult>): Func<TArgs, TResult>
export function flow<TArgs extends unknown[], TResult1, TResult2>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
): Func<TArgs, TResult2>
export function flow<TArgs extends unknown[], TResult1, TResult2, TResult3>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
    fn3: Func<[TResult2], TResult3>,
): Func<TArgs, TResult3>
export function flow<TArgs extends unknown[], TResult1, TResult2, TResult3, TResult4>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
    fn3: Func<[TResult2], TResult3>,
    fn4: Func<[TResult3], TResult4>,
): Func<TArgs, TResult4>
export function flow<TArgs extends unknown[], TResult1, TResult2, TResult3, TResult4, TResult5>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
    fn3: Func<[TResult2], TResult3>,
    fn4: Func<[TResult3], TResult4>,
    fn5: Func<[TResult4], TResult5>,
): Func<TArgs, TResult5>
export function flow<TArgs extends unknown[], TResult1, TResult2, TResult3, TResult4, TResult5, TResult6>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
    fn3: Func<[TResult2], TResult3>,
    fn4: Func<[TResult3], TResult4>,
    fn5: Func<[TResult4], TResult5>,
    fn6: Func<[TResult5], TResult6>,
): Func<TArgs, TResult6>
export function flow<TArgs extends unknown[], TResult1, TResult2, TResult3, TResult4, TResult5, TResult6, TResult7>(
    fn1: Func<TArgs, TResult1>,
    fn2: Func<[TResult1], TResult2>,
    fn3: Func<[TResult2], TResult3>,
    fn4: Func<[TResult3], TResult4>,
    fn5: Func<[TResult4], TResult5>,
    fn6: Func<[TResult5], TResult6>,
    fn7: Func<[TResult6], TResult7>,
): Func<TArgs, TResult7>
export function flow<TArgs extends unknown[]>(
    ...funcs: [Func<TArgs, unknown>, ...Func<[unknown], unknown>[]]
): Func<TArgs, unknown> {
    return (...args: TArgs) => {
        let result: unknown = funcs[0](...args)
        const funcLength = funcs.length
        for (let i = 1; i < funcLength; i++) {
            result = funcs[i](result)
        }
        return result
    }
}

export default flow
