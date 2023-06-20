"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSentences = exports.sentences = exports.sentencesLazy = void 0;
const matchSentenceEnd = /[!?]|(?<!\be|\be\.g|\betc)\./;
function* sentencesLazy(str, pattern = matchSentenceEnd) {
    if (str.trim() !== '') {
        const match = str.match(pattern);
        const index = (match === null || match === void 0 ? void 0 : match.index) ? match.index + 1 : undefined;
        if (index) {
            yield str.substring(0, index);
            yield* sentencesLazy(str.substring(index));
        }
        else {
            yield str;
        }
    }
}
exports.sentencesLazy = sentencesLazy;
function sentences(str, pattern = matchSentenceEnd) {
    return Array.from(sentencesLazy(str, pattern));
}
exports.sentences = sentences;
function countSentences(str, pattern = matchSentenceEnd) {
    return sentences(str, pattern).length;
}
exports.countSentences = countSentences;
