import { describe, expect, test } from "vitest";

import { obfuscate } from "./obfuscate";

describe('obfuscate', function() {
  test.each([
    ['brower.spencer@gmail.com', [/^.{3}/, '@', '.com'], ['co'], 'bro•••••••••••@•••••.••m'],
    ['brower.spencer@gmail.com', [/^.{3}/, '@', '.com'], [], 'bro•••••••••••@•••••.com']
  ])('%# works', function (str, allow, deny, want) {
    const got = obfuscate(str, allow, deny);

    expect(want.length).toEqual(str.length)
    
    expect(got).toBe(want);
  });  
});
