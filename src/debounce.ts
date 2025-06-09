interface DebounceOptions {
    leading?: boolean // Whether to run the first call immediately
    maxWait?: number // Maximum wait time
    trailing?: boolean // Whether to make the last call
}

/**
 * @description
 * Creates a debounced function that delays invoking `func` until after `waitMilliseconds`
 * have elapsed since the last time the debounced function was invoked.
 * The debounced function comes with a `cancel` method to cancel delayed `func`
 * invocations and a `flush` method to immediately invoke them. Provide `options`
 * to indicate whether `func` should be invoked on the leading and/or trailing edge of
 * the `waitMilliseconds` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the result of
 * the last `func` invocation.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} [waitMilliseconds=0] - The number of milliseconds to delay.
 * @param {Object} [options={}] - The options object.
 * @param {boolean} [options.leading=false] - Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait] - The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true] - Specify invoking on the trailing edge of the timeout.
 * @returns {{debounce: Function, cancel: Function, flush: Function}} An object containing the debounced function, a cancel function, and a flush function.
 */
export function debounce<Args extends unknown[]>(
    func: (...args: Args) => unknown,
    waitMilliseconds = 0,
    {leading = false, trailing = true, maxWait}: DebounceOptions = {},
) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let lastArgs: Args | null = null
    let lastThis: unknown
    let result: unknown
    let lastCallTime: number | null = null
    let lastInvokeTime = 0

    const invokeFunc = (time: number) => {
        lastInvokeTime = time
        result = func.apply(lastThis, lastArgs as Args)
        lastThis = lastArgs = null
        return result
    }

    const startTimer = (pendingFunc: () => void, wait: number) => {
        return setTimeout(pendingFunc, wait)
    }

    // Calculate remaining wait time considering maxWait.
    const remainingWait = (time: number) => {
        const timeSinceLastCall = time - (lastCallTime as number)
        const timeSinceLastInvoke = time - lastInvokeTime
        const timeWaiting = waitMilliseconds - timeSinceLastCall

        return maxWait === undefined ? timeWaiting : Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
    }

    // Check if it's time to invoke.
    const shouldInvoke = (time: number) => {
        if (lastCallTime === null) {
            return true
        }
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime

        return (
            timeSinceLastCall >= waitMilliseconds ||
            timeSinceLastCall < 0 || // Handle system time changes.
            (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
        )
    }

    // Handle trailing edge invocation.
    const trailingEdge = (time: number) => {
        timeoutId = null
        if (trailing && lastArgs) {
            return invokeFunc(time)
        }
        lastArgs = lastThis = null
        return result
    }

    // Function called when timer expires.
    const timerExpired = () => {
        const time = Date.now()
        if (shouldInvoke(time)) {
            return trailingEdge(time)
        }
        // Restart timer with remaining wait time.
        timeoutId = startTimer(timerExpired, remainingWait(time))
    }

    // Handle leading edge invocation.
    const leadingEdge = (time: number) => {
        lastInvokeTime = time
        timeoutId = startTimer(timerExpired, waitMilliseconds)
        return leading ? invokeFunc(time) : result
    }

    const debounced = function (this: unknown, ...args: Args) {
        const time = Date.now()
        const isInvoking = shouldInvoke(time)

        lastArgs = args
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        lastThis = this
        lastCallTime = time

        if (isInvoking) {
            if (timeoutId === null) {
                return leadingEdge(lastCallTime)
            }
            if (maxWait !== undefined) {
                timeoutId = startTimer(timerExpired, remainingWait(time))
                return invokeFunc(lastCallTime)
            }
        }
        if (timeoutId === null) {
            timeoutId = startTimer(timerExpired, remainingWait(time))
        }
        return result
    }

    const cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        lastInvokeTime = 0
        lastArgs = lastCallTime = lastThis = timeoutId = null
    }

    const flush = () => {
        return timeoutId === null ? result : trailingEdge(Date.now())
    }

    return {
        debounce: debounced,
        cancel,
        flush,
    }
}

export default debounce
