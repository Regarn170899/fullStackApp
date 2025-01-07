export function updateProperties<T>(target: T, source: Partial<T>): T {
    for (const key in target) {
        if (key in source) {
            target[key] = source[key]!;
        }
    }
    return target;
}