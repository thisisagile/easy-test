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
    expect(toHaveStatus(response(200), 200)).toPassMatcherWith("Response does have status code '200'.");
    expect(toHaveStatus(response(400), 400)).toPassMatcherWith("Response does have status code '400'.");
  });

  test('toHaveStatus fails', () => {
    expect(toHaveStatus(response(200), 300)).toFailMatcherWith("Response does not have code '300', but has code '200' instead.");
    expect(toHaveStatus(response(400), 500)).toFailMatcherWith("Response does not have code '500', but has code '400' instead.");
  });

  test('toBeOk', () => {
    expect(toBeOk(response(200))).toPassMatcher();
    expect(toBeOk(response(666))).toFailMatcher();
  });

  test('toBeBadRequest', () => {
    expect(toBeBadRequest(response(400))).toPassMatcher();
    expect(toBeBadRequest(response(666))).toFailMatcher();
  });

  test('toBeCreated', () => {
    expect(toBeCreated(response(201))).toPassMatcher();
    expect(toBeCreated(response(666))).toFailMatcher();
  });

  test('toHaveNoContent', () => {
    expect(toHaveNoContent(response(204))).toPassMatcher();
    expect(toHaveNoContent(response(666))).toFailMatcher();
  });

  test('toBeUnauthorized', () => {
    expect(toBeUnauthorized(response(401))).toPassMatcher();
    expect(toBeUnauthorized(response(666))).toFailMatcher();
  });

  test('toBeForbidden', () => {
    expect(toBeForbidden(response(403))).toPassMatcher();
    expect(toBeForbidden(response(666))).toFailMatcher();
  });

  test('toBeNotFound', () => {
    expect(toBeNotFound(response(404))).toPassMatcher();
    expect(toBeNotFound(response(666))).toFailMatcher();
  });

  test('toBeConflict', () => {
    expect(toBeConflict(response(409))).toPassMatcher();
    expect(toBeConflict(response(666))).toFailMatcher();
  });

  test('toBeInternalServerError', () => {
    expect(toBeInternalServerError(response(500))).toPassMatcher();
    expect(toBeInternalServerError(response(666))).toFailMatcher();
  });

  test('toBeBadGateway', () => {
    expect(toBeBadGateway(response(502))).toPassMatcher();
    expect(toBeBadGateway(response(666))).toFailMatcher();
  });
});
