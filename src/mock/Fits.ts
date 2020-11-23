export const fits = {
  any: expect.anything(),
  type: (type?: any) => expect.any(type),
  atLeast: (o: any): any => expect.objectContaining(o)
}
