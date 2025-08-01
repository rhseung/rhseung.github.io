import { useEffect, useRef, useState } from 'react';

import type { QueryClient } from '@tanstack/react-query';
import {
  Outlet,
  createRootRouteWithContext,
  useLocation,
} from '@tanstack/react-router';

import { Footer, Header } from '@/components';

interface MyRouterContext {
  queryClient: QueryClient;
}

const RootComponent: React.FC = () => {
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const observer = new ResizeObserver(() => {
      setHeaderHeight(headerEl.offsetHeight);
    });

    observer.observe(headerEl);
    return () => observer.disconnect();
  }, []);

  const applyHeaderHeight = location.pathname !== '/' ? headerHeight : 0;
  // TODO: paddingTop이 제대로 적용안되는건가?? 확인해보기

  return (
    <>
      <Header ref={headerRef} />
      <div style={{ paddingTop: applyHeaderHeight }}>
        <Outlet />
      </div>
      <Footer />
      {/* <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" /> */}
    </>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});
