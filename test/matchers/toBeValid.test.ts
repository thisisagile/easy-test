import { toBeValid } from '../../src/matchers';

const valid = { isValid: true, isEmpty: false };
const invalid = { isValid: false, isEmpty: true };

describe('toBeValid', () => {
  test('fails', () => {
    expect(toBeValid()).toFailWith('Subject is undefined.');
    expect(toBeValid({})).toFailWith('Subject is not validatable.');
    expect(toBeValid(invalid)).toFailWith('Subject is not valid.');
  });

  test('passes', () => {
    expect(toBeValid(valid)).toPassWith('Subject is valid, which we did not expect.');
  });
});
