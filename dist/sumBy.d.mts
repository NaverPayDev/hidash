type NestedPaths<T> = T extends object ? {
    [K in keyof T]: K extends string ? T[K] extends number ? K : T[K] extends object ? `${K}.${NestedPaths<T[K]>}` : never : never;
}[keyof T] : never;
/**
 * @description https://unpkg.com/browse/lodash.sumby@4.6.0/index.js
 */
export declare function sumBy<T, P extends NestedPaths<T>>(elements: T[], iteratee: P | ((element: T) => number)): number;
export default sumBy;
