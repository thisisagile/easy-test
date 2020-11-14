import { match } from './Match';
import CustomMatcherResult = jest.CustomMatcherResult;
import { Message, ofMessage } from './Types';

// Handles CustomMatcherResult validations.

export const toPass = (cmr: CustomMatcherResult): CustomMatcherResult =>
  match(cmr)
    .not(c => c.pass, `Match failed instead of passed.`)
    .else("Match passed");

export const toFail = (cmr: CustomMatcherResult): CustomMatcherResult =>
  match(cmr)
    .not(c => !c.pass, `Match passed instead of failed.`)
    .else("Match failed");

export const toPassWith = (cmr: CustomMatcherResult, message: Message): CustomMatcherResult =>
  match(cmr)
    .not(c => c.pass, `Match failed instead of passed.`)
    .not(
      c => c.message().includes(ofMessage(message)),
      c => `Match passed, but with message '${c.message()}' instead of '${message}'.`
    )
    .else("Match passed");

export const toFailWith = (cmr: CustomMatcherResult, message: Message): CustomMatcherResult =>
  match(cmr)
    .not(c => !c.pass, `Match passed instead of failed.`)
    .not(
      c => c.message().includes(ofMessage(message)),
      c => `Match failed, but with message '${c.message()}' instead of '${message}'.`
    )
    .else("Match failed");

expect.extend({
  toPass: toPass,
  toFail: toFail,
  toPassWith: toPassWith,
  toFailWith: toFailWith,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toPass(): R;
      toFail(): R;
      toPassWith(message: string): R;
      toFailWith(message: string): R;
    }
  }
}
