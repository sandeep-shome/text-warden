import { describe, expect, it } from 'vitest';
import { isSafeText } from '../src/functions/isSafeText';

describe('isSafeText', () => {
  it('returns true for safe input', () => {
    expect(isSafeText('hello world')).toBe(true);
  });

  it('returns false for default unsafe words', () => {
    expect(isSafeText('this is shit')).toBe(false);
  });

  it('skips word when in skipChecksFor', () => {
    expect(isSafeText('this is shit', { skipChecksFor: ['shit'] })).toBe(true);
  });

  it('returns false for custom words if provided', () => {
    expect(
      isSafeText('this is foo', {
        extendUnsafeWords: ['foo'],
        disableDefaultUnsafeWords: true,
      }),
    ).toBe(false);
  });

  it('returns true when only custom words are defined and input is clean', () => {
    expect(
      isSafeText('this is clean', {
        extendUnsafeWords: ['foo'],
        disableDefaultUnsafeWords: true,
      }),
    ).toBe(true);
  });

  it('returns null when default words are disabled and no custom words provided', () => {
    expect(
      isSafeText('this is clean', {
        disableDefaultUnsafeWords: true,
      }),
    ).toBe(null);
  });
});
