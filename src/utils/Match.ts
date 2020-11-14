import { isDefined } from './Utils';
import { Message, ofMessage } from './Types';
import CustomMatcherResult = jest.CustomMatcherResult;

export class Match<S> {
  constructor(private readonly subject: S, private readonly failed = false, private readonly message: Message<S> = '') {}

  not(p: (s: S) => boolean, message: Message<S>): Match<S> {
    if (this.failed) return this;
    try {
      return new Match<S>(this.subject, !p(this.subject), ofMessage(message, this.subject));
    } catch (e) {
      return new Match<S>(this.subject, true, e.message);
    }
  }

  undefined(p: (s: S) => any, message: Message<S>): Match<S> {
    return this.not(() => isDefined(p(this.subject)), message);
  }

  else(message: Message<S>): CustomMatcherResult {
    return {
      pass: !this.failed,
      message: () => (this.failed ? ofMessage(this.message) : `${ofMessage(message, this.subject)}, which we did not expect.`),
    };
  }
}

export const match = <S>(subject: S): Match<S> => new Match<S>(subject);
