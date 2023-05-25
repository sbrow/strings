import { curry } from "./utils";

export * from './trim';

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const startsWith = curry((needle: string, haystack: string) => haystack.indexOf(needle) === 0);

export const endsWith = curry((needle: string, haystack: string) => (new RegExp(`${escapeRegExp(needle)}$`)).test(haystack));

export const afterFirst = curry(
  (separator: string, str: string) => str.substring(str.indexOf(separator) + 1, str.length),
);

export const afterLast = curry(
  (separator: string, str: string) => str.substring(str.lastIndexOf(separator) + 1, str.length),
);

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
