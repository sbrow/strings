"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeFirstWord = exports.beforeFirst = exports.afterLast = exports.afterFirst = exports.endsWith = exports.startsWith = void 0;
const utils_1 = require("./utils");
__exportStar(require("./trim"), exports);
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
exports.startsWith = (0, utils_1.curry)((needle, haystack) => haystack.indexOf(needle) === 0);
exports.endsWith = (0, utils_1.curry)((needle, haystack) => new RegExp(`${escapeRegExp(needle)}$`).test(haystack));
exports.afterFirst = (0, utils_1.curry)((separator, str) => str.substring(str.indexOf(separator) + 1, str.length));
exports.afterLast = (0, utils_1.curry)((separator, str) => str.substring(str.lastIndexOf(separator) + 1, str.length));
exports.beforeFirst = (0, utils_1.curry)((separator, str) => str.substring(0, str.indexOf(separator)));
// @todo Test
exports.beforeFirstWord = (0, exports.beforeFirst)(" ");
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
