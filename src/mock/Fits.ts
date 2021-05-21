import { AsymmetricMatcher } from 'expect/build/asymmetricMatchers';
import { asString } from '../utils/Utils';

class ObjectContainingText extends AsymmetricMatcher<string> {
  asymmetricMatch(other: any) {
    return asString(this.sample) === asString(other);
  }

  toString() {
    return `String${this.inverse ? 'Not' : ''}Containing`;
  }
}

export const fits = {
  any: (): any => expect.anything(),
  type: (type?: unknown): any => expect.any(type),
  with: (o: unknown): any => expect.objectContaining(o),
  text: (s: any): any => new ObjectContainingText(s),
};
