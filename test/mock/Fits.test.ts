import { fits } from '../../src/mock';

class Dev {
  constructor(readonly name: string) {};
}

class Manager {}

describe("match", () => {

  test("any", () => {
    expect({}).toMatchObject(fits.any());
  })

  test("type", () => {
    expect(new Dev("Kim")).toMatchObject(fits.type(Dev));
    expect(new Dev("Kim")).not.toMatchObject(fits.type(Manager));
  })

  test("with", () => {
    expect({first: "Sander", last: "Hoogendoorn"}).toMatchObject(fits.atLeast({first: "Sander"}));
    expect({first: "Sander", last: "Hoogendoorn"}).not.toMatchObject(fits.atLeast({first: "Jeroen"}));
  })

  test("with toBe", () => {
    expect({first: "Sander", last: "Hoogendoorn"}).toEqual(fits.atLeast({first: "Sander"}));
    expect({first: "Sander", last: "Hoogendoorn"}).not.toEqual(fits.atLeast({first: "Jeroen"}));
  })
});
