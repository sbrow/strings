export type Patterns = Array<string | RegExp>;

/**
 * Replaces all but the first `length` characters of a string with `•`.
 *
 * @param {string} string The string to obfuscate.
 * @param {string[]} whitelistPatterns
 * @return {string} The obfuscated string.
 */
export function obfuscate(
  string: string,
  whitelistPatterns: Patterns = [],
  blacklistPatterns: Patterns = []
): string {
  return [
    whitelist(whitelistPatterns),
    blacklist(blacklistPatterns)
  ].reduce(
    (str, fn) => fn(str),
    string
  );
}

function mergePatterns(patterns: Patterns): string {
  return patterns
    .map((pattern) =>
      typeof pattern === "string" ? escapeRegExp(pattern) : pattern.source
    )
    .join("|");
}

function whitelist(patterns: Patterns) {
  const whitelistPattern = RegExp(mergePatterns(patterns), "dgm");

  return (string: string) =>
    Array.from(string.matchAll(whitelistPattern))
      .map((result) => [result[0], result.indices[0][0]])
      .reduce(
        (carry, [word, index]) => carry.padEnd(index, "\u2022") + word,
        ""
      );
}

function blacklist(patterns: Patterns) {
  const blacklistPattern = new RegExp(mergePatterns(patterns), "dgm");
  //return string => Array.from(string.matchAll(blacklistPattern)).filter(x => x[0].length)
  return (string: string) =>
    string.replaceAll(blacklistPattern, (match: string) => {
     return "".padEnd(match.length, "\u2022");
    });
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[/\]\\]/g, "\\$&");
}

