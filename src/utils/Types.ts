import { isFunction } from './Utils';

export type Message<Param = unknown> = string | ((...params: Param[]) => string);

export const ofMessage = <Param>(g: Message<Param>, ...params: Param[]): string => isFunction(g) ? g(...params) : g;

export type Result = { domain?: string; location?: string; message: string; }

export type Results = { results: Result[] }

export type Validatable = { isValid: boolean; }

export const passes = "Passes.";
