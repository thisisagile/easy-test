import { eq } from '../../src/utils/Eq';

describe('eq.string', () => {
  test('string false', () => {
    expect(eq('').string).toBeFalsy();
    expect(eq('', 'Sander').string).toBeFalsy();
    expect(eq('Jeroen', 'Sander').string).toBeFalsy();
    expect(eq({}, 'Sander').string).toBeFalsy();
    expect(eq(3, 'Sander').string).toBeFalsy();
    expect(eq(3, 5).string).toBeFalsy();
  });

  test('string true', () => {
    expect(eq().string).toBeTruthy();
    expect(eq(3, 3).string).toBeTruthy();
    expect(eq(3, '3').string).toBeTruthy();
    expect(eq('Sander', 'Sander').string).toBeTruthy();
    // Don't use string for objects :)
    expect(eq({}, { id: 3 }).string).toBeTruthy();
  });
});

describe('eq.sub', () => {
  test('sub false', () => {
    expect(eq('').subset).toBeFalsy();
    expect(eq('', 'Sander').subset).toBeFalsy();
    expect(eq('Jeroen', 'Sander').subset).toBeFalsy();
    expect(eq({}, 'Sander').subset).toBeFalsy();
    expect(eq(3, 'Sander').subset).toBeFalsy();
    expect(eq(3, 5).subset).toBeFalsy();
    expect(eq(3, '3').subset).toBeFalsy();
    expect(eq({}, { id: 3 }).subset).toBeFalsy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3, name: 'Wouter' }).subset).toBeFalsy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { first: 'Wouter', last: 'Lamarti' },
        }
      ).subset
    ).toBeFalsy();
  });

  test('sub true', () => {
    expect(eq().subset).toBeTruthy();
    expect(eq(3, 3).subset).toBeTruthy();
    expect(eq('Sander', 'Sander').subset).toBeTruthy();
    expect(eq({ id: 3 }, { id: 3 }).subset).toBeTruthy();
    expect(eq({ id: 3, name: 'Naoufal' }, {}).subset).toBeTruthy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3 }).subset).toBeTruthy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3, name: 'Naoufal' }).subset).toBeTruthy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { last: 'Lamarti' },
        }
      ).subset
    ).toBeTruthy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { first: 'Naoufal', last: 'Lamarti' },
        }
      ).subset
    ).toBeTruthy();
  });
});

describe('eq.full', () => {
  test('full false', () => {
    expect(eq('').exact).toBeFalsy();
    expect(eq('', 'Sander').exact).toBeFalsy();
    expect(eq('Jeroen', 'Sander').exact).toBeFalsy();
    expect(eq({}, 'Sander').exact).toBeFalsy();
    expect(eq(3, 'Sander').exact).toBeFalsy();
    expect(eq(3, 5).exact).toBeFalsy();
    expect(eq(3, '3').exact).toBeFalsy();
    expect(eq({}, { id: 3 }).exact).toBeFalsy();
    expect(eq({ id: 3, name: 'Naoufal' }, {}).exact).toBeFalsy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3 }).exact).toBeFalsy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3, name: 'Wouter' }).exact).toBeFalsy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { last: 'Lamarti' },
        }
      ).exact
    ).toBeFalsy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { first: 'Wouter', last: 'Lamarti' },
        }
      ).exact
    ).toBeFalsy();
  });

  test('full true', () => {
    expect(eq().exact).toBeTruthy();
    expect(eq(3, 3).exact).toBeTruthy();
    expect(eq('Sander', 'Sander').exact).toBeTruthy();
    expect(eq({ id: 3 }, { id: 3 }).exact).toBeTruthy();
    expect(eq({ id: 3, name: 'Naoufal' }, { id: 3, name: 'Naoufal' }).exact).toBeTruthy();
    expect(
      eq(
        { id: 3, name: { first: 'Naoufal', last: 'Lamarti' } },
        {
          id: 3,
          name: { first: 'Naoufal', last: 'Lamarti' },
        }
      ).exact
    ).toBeTruthy();
  });
});
