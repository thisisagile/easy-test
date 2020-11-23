export const fits = {
  any: (): any => expect.anything(),
  type: (type?: unknown): any => expect.any(type),
  atLeast: (o: unknown): any => expect.objectContaining(o)
}
