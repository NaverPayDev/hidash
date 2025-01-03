type AnyFunc = (...args: any[]) => any;
interface MemoizedFunction<T extends AnyFunc> {
    (...args: Parameters<T>): ReturnType<T>;
    cache: Map<any, ReturnType<T>>;
}
declare class MemoizeCache<T> extends Map<any, T> {
}
/**
 * @descriptoin https://unpkg.com/browse/lodash.memoize@4.1.2/index.js
 */
export declare function memoize<T extends AnyFunc>(func: T, resolver?: (...args: Parameters<T>) => any): MemoizedFunction<T>;
export declare namespace memoize {
    var Cache: typeof MemoizeCache;
}
export default memoize;
