import { toMatchRoute } from '../../src';

const uri = { route: '/devs', complete: '$host/$resource/devs', toString: () => '$host/$resource/devs' };

describe('toMatchRoute', () => {
  test('fails', () => {
    expect(toMatchRoute(undefined)).toFailWith('Subject is undefined.');
    expect(toMatchRoute(uri)).toFailWith('Route to include is undefined.');
    expect(toMatchRoute(uri, '/managers')).toFailWith(`Uri '${uri.toString()}' does not include '/managers'.`);
  });

  test('passes', () => {
    expect(toMatchRoute(uri, '/devs')).toPassWith(`Uri '${uri.toString()}' includes '/devs'.`);
    expect(toMatchRoute(uri, uri)).toPassWith(`Uri '${uri.toString()}' includes '${uri.toString()}'.`);
  });
});
