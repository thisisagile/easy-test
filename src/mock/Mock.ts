import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;
import SpyInstance = jest.SpyInstance;
import Mock = jest.Mock;
import { Id, Json } from '../utils/Types';
import { Req } from '../utils/Req';

const mockProperty = <T, P extends NonFunctionPropertyNames<Required<T>>>(object: T, getter: P, value: T[P]): SpyInstance =>
  jest.spyOn(object, getter, 'get').mockReturnValue(value);

export const mock = {
  clear: jest.clearAllMocks(),
  impl: (f?: (...args: any[]) => any): Mock => jest.fn().mockImplementation(f),
  property: mockProperty,
  reject: (value?: unknown): Mock => jest.fn().mockRejectedValue(value),
  req: {
    id: (id: Id): Req => new Req({ id }),
    q: (q: unknown): Req => new Req({ q }),
    with: (a: Json): Req => new Req(a),
    body: (body: unknown): Req => new Req({ body }),
    path: (path: Json): Req => new Req({ path }),
    query: (query: Json): Req => new Req({ query }),
  },
  resolve: (value?: unknown): Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): Mock => jest.fn().mockReturnValue(value),
  this: (): Mock => jest.fn().mockReturnThis(),
  provider: {
    data: (...items: any[]): { execute: Mock } => ({ execute: jest.fn().mockResolvedValue({ body: { data: { itemCount: items.length, items } } }) }),
  },
  empty: <T>(props: any = {}): T => (props as unknown) as T,
};
