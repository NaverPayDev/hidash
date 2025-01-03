type Keys<T> = T extends readonly unknown[] ? number : keyof T;
type ValueOf<T> = T extends readonly (infer U)[] ? U : T[keyof T];
export declare function transform<T extends readonly unknown[] | Record<PropertyKey, unknown>, R>(object: T | null | undefined, iteratee: (acc: R, value: ValueOf<T>, key: Keys<T>, obj: T) => boolean | void, accumulator?: R): R;
export default transform;
