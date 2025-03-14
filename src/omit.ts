import {PropertyPath} from './internal/types'

export function omit<T extends object>(object: T | null | undefined, ...paths: PropertyPath[]): T {
    if (object == null) {
        return {} as T
    }

    const result = {...object}
    const flattenedPaths: PropertyPath[] = []

    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        if (Array.isArray(path)) {
            for (let j = 0; j < path.length; j++) {
                flattenedPaths.push(path[j])
            }
        } else {
            flattenedPaths.push(path)
        }
    }

    const size = flattenedPaths.length
    for (let i = 0; i < size; i++) {
        delete result[flattenedPaths[i] as keyof T]
    }

    return result
}

export default omit
