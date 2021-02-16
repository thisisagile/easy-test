import {
  toBeBadRequest,
  toBeCreated,
  toBeForbidden,
  toBeNotFound,
  toBeOk,
  toBeUnauthorized,
  toBeConflict,
  toHaveNoContent,
  toHaveStatus,
  toBeBadGateway,
  toBeInternalServerError,
} from '../../src';
import { Response } from '../../src/utils/Response';

const response = (code: number): Response => ({ status: { name: '', id: code } });

describe('HttpMatchers', () => {
  test('toHaveStatus passes', () => {
    expect(toHaveStatus(response(200), 200)).toPassWith("Response does have status code '200'.");
    expect(toHaveStatus(response(400), 400)).toPassWith("Response does have status code '400'.");
  });

  test('toHaveStatus fails', () => {
    expect(toHaveStatus(undefined, 200)).toFailWith('Response is unknown.');
    expect(toHaveStatus(response(200), 300)).toFailWith("Response does not have code '300', but has code '200' instead.");
    expect(toHaveStatus(response(400), 500)).toFailWith("Response does not have code '500', but has code '400' instead.");
  });

  test('toBeOk', () => {
    expect(toBeOk(response(200))).toPass();
    expect(toBeOk(response(666))).toFail();
  });

  test('toBeBadRequest', () => {
    expect(toBeBadRequest(response(400))).toPass();
    expect(toBeBadRequest(response(666))).toFail();
  });

  test('toBeCreated', () => {
    expect(toBeCreated(response(201))).toPass();
    expect(toBeCreated(response(666))).toFail();
  });

  test('toHaveNoContent', () => {
    expect(toHaveNoContent(response(204))).toPass();
    expect(toHaveNoContent(response(666))).toFail();
  });

  test('toBeUnauthorized', () => {
    expect(toBeUnauthorized(response(401))).toPass();
    expect(toBeUnauthorized(response(666))).toFail();
  });

  test('toBeForbidden', () => {
    expect(toBeForbidden(response(403))).toPass();
    expect(toBeForbidden(response(666))).toFail();
  });

  test('toBeNotFound', () => {
    expect(toBeNotFound(response(404))).toPass();
    expect(toBeNotFound(response(666))).toFail();
  });

  test('toBeConflict', () => {
    expect(toBeConflict(response(409))).toPass();
    expect(toBeConflict(response(666))).toFail();
  });

  test('toBeInternalServerError', () => {
    expect(toBeInternalServerError(response(500))).toPass();
    expect(toBeInternalServerError(response(666))).toFail();
  });

  test('toBeBadGateway', () => {
    expect(toBeBadGateway(response(502))).toPass();
    expect(toBeBadGateway(response(666))).toFail();
  });
});
