export type HttpStatus = { name: string; id: number };

export type Response = { status: HttpStatus; headers?: { [key: string]: any } };
