import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

import '@/styles.css';

import { NotFoundPage } from './pages/fallback';
import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: () => <NotFoundPage />,
  defaultViewTransition: {
    types: ({ fromLocation, toLocation, hrefChanged }) => {
      // 시작 페이지이거나, 경로와 쿼리 등이 모두 동일한 (=새로고침)의 경우
      if (!fromLocation || !hrefChanged) return ['reload'];

      // 경로는 동일하지만 쿼리 등이 변경된 경우
      if (fromLocation.pathname === toLocation.pathname) return ['reload'];

      const fromIndex = fromLocation.state.__TSR_index;
      const toIndex = toLocation.state.__TSR_index;

      return [fromIndex > toIndex ? 'backwards' : 'forwards'];
    },
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
