import { curry } from "./utils";

export * from "./sentences";
export * from "./shorten";
export * from "./trim";
export * from "./words";

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export const startsWith = curry(
  (needle: string, haystack: string) => haystack.indexOf(needle) === 0
);

export const endsWith = curry((needle: string, haystack: string) =>
  new RegExp(`${escapeRegExp(needle)}$`).test(haystack)
);

export const afterFirst = curry((separator: string, str: string) =>
  str.substring(str.indexOf(separator) + 1, str.length)
);

export const afterLast = curry((separator: string, str: string) =>
  str.substring(str.lastIndexOf(separator) + 1, str.length)
);

export const beforeFirst = curry((separator: string, str: string) => {
  const index = str.indexOf(separator);
  
  return index === -1
    ? str
    : str.substring(0, index)
});

// @todo Test
export const beforeFirstWord = beforeFirst(" ");

// @todo Test
export const afterFirstWord: (str: string) => string = afterFirst(" ");
export const removeFirstWord: (str: string) => string = afterFirstWord;