export function trim(input: unknown = '', chars?: string, guard?: unknown): string {
    const str = input == null ? '' : String(input)

    // 기본 공백 제거
    if (str && (guard !== undefined || chars === undefined)) {
        return str.trim()
    }

    if (!str || !chars) {
        return str
    }

    return trimSinglePass(str, chars)
}

function trimSinglePass(str: string, chars: string): string {
    let start = 0
    let end = str.length - 1
    const charSet = new Set(chars)
    while (start <= end && (charSet.has(str[start]) || charSet.has(str[end]))) {
        if (charSet.has(str[start])) {
            start++
        }
        if (charSet.has(str[end])) {
            end--
        }
    }

    return start <= end ? str.slice(start, end + 1) : ''
}

export default trim
