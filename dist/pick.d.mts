type Many<T> = T | Many<T>[];
export declare function pick<T extends object, U extends keyof T>(object: T, ...params: Many<U>[]): Pick<T, U>;
export default pick;
