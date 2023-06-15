"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWordsFromBeginning = exports.shorten = exports.shorterThan = void 0;
const index_1 = require("./index");
const utils_1 = require("./utils");
exports.shorterThan = (0, utils_1.curry)((maxChars, str) => str.length <= maxChars);
exports.shorten = (0, utils_1.curry)((maxChars, strategy) => (0, utils_1.until)((0, exports.shorterThan)(maxChars), strategy));
exports.removeWordsFromBeginning = (0, utils_1.curry)((maxChars, str) => (0, exports.shorten)(maxChars, index_1.removeFirstWord)(str));
/*
export const removeWordsFromBeginning = uncurryN(
    2,
    (maxChars: number) => shorten(maxChars, removeFirstWord),
  );
*/ 
