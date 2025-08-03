import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

interface MyRouterContext {
  queryClient: QueryClient;
}

const RootComponent: React.FC = () => {
  return (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" /> */}
    </>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});
