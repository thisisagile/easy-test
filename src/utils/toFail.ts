import { match } from './Match';
import CustomMatcherResult = jest.CustomMatcherResult;
import { Message, ofMessage } from './Types';

// Handles CustomMatcherResult validations.

export const toFail = (result: CustomMatcherResult): CustomMatcherResult =>
  match(result)
    .not(c => !c.pass, `Match passed instead of failed.`)
    .else('Match failed');

export const toFailWith = (result: CustomMatcherResult, message: Message<CustomMatcherResult>): CustomMatcherResult =>
  match(result)
    .not(c => !c.pass, `Match passed instead of failed.`)
    .not(
      c => c.message().includes(ofMessage(message)),
      c => `Match failed, but with message '${c.message()}' instead of '${message}'.`
    )
    .else('Match failed');

expect.extend({
  toFail: toFail,
  toFailWith: toFailWith,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toFail(): R;
      toFailWith(message: string): R;
    }
  }
}
