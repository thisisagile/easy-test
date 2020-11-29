import CustomMatcherResult = jest.CustomMatcherResult;
import { match, Uri } from '../utils';

export const toMatchRoute = (uri?: Uri, route?: Uri | string): CustomMatcherResult =>
  match<Uri>(uri)
    .undefined(u => u, 'Subject is undefined.')
    .undefined(() => route, 'Route to include is undefined.')
    .not(
      u => u.toString().includes(route.toString()),
      u => `Uri '${u.toString()}' does not include '${route.toString()}'.`,
    )
    .else(u => `Uri '${u.toString()}' includes '${route.toString()}'.`);

expect.extend({
  toMatchRoute: toMatchRoute,
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T> {
      toMatchRoute(route?: Uri | string): R;
    }
  }
}
