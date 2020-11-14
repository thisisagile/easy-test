export const mock = {
  resolve: (value?: unknown): jest.Mock => jest.fn().mockResolvedValue(value),
  return: (value?: unknown): jest.Mock => jest.fn().mockReturnValue(value),
  reject: (value?: unknown): jest.Mock => jest.fn().mockRejectedValue(value),
  impl: (f?: (...args: any[]) => any): jest.Mock => jest.fn().mockImplementation(f),
};
