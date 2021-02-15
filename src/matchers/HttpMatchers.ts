import CustomMatcherResult = jest.CustomMatcherResult;
import { Response } from '../utils/Response';
import { match } from './Match';

export const toHaveStatus = (res: Response, code: number): CustomMatcherResult =>
  match<Response>(res)
    .undefined(r => r, 'Response is unknown.')
    .undefined(
      r => r?.status?.status,
      () => 'Response does not have a status code'
    )
    .not(
      r => r.status.status === code,
      r => `Response does not have code '${code}', but has code '${r.status.status}' instead.`
    )
    .else(`Response does have status code '${code}'.`);

export const toBeOk = (res: Response): CustomMatcherResult => toHaveStatus(res, 200);

export const toBeCreated = (res: Response): CustomMatcherResult => toHaveStatus(res, 201);

export const toHaveNoContent = (res: Response): CustomMatcherResult => toHaveStatus(res, 204);

export const toBeBadRequest = (res: Response): CustomMatcherResult => toHaveStatus(res, 400);

export const toBeUnauthorized = (res: Response): CustomMatcherResult => toHaveStatus(res, 401);

export const toBeForbidden = (res: Response): CustomMatcherResult => toHaveStatus(res, 403);

export const toBeNotFound = (res: Response): CustomMatcherResult => toHaveStatus(res, 404);

export const toHaveConflict = (res: Response): CustomMatcherResult => toHaveStatus(res, 409);

export const toHaveInternalError = (res: Response): CustomMatcherResult => toHaveStatus(res, 500);

expect.extend({
  toBeOk,
  toBeCreated,
  toHaveNoContent,
  toBeNotFound,
  toBeBadRequest,
  toBeUnauthorized,
  toBeForbidden,
  toHaveConflict,
  toHaveInternalError,
  toHaveStatus,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toBeOk(): R;
      toBeCreated(): R;
      toHaveNoContent(): R;
      toBeNotFound(): R;
      toBeUnauthorized(): R;
      toBeForbidden(): R;
      toBeBadRequest(): R;
      toHaveConflict(): R;
      toHaveInternalError(): R;
      toHaveStatus(code: number): R;
    }
  }
}
