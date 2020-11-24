import { mock } from '../../src/mock';

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

  test('requests works', () => {
    const { req, res } = mock.requests();
    expect(req).toBeDefined();
    expect(req.params).toBeDefined();
    expect(req.query).toBeDefined();
    expect(res.json).toBeDefined();
    expect(res.json()).toBe(res);
    expect(res.status).toBeDefined();
    expect(res.status()).toBe(res);
    expect(res.end).toBeDefined();
    expect(res.end()).toBe(res);
    expect(res.set).toBeDefined();
    expect(res.set()).toBe(res);
    expect(res.type).toBeDefined();
    expect(res.type()).toBe(res);
  });
});
