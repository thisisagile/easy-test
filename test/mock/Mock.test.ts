import { mock } from '../../src';

describe('mock', () => {
  const version = 'Version 42';

  class Project {
    get name() {
      return 'DevOps';
    }
    version = (n: number): string => `Version ${n}`;
    fails = (no = true): Promise<string> => (no ? Promise.resolve('Project succeeds') : Promise.reject('Project fails'));
  }

  let project: Project;

  beforeEach(() => {
    project = new Project();
  });

  test('return works', () => {
    project.version = mock.return(version);
    expect(project.version(3)).toBe(version);
  });

  test('resolve works', () => {
    project.fails = mock.resolve(version);
    return expect(project.fails(false)).resolves.toBe(version);
  });

  test('reject works', () => {
    project.fails = mock.reject(version);
    return expect(project.fails(false)).rejects.toBe(version);
  });

  test('get works', () => {
    mock.property(project, 'name', version);
    expect(project.name).toBe(version);
  });

  test('impl works', () => {
    project.version = mock.impl((n: number) => `Beta ${n}`);
    expect(project.version(42)).toBe('Beta 42');
  });

  test('req id works', () => {
    const req = mock.req.id(42);
    expect(req.id).toBe(42);
  });

  test('req q works', () => {
    const req = mock.req.q('sander');
    expect(req.q).toBe('sander');
  });

  test('req from works', () => {
    const req = mock.req.with({ path: { id: 42, domain: 'dev' }, query: { q: 'jeroen' } });
    expect(req.id).toBe(42);
    expect(req.q).toBe('jeroen');
    expect(req.get('domain')).toBe('dev');
  });

  test('get props from state', () => {
    const req = mock.req.with({ name: 'sander' });
    expect(req.get('name')).toBe('sander');
    expect(req.get('last')).toBeUndefined();
  });

  test('get props from path', () => {
    const req = mock.req.path({ name: 'sander' });
    expect(req.get('name')).toBe('sander');
    expect(req.get('last')).toBeUndefined();
  });

  test('get props from query', () => {
    const req = mock.req.query({ name: 'sander' });
    expect(req.get('name')).toBe('sander');
    expect(req.get('last')).toBeUndefined();
  });
});
