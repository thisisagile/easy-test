import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;
import SpyInstance = jest.SpyInstance;
import Mock = jest.Mock;
import { Id } from '../utils/Types';
import { Req } from '../utils/Req';

const mockProperty = <T, P extends NonFunctionPropertyNames<Required<T>>>(object: T, getter: P, value: T[P]): SpyInstance =>
  jest.spyOn(object, getter, 'get').mockReturnValue(value);

export const mock = {
  clear: jest.clearAllMocks(),
  impl: (f?: (...args: any[]) => any): Mock => jest.fn().mockImplementation(f),
  property: mockProperty,
  reject: (value?: unknown): Mock => jest.fn().mockRejectedValue(value),
  req: {
    withId: (id: Id): Req => new Req({ id }),
    withQ: (q: unknown): Req => new Req({ q }),
    with: (a: any): Req => new Req(a)
  },
  resolve: (value?: unknown): Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): Mock => jest.fn().mockReturnValue(value),
  this: (): Mock => jest.fn().mockReturnThis(),
};

