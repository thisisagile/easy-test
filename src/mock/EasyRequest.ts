import { Id, Json, JsonValue } from '../utils/Types';

type EasyRequest = { path?: Json; id?: Id; query?: Json; q?: JsonValue; body?: Json };

export const req = {
  id: (id: Id): EasyRequest => req.all({ path: { id } }),
  q: (q: JsonValue): EasyRequest => req.all({ query: { q } }),
  path: (path: Json): EasyRequest => req.all({ path }),
  query: (query: Json): EasyRequest => req.all({ query }),
  all: ({ path = {}, query = {}, body = {} }: { path?: Json; query?: any; body?: Json }): EasyRequest => ({ path, id: path.id as Id, query, q: query.q, body }),
};
