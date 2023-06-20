const matchWord = /\S+/g

export function* wordsLazy(str: string, pattern: RegExp = matchWord) {
    for (const match of str.matchAll(pattern)) {
        yield match[0]
    }
}

export function words(str: string, pattern: RegExp = matchWord) {
    return Array.from(wordsLazy(str, pattern))
}

export function wordCount(str: string, pattern: RegExp = matchWord) {
    let count = 0

    for (const {} of str.matchAll(pattern))
        count++

    return count;
}