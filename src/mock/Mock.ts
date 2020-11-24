import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;
import SpyInstance = jest.SpyInstance;
import Mock = jest.Mock;

const mockResponse = (): any =>
  (({
    json: mock.this(),
    status: mock.this(),
    end: mock.this(),
    set: mock.this(),
    type: mock.this(),
  } as unknown) as Response);

const mockRequest = (params: any = {}, query: any = {}): any => (({ params, query } as unknown) as Request);

const mockProperty = <T, P extends NonFunctionPropertyNames<Required<T>>>(object: T, getter: P, value: T[P]): SpyInstance =>
  jest.spyOn(object, getter, 'get').mockReturnValue(value);

export const mock = {
  impl: (f?: (...args: any[]) => any): Mock => jest.fn().mockImplementation(f),
  property: mockProperty,
  reject: (value?: unknown): Mock => jest.fn().mockRejectedValue(value),
  requests: (params: any = {}, query: any = {}): { req: Request; res: Response } => ({ req: mockRequest(params, query), res: mockResponse() }),
  resolve: (value?: unknown): Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): Mock => jest.fn().mockReturnValue(value),
  this: (): Mock => jest.fn().mockReturnThis(),
};
