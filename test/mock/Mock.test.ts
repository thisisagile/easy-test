import { mock } from '../../src/mock';

describe('Mock', () => {

  class Project {
    get name() { return 'DevOps'; }
    version = (n: number): string => `Version ${n}`;
    fails = (no = true): Promise<string> => no ? Promise.resolve('Project succeeds') : Promise.reject('Project fails');
  }

  let project: Project;

  beforeEach(() => {
    project = new Project();
  });

  test('return works', () => {
    project.version = mock.return('Version 42');
    expect(project.version(3)).toBe('Version 42');
  });

  test('resolve works', () => {
    project.fails = mock.resolve('Version 42');
    expect(project.fails(false)).resolves.toBe('Version 42');
  });

  test('reject works', () => {
    project.fails = mock.reject('Version 42');
    expect(project.fails(false)).rejects.toBe('Version 42');
  });

  test('get works', () => {
    mock.get(project, 'name', 'Version 42');
    expect(project.name).toBe('Version 42');
  });

  test('impl works', () => {
    project.version = mock.impl((n: number) => `Beta ${n}`);
    expect(project.version(42)).toBe('Beta 42');
  });
});
