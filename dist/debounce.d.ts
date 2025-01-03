interface DebounceOptions {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
}
/**
 * @description https://unpkg.com/lodash.debounce@4.0.8/index.js
 */
export declare function debounce<Args extends unknown[]>(func: (...args: Args) => unknown, waitMilliseconds?: number, { leading, trailing, maxWait }?: DebounceOptions): {
    debounce: (this: unknown, ...args: Args) => unknown;
    cancel: () => void;
    flush: () => unknown;
};
export default debounce;
