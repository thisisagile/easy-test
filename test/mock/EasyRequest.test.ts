import { req } from '../../src';
import { fits } from '../../dist';

describe('EasyRequest', () => {

  test("id", () => {
    const r = req.id(42);
    expect(r).toMatchObject(fits.with({path: {id: 42}, id: 42}));
  });

  test("q", () => {
    const r = req.q(42);
    expect(r).toMatchObject(fits.with({query: {q: 42}, q: 42}));
  });

  test("path", () => {
    const r = req.path({ id: 42, name: "Jeroen" });
    expect(r).toMatchObject(fits.with({path: {id: 42, name: "Jeroen"}}));
  });

  test("query", () => {
    const r = req.query({ q: 42, name: "Jeroen" });
    expect(r).toMatchObject(fits.with({query: { q: 42, name: "Jeroen" }}));
  });
});
