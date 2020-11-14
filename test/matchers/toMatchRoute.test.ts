import { toMatchRoute } from '../../src/matchers';

const uri = { route: '/devs', complete: '$host/$resource/devs', toString: () => '$host/$resource/devs' };

describe('toMatchRoute', () => {
  test('fails', () => {
    expect(toMatchRoute(undefined)).toFailWith('Subject is undefined.');
    expect(toMatchRoute(uri)).toFailWith('Route to include is undefined.');
    expect(toMatchRoute({}, '')).toFailWith('Subject is not a valid uri.');
    expect(toMatchRoute(uri, '/managers')).toFailWith(`Uri '${uri.complete}' does not include '/managers'.`);
  });

  test('passes', () => {
    expect(toMatchRoute(uri, '/devs')).toPassWith(`Uri '${uri.complete}' includes '/devs'.`);
  });
});
