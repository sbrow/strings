"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.until = exports.when = exports.tail = exports.isEmpty = exports.curry = void 0;
exports.curry = function (fn) {
    return (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        // @ts-ignore
        return (...more) => (0, exports.curry)(fn)(...args, ...more);
    };
};
const isEmpty = (str) => str == null || str === "";
exports.isEmpty = isEmpty;
const tail = (str) => str.substring(1);
exports.tail = tail;
exports.when = (0, exports.curry)((predicate, whenTrueFn, arg) => {
    return predicate(arg) ? whenTrueFn(arg) : arg;
});
exports.until = (0, exports.curry)((predicate, fn, arg) => {
    const loop = (a) => predicate(a) ? a : loop(fn(a));
    return loop(arg);
});
