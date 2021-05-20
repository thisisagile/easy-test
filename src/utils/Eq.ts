import { equals } from 'expect/build/jasmineUtils';
import { iterableEquality, subsetEquality } from 'expect/build/utils';

export const asString = (s?: unknown): string => ((s as any)?.toString ? (s as any).toString() : undefined);

export const eq = {
  exact: (a?: unknown, b?: unknown): boolean => equals(a, b, []),
  subset: (a?: unknown, b?: unknown): boolean => equals(a, b, [iterableEquality, subsetEquality]),
  string: (a?: unknown, b?: unknown): boolean => asString(a) === asString(b),
};
