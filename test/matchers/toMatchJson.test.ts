import { MatchesJson, toMatchJson } from '../../src';

describe('toMatchJson', () => {
  class Dev {
    constructor(readonly name: string) {}
  }

  const json = { name: 'Sander', id: 3 };
  const dev = new Dev('Sander');
  const devWrong = new Dev('Wouter');

  test('fails', () => {
    expect(toMatchJson()).toFailMatcherWith(MatchesJson.SubjectUndefined);
    expect(toMatchJson(json)).toFailMatcherWith(MatchesJson.SubsetUndefined);
    expect(toMatchJson(json, 'Hi')).toFailMatcherWith(MatchesJson.DoesNotMatch);
    expect(toMatchJson(json, devWrong)).toFailMatcherWith(MatchesJson.DoesNotMatch);
    expect(toMatchJson(dev, json)).toFailMatcherWith(MatchesJson.DoesNotMatch);
  });

  test('passes', () => {
    expect(toMatchJson(json, {})).toPassMatcherWith(MatchesJson.Yes);
    expect(toMatchJson(json, json)).toPassMatcherWith(MatchesJson.Yes);
    expect(toMatchJson(json, dev)).toPassMatcherWith(MatchesJson.Yes);
  });
});
