export declare function before<T extends (...args: Parameters<T>) => ReturnType<T>>(initialN: number, func: T): (...args: Parameters<T>) => ReturnType<T>;
export default before;
