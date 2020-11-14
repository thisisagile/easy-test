export const isDefined = (o?: unknown): boolean => o !== undefined && o !== null;

export const isFunction = (o?: unknown): o is (...params: unknown[]) => unknown => isDefined(o) && typeof o === 'function';

export const isA = <T>(t?: unknown, ...properties: (keyof T)[]): t is T => isDefined(t) && properties.every(p => isDefined((t as T)[p]));
export const isAn = isA;
