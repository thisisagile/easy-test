import { equals } from 'expect/build/jasmineUtils';
import { iterableEquality, subsetEquality } from 'expect/build/utils';

export const asString = (s?: unknown): string => ((s as any)?.toString ? (s as any).toString() : undefined);

export class Eq {
  constructor(private a?: unknown, private b?: unknown) {}

  get exact(): boolean {
    return equals(this.a, this.b, []);
  }

  get subset(): boolean {
    return equals(this.a, this.b, [iterableEquality, subsetEquality]);
  }

  get string(): boolean {
    return asString(this.a) === asString(this.b);
  }
}

export const eq = (a?: unknown, b?: unknown): Eq => new Eq(a, b);
