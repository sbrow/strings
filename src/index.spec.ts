import fc from "fast-check";
import { describe, expect, it } from "vitest";

import {
  afterFirst,
  afterLast,
  endsWith,
  ltrim,
  rtrim,
  trim,
  startsWith,
  beforeFirst,
} from "./index";

describe("strings", () => {
  describe("startsWith", () => {
    it("returns true if haystack starts with needle", () => {
      expect(startsWith("foo", "foobar")).toBe(true);
    });
    it("returns true when haystack is needle", () => {
      expect(startsWith("foo", "foo")).toBe(true);
    });
    it("works", () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (needle, haystack) => {
          if (haystack.indexOf(needle) == 0) {
            expect(startsWith(needle, haystack)).toBe(true);
          }
        })
      );
    });
  });
  describe("endsWith", () => {
    it("returns true if haystack end with needle", () => {
      expect(endsWith("bar", "foobar")).toBe(true);
    });
    it("returns true when haystack is needle", () => {
      expect(endsWith("foo", "foo")).toBe(true);
    });
    it("works", () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (needle, haystack) => {
          if (haystack.substring(haystack.indexOf(needle)) == needle) {
            expect(endsWith(needle, haystack)).toBe(true);
          }
        })
      );
    });
  });
  describe("afterFirst", () => {
    it("removes everything before the first needle when possible", () => {
      expect(afterFirst(" ", "foo bar bat")).toBe("bar bat");
    });

    it("removes nothing when needle is not present", () => {
      expect(afterFirst("&", "foo bar bat")).toBe("foo bar bat");
    });
  });
  describe("afterLast", () => {
    it("removes everything after the last needle when possible", () => {
      expect(afterLast(" ", "foo bar bat")).toBe("bat");
    });

    it("removes nothing when needle is not present", () => {
      expect(afterLast("&", "foo bar bat")).toBe("foo bar bat");
    });
  });

  describe("beforeFirst", () => {
    it("removes everything after the first needle when possible", () => {
      expect(beforeFirst(" ", "foo bar bat")).toBe("foo");
    });

    it("removes everythin when needle is not present", () => {
      expect(beforeFirst("&", "foo bar bat")).toBe("");
    });
  });
  //   describe('afterFirstWord', () => {
  // it('removes the first word', () => {
  //   fc.assert(fc.property(fc.string(), (str) => {
  //     const got = afterFirstWord(str);

  //     if (got !== '') {
  //       expect(endsWith(got, str)).toBe(true);
  //       if (str.indexOf(' ') !== -1) {
  //         expect(`${beforeFirstWord(str)} ${got}`).toBe(str);
  //       }
  //     }
  //   }));
  // });
  //   });
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
