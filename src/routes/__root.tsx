import { Footer, Header } from "@/components";
import { primitiveTheme } from "@/styles";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Outlet,
  createRootRouteWithContext,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect, useRef, useState } from "react";

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

  const applyHeaderHeight = location.pathname !== "/" ? headerHeight : 0;

  return (
    <>
      <div className={primitiveTheme}>
        <Header ref={headerRef} />
        <div style={{ paddingTop: applyHeaderHeight }}>
          <Outlet />
        </div>
        <Footer />
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});
