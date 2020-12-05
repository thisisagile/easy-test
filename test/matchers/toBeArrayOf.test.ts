import { toBeArrayOf } from '../../src';

class Dev {}

class Manager {}

const devs = [new Dev(), new Dev()];
const mixed = [new Dev(), new Manager()];

describe('toBeValid', () => {
  test('fails', () => {
    expect(toBeArrayOf(undefined, Manager)).toFailWith('Subject is undefined.');
    expect(toBeArrayOf(new Manager(), Manager)).toFailWith('Subject is not an array.');
    expect(toBeArrayOf(devs, Manager)).toFailWith("Not all elements are of type 'Manager'.");
    expect(toBeArrayOf(mixed, Manager)).toFailWith("Not all elements are of type 'Manager'.");
  });

  test('passes', () => {
    expect(toBeArrayOf(devs, Dev)).toPassWith("All elements in array are of type 'Dev', which we did not expect.");
  });
});
