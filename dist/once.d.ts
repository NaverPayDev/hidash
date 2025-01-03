export declare function once<T extends (...args: Parameters<T>) => ReturnType<T>>(func: T): (...args: Parameters<T>) => ReturnType<T>;
export default once;
