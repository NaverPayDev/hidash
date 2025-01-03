type Many<T> = T | Many<T>[];
type List<T> = ArrayLike<T>;
export declare function flatten<T>(array: List<Many<T>> | null | undefined): T[];
export default flatten;
