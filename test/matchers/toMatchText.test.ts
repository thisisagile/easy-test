import { toMatchRoute, toMatchText } from '../../src';

describe('toMatchRoute', () => {
  const s = 'Hello';
  const o = { toString: () => 'Goodbye' };

  test('fails', () => {
    expect(toMatchText()).toFailWith('Subject is undefined.');
    expect(toMatchText(s)).toFailWith('Text to match with is undefined.');
    expect(toMatchText(s, 'Hi')).toFailWith("Text 'Hello' does not match with text 'Hi'.");
    expect(toMatchText(o, 'Hi')).toFailWith("Text 'Goodbye' does not match with text 'Hi'.");
    expect(toMatchText(o, s)).toFailWith("Text 'Goodbye' does not match with text 'Hello'.");
  });

  test('passes', () => {
    expect(toMatchText(s, 'Hello')).toPassWith("Text 'Hello' matches, which we did not expect.");
    expect(toMatchText(o, 'Goodbye')).toPassWith("Text 'Goodbye' matches, which we did not expect.");
    expect(toMatchText(o, o)).toPassWith("Text 'Goodbye' matches, which we did not expect.");
  });
});
