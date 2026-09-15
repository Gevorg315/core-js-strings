/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 */
function getStringLength(value) {
  return value == null ? 0 : value.length;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

/**
 * Returns the first character of the given string.
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes leading and trailing whitespace characters from the string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Removes only leading whitespace characters from the string.
 */
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

/**
 * Removes only trailing whitespace characters from the string.
 */
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

/**
 * Returns a string that is repeated the specified number of times.
 */
function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

/**
 * Remove the first occurrence of a substring from a string.
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);

  if (index === -1 || value === '') {
    return str;
  }

  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Remove the last occurrence of a substring from a string.
 */
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);

  if (index === -1 || value === '') {
    return str;
  }

  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 */
function sumOfCodes(str) {
  if (!str) {
    return 0;
  }

  return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Checks if a string starts with a specific substring.
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 */
function formatTime(minutes, seconds) {
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Returns a string in reverse order.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 *
 * Vowels:
 * a, e, i, o, u, y
 */
function countVowels(str) {
  if (!str) {
    return 0;
  }

  const vowels = 'aeiouyAEIOUY';

  return str.split('').filter((char) => vowels.includes(char)).length;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 */
function isPalindrome(str) {
  if (!str) {
    return true;
  }

  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return normalized === normalized.split('').reverse().join('');
}

/**
 * Find the longest word in the sentence.
 * If there are multiple longest words, returns the first one.
 */
function findLongestWord(sentence) {
  if (!sentence) {
    return '';
  }

  return sentence
    .split(/\s+/)
    .reduce(
      (longestWord, word) =>
        word.length > longestWord.length ? word : longestWord,
      ''
    );
}

/**
 * Returns the string where each word is reversed.
 */
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

/**
 * Inverts the case of each character in the given string.
 */
function invertCase(str) {
  return str
    .split('')
    .map((char) => {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return char.toLowerCase();
      }

      if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return char.toUpperCase();
      }

      return char;
    })
    .join('');
}

/**
 * Returns the result of string template and given parameters.
 *
 * Please do not use concatenation, use template string.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string:
 * 'Hello, First_Name Last_Name!'
 */
function extractNameFromTemplate(template) {
  return template.replace('Hello, ', '').replace('!', '');
}

/**
 * Remove the first and last angle brackets from tag string.
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Extracts e-mails from single string with e-mails list
 * delimited by semicolons.
 */
function extractEmails(str) {
  if (!str) {
    return [];
  }

  return str.split(';');
}

/**
 * Encode specified string with ROT13 cipher.
 */
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }

    return String.fromCharCode(((code - 97 + 13) % 26) + 97);
  });
}

/**
 * Returns playing card id.
 *
 * Initial deck:
 *
 * A♣ 2♣ 3♣ ... K♣
 * A♦ 2♦ 3♦ ... K♦
 * A♥ 2♥ 3♥ ... K♥
 * A♠ 2♠ 3♠ ... K♠
 */
function getCardId(value) {
  const suits = ['♣', '♦', '♥', '♠'];
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  const rank = value.slice(0, -1);
  const suit = value.slice(-1);

  const rankIndex = ranks.indexOf(rank);
  const suitIndex = suits.indexOf(suit);

  if (rankIndex === -1 || suitIndex === -1) {
    return -1;
  }

  return suitIndex * 13 + rankIndex;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
