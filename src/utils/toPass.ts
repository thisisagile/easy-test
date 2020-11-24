import { match } from './Match';
import CustomMatcherResult = jest.CustomMatcherResult;
import { Message, ofMessage } from './Types';

// Handles CustomMatcherResult validations.

export const toPass = (result: CustomMatcherResult): CustomMatcherResult =>
  match(result)
    .not(c => c.pass, `Match failed instead of passed.`)
    .else('Match passed');

export const toPassWith = (result: CustomMatcherResult, message: Message<CustomMatcherResult>): CustomMatcherResult =>
  match(result)
    .not(c => c.pass, `Match failed instead of passed.`)
    .not(
      c => c.message().includes(ofMessage(message)),
      c => `Match passed, but with message '${c.message()}' instead of '${message}'.`
    )
    .else('Match passed');

expect.extend({
  toPass: toPass,
  toPassWith: toPassWith,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toPass(): R;
      toPassWith(message: string): R;
    }
  }
}
