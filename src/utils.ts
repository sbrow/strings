import type { curry as _curry, until as _until, when as _when } from "ramda";

export const curry = function (fn) {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    // @ts-ignore
    return (...more) => curry(fn)(...args, ...more);
  };
} as typeof _curry;

export const isEmpty = (str: string) => str == null || str === "";

export const tail = (str: string) => str.substring(1);

export const when = curry((predicate, whenTrueFn, arg) => {
  return predicate(arg) ? whenTrueFn(arg) : arg;
}) as typeof _when;

export const until = curry((predicate, fn, arg) => {
  const loop = (a: typeof arg): typeof a => predicate(a) ? a : loop(fn(a));

  return loop(arg);
}) as typeof _until;