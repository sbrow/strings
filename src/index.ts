import { curry, isEmpty, tail, when } from "./utils";

// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
// }

export const startsWith = curry((needle: string, haystack: string) => haystack.indexOf(needle) === 0);

// export const endsWith = curry((needle, haystack) => (new RegExp(`${escapeRegExp(needle)}$`)).test(haystack));

/**
 * Trims characters from the left side of a string.
 */
export const ltrim = curry((cutset: string, str: string) => {
  const _trim = (x: string) => ltrim(cutset)(tail(x));
  // const _trim = compose(ltrim(cutset), tail);

  const trimmed: () => string = () => when((x: string = '') => cutset.includes(x.charAt(0)), _trim)(str);

  return isEmpty(cutset) || isEmpty(str)
  ? str
  : trimmed()
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
