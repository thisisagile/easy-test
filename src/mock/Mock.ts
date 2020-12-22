import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;
import SpyInstance = jest.SpyInstance;
import Mock = jest.Mock;

const mockProperty = <T, P extends NonFunctionPropertyNames<Required<T>>>(object: T, getter: P, value: T[P]): SpyInstance =>
  jest.spyOn(object, getter, 'get').mockReturnValue(value);

export const mock = {
  clear: jest.clearAllMocks(),
  impl: (f?: (...args: any[]) => any): Mock => jest.fn().mockImplementation(f),
  property: mockProperty,
  reject: (value?: unknown): Mock => jest.fn().mockRejectedValue(value),
  resolve: (value?: unknown): Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): Mock => jest.fn().mockReturnValue(value),
  this: (): Mock => jest.fn().mockReturnThis(),
};