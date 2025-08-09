import { type PropsWithChildren, useEffect, useRef, useState } from 'react';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<
  PropsWithChildren<{ disableHeaderHeight?: boolean }>
> = ({ children, disableHeaderHeight }) => {
  const headerRef = useRef<HTMLElementTagNameMap['header']>(null);
  const [headerHeight, setHeaderHeight] = useState(93);

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
    <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-925">
      <Header ref={headerRef} />
      <main style={{ paddingTop: disableHeaderHeight ? 0 : headerHeight }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
