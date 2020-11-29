import CustomMatcherResult = jest.CustomMatcherResult;
import { Validatable } from '../utils/Types';
import { isA } from '../utils/Utils';
import { match } from './Match';

export const toBeValid = (v?: unknown): CustomMatcherResult =>
  match<Validatable>(v as Validatable)
    .undefined(v => v, 'Subject is undefined.')
    .not(v => isA<Validatable>(v, 'isValid'), 'Subject is not validatable.')
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
