import CustomMatcherResult = jest.CustomMatcherResult;
import { match, Uri } from '../utils';

export const toMatchRoute = (uri?: unknown, route?: string): CustomMatcherResult =>
  match<Uri>(uri as Uri)
    .undefined(u => u, 'Subject is undefined.')
    .undefined(() => route, 'Route to include is undefined.')
    .undefined(u => u.complete, 'Subject is not a valid uri.')
    .not(
      u => u.complete.includes(route),
      u => `Uri '${u.complete}' does not include '${route}'.`
    )
    .else(u => `Uri '${u.complete}' includes '${route}'.`);

expect.extend({
  toHaveRoute: toMatchRoute,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toMatchRoute(route: string): R;
    }
  }
}
