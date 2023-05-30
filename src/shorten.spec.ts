import { describe, it, expect } from "vitest";

import { removeWordsFromBeginning, shorten } from "./index";

describe("shorten", () => {
  it("shortens a string to the desired length", () => {
    expect(
      shorten(6, (str) => str.substring(0, str.length - 1))("foobarbat")
    ).toBe("foobar");
    expect(shorten(6, (str) => str.substring(1))("foobarbat")).toBe("barbat");
  });
});

describe("removeWordsFromBeginning", () => {
  it("removes words from the beginning of a string", () => {
    expect(removeWordsFromBeginning(7, "foo bar bat")).toBe("bar bat");
    expect(removeWordsFromBeginning(7, "foo bar bat baz")).toBe("bat baz");
  });
});
