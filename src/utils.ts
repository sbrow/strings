type Predicate<T> = (arg: T) => boolean;
type Fn<T, U = any> = (arg: T) => U;

export function curry (fn) {
    return (...args) => {
      if (args.length >= fn.length) {
        return fn(...args);
      }
  
      return (...more) => curry(fn)(...args, ...more);
    }
  }

export const isEmpty = (str: string) => str == null || str === '';

export const tail = (str: string) => str.substring(1);

export function when<T>(predicate: Predicate<T>, whenTrueFn: Fn<T>, arg: T): any {
    return predicate(arg) ? whenTrueFn(arg) : arg;
}