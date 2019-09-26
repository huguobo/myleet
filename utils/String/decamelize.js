// Convert a camelized string into a lowercased one with a custom separator
// Example: unicornRainbow → unicorn_rainbow
const xRegExp = require('xregexp');

const decamelize = (text, separator = '_') => {
  if (!(typeof text === 'string' && typeof separator === 'string')) {
    throw new TypeError('The `text` and `separator` arguments should be of type `string`');
  }

  const regex1 = xRegExp('([\\p{Ll}\\d])(\\p{Lu})', 'g');
  const regex2 = xRegExp('(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)', 'g');
  return text
    .replace(regex1, `$1${separator}$2`)
    .replace(regex2, `$1${separator}$2`)
    .toLowerCase();
};

module.exports = decamelize;
