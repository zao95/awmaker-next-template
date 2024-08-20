export const beforeClassNames = (...className: string[]) => {
    return className
        .join(' ')
        .split(' ')
        .map((c) => `before:${c}`)
        .join(' ')
}
export const afterClassNames = (...className: string[]) => {
    return className
        .join(' ')
        .split(' ')
        .map((c) => `after:${c}`)
        .join(' ')
}

export const hoverClassNames = (...className: string[]) => {
    return className
        .join(' ')
        .split(' ')
        .map((c) => `hover:${c}`)
        .join(' ')
}
