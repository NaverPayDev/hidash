type Iteratee<PARAM, RETURN> = string | ((element: PARAM) => RETURN);
type BoxedPrimitive = StringConstructor | NumberConstructor | BooleanConstructor;
export declare function mapValues<T extends Record<string, unknown>>(object: T | null | undefined): T;
export declare function mapValues<T extends unknown[]>(object: T | null | undefined): Record<string, T[number]>;
export declare function mapValues<T extends Record<string, unknown>>(object: T | null | undefined, iteratee?: null | undefined): T;
export declare function mapValues<T extends unknown[]>(object: T | null | undefined, iteratee?: null | undefined): Record<string, T[number]>;
export declare function mapValues<T extends Record<string, unknown>, I extends BoxedPrimitive>(object: T | null | undefined, iteratee: I): {
    [K in keyof T]: ReturnType<I>;
};
export declare function mapValues<T extends Record<string, unknown>, R>(object: T | null | undefined, iteratee: Iteratee<T[keyof T], R>): {
    [K in keyof T]: R;
};
export declare function mapValues<T extends unknown[], I extends BoxedPrimitive>(object: T | null | undefined, iteratee: I): Record<string, ReturnType<I>>;
export declare function mapValues<T extends unknown[], R>(object: T | null | undefined, iteratee: Iteratee<T[number], R>): Record<string, R>;
export default mapValues;
