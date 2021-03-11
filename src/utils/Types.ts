import { isFunction } from './Utils';

export type Constructor<T> = { new (...args: any[]): T };

export type Message<Param extends unknown> = string | ((...params: Param[]) => string);

export const toMessage = <Param>(g: Message<Param>, ...params: Param[]): string => (isFunction(g) ? g(...params) : g);

export type Validatable = { isValid: boolean };

export type Result = { domain?: string; location?: string; message: string };

export type Results = Validatable & { results: Result[] };

export type Uri = { route: string; complete: string };

export type Id = string | number;

export type JsonValue = string | number | boolean | null | Json | JsonValue[];
export type Json = { [key: string]: JsonValue };

export type Exception = { id: Id; reason?: string };
