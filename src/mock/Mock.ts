import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;

export const mock = {
  get: <T extends {}, P extends NonFunctionPropertyNames<Required<T>>>(object: T, getter: P, value: any) =>
    jest.spyOn(object, getter, "get").mockReturnValue(value),
  impl: (f?: (...args: any[]) => any): jest.Mock => jest.fn().mockImplementation(f),
  reject: (value?: unknown): jest.Mock => jest.fn().mockRejectedValue(value),
  resolve: (value?: unknown): jest.Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): jest.Mock => jest.fn().mockReturnValue(value),
  this: () => jest.fn().mockReturnThis()
};

