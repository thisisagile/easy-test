import { Id, Json, JsonValue } from './Types';

export class Req {
  constructor(readonly state: any = {}) {}

  get id(): Id {
    return this.state.id ?? this.path.id;
  }

  get q(): JsonValue {
    return this.state.q ?? this.query.q;
  }

  get path(): Json {
    return this.state?.path ?? {};
  }

  get query(): Json {
    return this.state?.query ?? {};
  }

  get body(): unknown {
    return this.state.body;
  }

  get = (key: unknown): any => this.state[key.toString()] ?? this.path[key.toString()] ?? this.query[key.toString()];
}
