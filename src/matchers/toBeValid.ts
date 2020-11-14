import CustomMatcherResult = jest.CustomMatcherResult;
import { match } from '../utils';

export const toBeValid = (v?: any): CustomMatcherResult =>
  match(v)
    .undefined(v => v, 'Subject is undefined.')
    .undefined(v => v.isValid, 'Subject is not validatable.')
    .not(v => v.isValid, `Subject is not valid.`)
    .else(`Subject is valid`);

expect.extend({
  toBeValid,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toBeValid(): R;
    }
  }
}
