import { describe, expect, it } from 'vitest';
import fc from 'fast-check';
import {
  /*afterFirstWord, beforeFirstWord, */ afterFirst, afterLast, endsWith, ltrim, rtrim, trim, startsWith,
} from './index';

describe('strings', () => {
    describe('startsWith', () => {
        it('returns true if haystack starts with needle', () => {
            expect(startsWith('foo', 'foobar')).toBe(true);
        })
        it('returns true when haystack is needle', () => {
            expect(startsWith('foo', 'foo')).toBe(true);
        })
        it('works', () => {
            fc.assert(fc.property(fc.string(), fc.string(), (needle, haystack) => {
                if (haystack.indexOf(needle) == 0) {
                    expect(startsWith(needle, haystack)).toBe(true);
                }
            }));
        })
    });
    describe('endsWith', () => {
        it('returns true if haystack end with needle', () => {
            expect(endsWith('bar', 'foobar')).toBe(true);
        })
        it('returns true when haystack is needle', () => {
            expect(endsWith('foo', 'foo')).toBe(true);
        })
        it('works', () => {
            fc.assert(fc.property(fc.string(), fc.string(), (needle, haystack) => {
                if (haystack.substring(haystack.indexOf(needle)) == needle) {
                    expect(endsWith(needle, haystack)).toBe(true);
                }
            }));
        })
    });
    describe('afterFirst', () => {
        it('removes everything before the first needle when possible', () => {
            expect(afterFirst(' ', 'foo bar bat')).toBe('bar bat');
        })

        it('removes nothing when needle is not present', () => {
            expect(afterFirst('&', 'foo bar bat')).toBe('foo bar bat');
        })
    })
    describe('afterLast', () => {
        it('removes everything after the last needle when possible', () => {
            expect(afterLast(' ', 'foo bar bat')).toBe('bat');
        })

        it('removes nothing when needle is not present', () => {
            expect(afterLast('&', 'foo bar bat')).toBe('foo bar bat');
        })
    })
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
});