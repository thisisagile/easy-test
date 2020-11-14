import CustomMatcherResult = jest.CustomMatcherResult;
import { match, Uri } from '../utils';

export const toMatchRoute = (uri?: unknown, route?: string): CustomMatcherResult =>
  match<Uri>(uri as Uri)
    .undefined(u => u, 'Subject is undefined.')
    .undefined(() => route, 'Route to include is undefined.')
    .undefined(u => u.route, 'Subject is not a valid uri.')
    .not(
      u => u.toString().includes(route),
      u => `Uri '${u.toString()}' does not include '${route}'.`
    )
    .else(u => `Uri '${u.toString()}' includes '${route}'.`);

expect.extend({
  toMatchRoute: toMatchRoute,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toMatchRoute(route?: string): R;
    }
  }
}
