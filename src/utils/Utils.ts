export const isDefined = (o?: unknown): boolean => o !== undefined && o !== null;

export const isFunction = (o?: unknown): o is (...params: unknown[]) => unknown => isDefined(o) && typeof o === 'function';
