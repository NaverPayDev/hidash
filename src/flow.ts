type Func<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult

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
export function flow<TArgs extends unknown[]>(
    ...funcs: [Func<TArgs, unknown>, ...Func<[unknown], unknown>[]]
): Func<TArgs, unknown> {
    return (...args: TArgs) => {
        let result: unknown = funcs[0](...args)
        for (let i = 1; i < funcs.length; i++) {
            result = funcs[i](result)
        }
        return result
    }
}

export default flow
