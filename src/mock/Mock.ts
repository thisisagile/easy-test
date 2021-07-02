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
    data: (...items: any[]): { execute: Mock } => ({
      execute: jest.fn().mockResolvedValue({
        body: {
          data: {
            itemCount: items.length,
            items,
          },
        },
      }),
    }),
  },
  empty: <T = any>(props: any = {}): T => props as unknown as T,
  date: (epoch = 1621347575): Date => {
    const date = new Date(epoch);
    date.toString = mock.return('Mon Jan 19 1970 19:22:27 GMT+0100 (Central European Standard Time)');
    date.toLocaleDateString = mock.return('19/01/1970');
    date.toDateString = mock.return('19/01/1970');
    return date;
  },
  once: (...values: unknown[]): Mock => values.reduce((m: Mock, v: unknown) => m.mockImplementationOnce(() => v), jest.fn()),
};
