import { removeFirstWord } from "./index";
import { curry, until } from "./utils";


export const shorterThan = curry((maxChars: number, str: string) => str.length <= maxChars);

export const shorten = curry((maxChars: number, strategy) => until(shorterThan(maxChars) as (str: string) => boolean, strategy));

export const removeWordsFromBeginning = curry((maxChars: number, str: string) => shorten(maxChars, removeFirstWord)(str));

/*
export const removeWordsFromBeginning = uncurryN(
    2,
    (maxChars: number) => shorten(maxChars, removeFirstWord),
  );
*/