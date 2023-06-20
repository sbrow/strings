import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { countSentences, sentences } from "./sentences";

describe("sentences", () => {
  describe("sentences", () => {
    it("returns '[]' for empty strings", () => {
      expect(sentences("")).toEqual([]);
    });
    it.each([
        [" "],
        ["   "],
        ["  \r "],
        ["\n "],
    ])("returns '[]' for strings with only whitespace characters", (str) => {
        expect(sentences(str)).toEqual([]);
    });
    it.each([
        ["Hello, World!"],
        ["Hello, World."],
        ["Hello, World?"],
    ])("wraps the input in an array if it has only one sentence", (str) => {
        expect(sentences(str)).toEqual([str]);
    });
    it('passes', () => {
      fc.assert(
        fc.property(fc.string(), (str) => {
            if (str === '' || str.trim() === '') {
                expect(sentences(str).length).toEqual(0)
            } else if (!str.match(/[!?.]/)){
                expect(sentences(str).length).toEqual(1)
                // expect(se??tences(str).length).toEqual(str.split(/\s+/).filter(complement(isEmpty)).length)
            }
        })
      );
    })
  });
  describe("countSentences", () => {
    it("matches the length of the output from sentences", () => {
      fc.assert(
        fc.property(fc.string(), (str) => {
          expect(countSentences(str)).toBe(sentences(str).length);
        })
      );
    });
  });
});
