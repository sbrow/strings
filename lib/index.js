"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ltrim = exports.endsWith = exports.startsWith = void 0;
const utils_1 = require("./utils");
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
exports.startsWith = (0, utils_1.curry)((needle, haystack) => haystack.indexOf(needle) === 0);
exports.endsWith = (0, utils_1.curry)((needle, haystack) => (new RegExp(`${escapeRegExp(needle)}$`)).test(haystack));
/**
 * Trims characters from the left side of a string.
 */
exports.ltrim = (0, utils_1.curry)((cutset, str) => {
    const _trim = (x) => (0, exports.ltrim)(cutset)((0, utils_1.tail)(x));
    // const _trim = compose(ltrim(cutset), tail);
    const trimmed = () => (0, utils_1.when)((x = '') => cutset.includes(x.charAt(0)), _trim)(str);
    return (0, utils_1.isEmpty)(cutset) || (0, utils_1.isEmpty)(str)
        ? str
        : trimmed();
});
// export const afterFirst = curry(
//   /**
//    * @param {String} separator
//    * @param {String} str
//    * @return {String}
//    */
//   (separator, str) => str.substring(str.indexOf(separator) + 1, str.length),
// );
// export const beforeFirst = curry(
//   /**
//    *
//    * @param {String} separator
//    * @param {String} str
//    * @returns {String}
//    */
//   (separator, str) => str.substring(0, str.indexOf(separator)),
// );
// export const beforeFirstWord = beforeFirst(' ');
// /**
//  * @param {String} str
//  * @return {String}
//  */
// export function afterFirstWord(str) {
//   return afterFirst(' ', str);
// }
// export const removeFirstWord = afterFirstWord;
// /**
//  * @param {Number} maxChars
//  * @param {String} str
//  * @return {Boolean} False if str is longer than maxChars characters.
//  */
// const shorterThan = curry((maxChars, str) => str.length <= maxChars);
// /**
//  * @param {Number} maxChars The maximum length of the desired output string.
//  * @param strategy a function that accepts a string and returns a shorter string.
//  * @return {String} The input string, shortened to maxChars by strategy.
//  */
// const shortenString = (maxChars, strategy) => until(shorterThan(maxChars), strategy);
// /**
//  * @param {Number} maxChars
//  * @param {String} str The string to remove words from.
//  * @return {String} the shortened string.
//  */
// export const removeWordsFromStartOfString = uncurryN(
//   2,
//   (maxChars) => shortenString(maxChars, removeFirstWord),
// );
