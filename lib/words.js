"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordCount = exports.words = exports.wordsLazy = void 0;
const matchWord = /\S+/g;
function* wordsLazy(str, pattern = matchWord) {
    for (const match of str.matchAll(pattern)) {
        yield match[0];
    }
}
exports.wordsLazy = wordsLazy;
function words(str, pattern = matchWord) {
    return Array.from(wordsLazy(str, pattern));
}
exports.words = words;
function wordCount(str, pattern = matchWord) {
    let count = 0;
    for (const {} of str.matchAll(pattern))
        count++;
    return count;
}
exports.wordCount = wordCount;
