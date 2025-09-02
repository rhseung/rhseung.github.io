import { type PropsWithChildren, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<
  PropsWithChildren<{ disableHeaderHeight?: boolean; className?: string }>
> = ({ children, disableHeaderHeight, className }) => {
  const headerRef = useRef<HTMLElementTagNameMap['header']>(null);
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

  return (
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-950">
      <Header ref={headerRef} />
      <main
        style={{ paddingTop: disableHeaderHeight ? 0 : headerHeight }}
        className={cn('px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto', className)}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
