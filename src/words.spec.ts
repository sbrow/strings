import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { wordCount, words } from "./words";
import { complement, isEmpty } from "ramda";

describe("words", () => {
  describe("words", () => {
    it("returns '[]' for empty strings", () => {
      expect(words("")).toEqual([]);
    });
    it("returns '[]' for strings with only whitespace characters", () => {
        expect(words(" ")).toEqual([]);
        expect(words("   ")).toEqual([]);
        expect(words("  \r ")).toEqual([]);
        expect(words("\n ")).toEqual([]);
    });
    it('passes', () => {
      fc.assert(
        fc.property(fc.string(), (str) => {
            if (str === '' || str.trim() === '') {
                expect(words(str).length).toEqual(0)
            } else {
                expect(words(str).length).toEqual(str.split(/\s+/).filter(complement(isEmpty)).length)
            }
        })
      );
    })
  });
  describe("wordCount", () => {
    it("matches the length of the output from words", () => {
      fc.assert(
        fc.property(fc.string(), (str) => {
          expect(wordCount(str)).toBe(words(str).length);
        })
      );
    });
  });
});
