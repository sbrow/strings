import { describe, expect, it } from 'vitest';
import fc from 'fast-check';
import {
  afterFirstWord, beforeFirstWord, endsWith, ltrim, startsWith,
} from './index';

describe('strings', () => {
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
  describe('ltrim', () => {
    it('returns input when cutset is empty', () => {
      expect(ltrim('', 'foo')).toBe('foo');
    });
    it('returns empty when input is empty', () => {
      expect(ltrim('foo', '')).toBe('');
    });
    it('can be curried', () => {
      expect(ltrim('foo', '')).toBe(ltrim('foo')(''));
      expect(ltrim(' ', 'foo')).toBe(ltrim(' ')('foo'));
    });
    it('trims cutset', () => {
      fc.assert(fc.property(fc.string(), fc.string(), (cutset, str) => {
        const got = ltrim(cutset, str);

        if (cutset === '') {
          expect(got).toBe(str);
        } else if (str === '') {
          expect(got).toBe('');
        } else {
          if (got === '') {
            for (const char of str) {
              expect(cutset).contains(char);
            }
          }

          for (const char of cutset) {
            expect(startsWith(char, got)).toBe(false);
          }
        }
      }));
    });
  });
});