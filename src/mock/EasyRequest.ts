type EasyRequest = { path?: any, id?: string | number, query?: any, q?: any, body?: any };

export const req = {
  id: (id: string | number): EasyRequest => req.all({ path: { id } }),
  q: (q: unknown): EasyRequest => req.all({ query: { q } }),
  path: (path: any): EasyRequest => req.all({ path }),
  query: (query: any): EasyRequest => req.all({ query }),
  all: ({ path = {}, query = {}, body = {} }: {path?: any, query?: any, body?: any}): EasyRequest => ({ path, id: path.id, query, q: query.q, body }),
};
