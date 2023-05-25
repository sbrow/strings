import { curry, isEmpty, tail, when } from "./utils";

/**
 * Trims characters from the left side of a string.
 */

export const ltrim = curry((cutset: string, str: string) => {
  const _trim = (x: string) => ltrim(cutset)(tail(x));
  // const _trim = compose(ltrim(cutset), tail);
  const trimmed: () => string = () =>
    when((x: string = "") => cutset.includes(x.charAt(0)), _trim)(str);

  return isEmpty(cutset) || isEmpty(str) ? str : trimmed();
});

export const rtrim = curry((cutset: string, str: string) => {
  const _trim = (x: string) => rtrim(cutset)(x.substring(0, x.length - 1));
  // const _trim = compose(rtrim(cutset), init);
  const trimmed: () => string = () =>
    when(
      (x: string = "") => cutset.includes(x.charAt(x.length - 1)),
      _trim
    )(str);

  return isEmpty(cutset) || isEmpty(str) ? str : trimmed();
});
// const trim = curry((cutset: string, str: string) => compose(ltrim(cutset), rtrim(cutset))(str));

export const trim = curry((cutset: string, str: string) =>
  ltrim(cutset)(rtrim(cutset, str))
);
