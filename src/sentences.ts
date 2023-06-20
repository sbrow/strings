const matchSentenceEnd = /[!?]|(?<!\be|\be\.g|\betc)\./

export function* sentencesLazy(str: string, pattern = matchSentenceEnd): Generator<string> {
        if (str.trim() !== '') {
            const match = str.match(pattern)
            const index = match?.index ? match.index + 1 : undefined
            
            if (index) {
                yield str.substring(0, index)
                yield* sentencesLazy(str.substring(index))
            } else {
                yield str
            }
        }
}

export function sentences(str: string, pattern = matchSentenceEnd) {
    return Array.from(sentencesLazy(str, pattern))
}

export function countSentences(str: string, pattern = matchSentenceEnd) {
    return sentences(str, pattern).length
}