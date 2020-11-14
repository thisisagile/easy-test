export const isDefined = (o?: unknown): boolean => o !== undefined && o !== null;

export const isFunction = (o?: unknown): o is Function => isDefined(o) && o instanceof Function;

