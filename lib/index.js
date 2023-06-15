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
exports.removeFirstWord = exports.afterFirstWord = exports.beforeFirstWord = exports.beforeFirst = exports.afterLast = exports.afterFirst = exports.endsWith = exports.startsWith = void 0;
const utils_1 = require("./utils");
__exportStar(require("./shorten"), exports);
__exportStar(require("./trim"), exports);
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
exports.startsWith = (0, utils_1.curry)((needle, haystack) => haystack.indexOf(needle) === 0);
exports.endsWith = (0, utils_1.curry)((needle, haystack) => new RegExp(`${escapeRegExp(needle)}$`).test(haystack));
exports.afterFirst = (0, utils_1.curry)((separator, str) => str.substring(str.indexOf(separator) + 1, str.length));
exports.afterLast = (0, utils_1.curry)((separator, str) => str.substring(str.lastIndexOf(separator) + 1, str.length));
exports.beforeFirst = (0, utils_1.curry)((separator, str) => {
    const index = str.indexOf(separator);
    return index === -1
        ? str
        : str.substring(0, index);
});
// @todo Test
exports.beforeFirstWord = (0, exports.beforeFirst)(" ");
// @todo Test
exports.afterFirstWord = (0, exports.afterFirst)(" ");
exports.removeFirstWord = exports.afterFirstWord;
