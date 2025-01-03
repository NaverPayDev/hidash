interface ThrottleOptions {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
}
export declare const throttle: <Return, Arguments extends unknown[]>(func: (...args: Arguments) => Return, wait?: number, { leading, trailing, maxWait }?: ThrottleOptions) => {
    throttled: (...args: Arguments) => Return | undefined;
    cancel: () => void;
};
export default throttle;
