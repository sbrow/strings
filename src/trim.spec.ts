import fc from "fast-check";
import { endsWith, startsWith } from "ramda";
import { describe, expect, it } from "vitest";

import { ltrim, rtrim, trim } from "./trim";

describe("trim", () => {
  describe("ltrim", () => {
    it("returns input when cutset is empty", () => {
      expect(ltrim("", "foo")).toBe("foo");
    });
    it("returns empty when input is empty", () => {
      expect(ltrim("foo", "")).toBe("");
    });
    it("can be curried", () => {
      expect(ltrim("foo", "")).toBe(ltrim("foo")(""));
      expect(ltrim(" ", " foo")).toBe(ltrim(" ")(" foo"));
    });
    it("trims cutset", () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (cutset, str) => {
          const got = ltrim(cutset, str);

          if (cutset === "") {
            expect(got).toBe(str);
          } else if (str === "") {
            expect(got).toBe("");
          } else {
            if (got === "") {
              for (const char of str) {
                expect(cutset).contains(char);
              }
            }

            for (const char of cutset) {
              expect(startsWith(char, got)).toBe(false);
            }
          }
        })
      );
    });
  });

  describe("rtrim", () => {
    it("returns input when cutset is empty", () => {
      expect(rtrim("", "foo")).toBe("foo");
    });
    it("returns empty when input is empty", () => {
      expect(rtrim("foo", "")).toBe("");
    });
    it("can be curried", () => {
      expect(rtrim("foo", "")).toBe(rtrim("foo")(""));
      expect(rtrim(" ", " foo")).toBe(rtrim(" ")(" foo"));
    });
    it("trims cutset", () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (cutset, str) => {
          const got = rtrim(cutset, str);

          if (cutset === "") {
            expect(got).toBe(str);
          } else if (str === "") {
            expect(got).toBe("");
          } else {
            if (got === "") {
              for (const char of str) {
                expect(cutset).contains(char);
              }
            }

            for (const char of cutset) {
              expect(endsWith(char, got)).toBe(false);
            }
          }
        })
      );
    });
  });

  describe("trim", () => {
    it("composes 'ltrim' and 'rtrim'", function () {
      fc.assert(
        fc.property(fc.string(), fc.string(), (cutset, str) => {
          expect(trim(cutset, str)).toBe(ltrim(cutset, rtrim(cutset, str)));
        })
      );
    });
  });
});
