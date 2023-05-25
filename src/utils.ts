import type { curry as _curry, when as _when } from 'ramda';

export const curry = function(fn) {
    return (...args) => {
      if (args.length >= fn.length) {
        return fn(...args);
      }
  
      // @ts-ignore
      return (...more) => curry(fn)(...args, ...more);
    }
  } as typeof _curry;

export const isEmpty = (str: string) => str == null || str === '';

export const tail = (str: string) => str.substring(1);

export const when = curry((predicate, whenTrueFn, arg) => {
    return predicate(arg) ? whenTrueFn(arg) : arg;
}) as typeof _when;