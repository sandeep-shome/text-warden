import unsafeWords from '../data/unsafeWords.json';

/**
 * Checks whether the given text contains any unsafe or profane words.
 *
 * This function normalizes the input by converting it to lowercase
 * and removing punctuation before comparing each word against a predefined
 * list of unsafe words.
 *
 * @param text - The text to validate for unsafe words.
 * @returns Returns `true` if the text is safe (no bad words), `false` otherwise.
 *
 * @example
 * isSafeText("Hello world"); // true
 * isSafeText("This is shit"); // false
 */
const isSafeText = (text: string): boolean => {
  const words: string[] = text
    .toLocaleLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);

  for (const word of words) {
    if (unsafeWords.includes(word)) {
      return false;
    }
  }
  return true;
};

export default isSafeText;
