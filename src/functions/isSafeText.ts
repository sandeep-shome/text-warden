import unsafeWords from '../data/unsafeWords.json';
import { IsSafeTextOptions } from '../types';

/**
 * Checks if the given text is safe by detecting unsafe or profane words.
 *
 * @param text - The input text to validate.
 * @param option - Optional configuration for custom and default word handling.
 * @returns `true` if the text is safe, `false` if unsafe, or `null` if invalid config.
 */
export const isSafeText = (text: string, option?: IsSafeTextOptions): boolean | null => {
  const words: string[] = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);

  const { extendUnsafeWords, skipChecksFor, disableDefaultUnsafeWords } = option || {};

  // Error if user disables default words without providing custom ones
  if (disableDefaultUnsafeWords && (!extendUnsafeWords || extendUnsafeWords.length === 0)) {
    console.error(
      '[ERROR]: default unsafe words are disabled, but extendUnsafeWords are not provided',
    );
    return null;
  }

  // Check against custom words
  if (extendUnsafeWords) {
    for (const word of words) {
      if (extendUnsafeWords.includes(word)) return false;
    }
  }

  // If not disabled, check against default unsafe words
  if (!disableDefaultUnsafeWords) {
    for (const word of words) {
      if (unsafeWords.includes(word) && !skipChecksFor?.includes(word)) {
        return false;
      }
    }
  }

  return true;
};

export default isSafeText;
