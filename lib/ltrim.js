"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = exports.rtrim = exports.ltrim = void 0;
const utils_1 = require("./utils");
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
exports.rtrim = (0, utils_1.curry)((cutset, str) => {
    const _trim = (x) => (0, exports.rtrim)(cutset)(x.substring(0, x.length - 1));
    // const _trim = compose(rtrim(cutset), init);
    const trimmed = () => (0, utils_1.when)((x = '') => cutset.includes(x.charAt(x.length - 1)), _trim)(str);
    return (0, utils_1.isEmpty)(cutset) || (0, utils_1.isEmpty)(str)
        ? str
        : trimmed();
});
// const trim = curry((cutset: string, str: string) => compose(ltrim(cutset), rtrim(cutset))(str));
exports.trim = (0, utils_1.curry)((cutset, str) => (0, exports.ltrim)(cutset)((0, exports.rtrim)(cutset, str)));
