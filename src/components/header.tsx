import React, { forwardRef, useEffect, useRef, useState } from 'react';

import {
  IconCertificate,
  IconHome,
  IconLayoutList,
  IconLink,
  IconMenu2,
  IconNotebook,
} from '@tabler/icons-react';
import { useLocation, useNavigate } from '@tanstack/react-router';

import Logo from '@/assets/logo.svg?react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ThemeSwitch,
} from '@/components';
import { cn } from '@/utils/cn';

interface MenuItem {
  icon: React.ReactNode;
  coloredIcon: React.ReactNode;
  label: string;
  href: string;
  background: string;
}

const menus: MenuItem[] = [
  {
    icon: <IconHome />,
    coloredIcon: <IconHome className="text-nav-blue-solid" />,
    label: '홈',
    href: '/',
    background: cn('bg-radial from-nav-blue-0 via-nav-blue-1 to-nav-blue-2'),
  },
  {
    icon: <IconLayoutList />,
    coloredIcon: <IconLayoutList className="text-nav-violet-solid" />,
    label: '프로젝트',
    href: '/project',
    background: cn(
      'bg-radial from-nav-violet-0 via-nav-violet-1 to-nav-violet-2',
    ),
  },
  {
    icon: <IconCertificate />,
    coloredIcon: <IconCertificate className="text-nav-orange-solid" />,
    label: '이력',
    href: '/career',
    background: cn(
      'bg-radial from-nav-orange-0 via-nav-orange-1 to-nav-orange-2',
    ),
  },
  {
    icon: <IconLink />,
    coloredIcon: <IconLink className="text-nav-green-solid" />,
    label: '링크',
    href: '/link',
    background: cn('bg-radial from-nav-green-0 via-nav-green-1 to-nav-green-2'),
  },
  {
    icon: <IconNotebook />,
    coloredIcon: <IconNotebook className="text-nav-red-solid" />,
    label: '블로그',
    href: '/blog',
    background: cn('bg-radial from-nav-red-0 via-nav-red-1 to-nav-red-2'),
  },
];

export const Header = forwardRef<
  HTMLElementTagNameMap['header'],
  React.HTMLAttributes<HTMLElementTagNameMap['header']>
>(({}, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const headerRef = useRef<HTMLElementTagNameMap['header']>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = headerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const obs = new ResizeObserver(() => setHeaderHeight(el.offsetHeight));
    obs.observe(el);
    setHeaderHeight(el.offsetHeight);
    return () => obs.disconnect();
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(y <= 0);
    };

    const onMouseMove = (e: MouseEvent) => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(e.clientY <= headerHeight || y <= 0);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('scroll', onScroll as any);
      window.removeEventListener('mousemove', onMouseMove as any);
    };
  }, [headerHeight]);

  const handleNavigate = async (to: string) => {
    await navigate({ to });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navBase = cn(
    'group relative isolate z-0 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer rounded-md px-4 py-2 leading-none transition-colors duration-150',
  );
  const navActive = cn('text-neutral-900 dark:text-neutral-50');
  const navInactive = cn(
    'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50',
  );
  const dropdownBase = cn('group flex items-center gap-2');
  const dropdownActive = cn('text-neutral-900 dark:text-neutral-50');
  const dropdownInactive = cn(
    'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50',
  );

  return (
    <header
      ref={(node) => {
        headerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref && 'current' in ref) ref.current = node;
      }}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8 py-1.5 sm:py-3 bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md transition-transform duration-300 overflow-hidden will-change-transform',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex w-full items-center justify-between gap-6 sm:gap-10">
          <div className="flex items-center">
            <Logo width={90} className="hidden sm:block" />
            <Logo width={70} className="sm:hidden" />
          </div>
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-10">
            {menus.map((m) => {
              const isActive = currentPath === m.href;
              return (
                <span
                  key={m.href}
                  onClick={() => handleNavigate(m.href)}
                  className={cn(navBase, isActive ? navActive : navInactive)}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100',
                      m.background,
                    )}
                  />
                  <span className="relative inline-flex items-center shrink-0 w-5 h-5">
                    <span className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
                      {m.icon}
                    </span>
                    <span
                      className={cn(
                        'absolute inset-0 flex items-center justify-center transition-opacity duration-150',
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100',
                      )}
                    >
                      {m.coloredIcon}
                    </span>
                  </span>
                  {m.label}
                </span>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <IconMenu2 size={16} className="sm:hidden" />
                    <IconMenu2 size={20} className="hidden sm:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {menus.map((m) => {
                    const isActive = currentPath === m.href;
                    return (
                      <DropdownMenuItem
                        key={m.href}
                        onClick={() => handleNavigate(m.href)}
                        className={cn(
                          dropdownBase,
                          isActive ? dropdownActive : dropdownInactive,
                        )}
                      >
                        <span className="relative inline-flex items-center shrink-0 w-5 h-5">
                          <span className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
                            {m.icon}
                          </span>
                          <span
                            className={cn(
                              'absolute inset-0 flex items-center justify-center transition-opacity duration-150',
                              isActive
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100',
                            )}
                          >
                            {m.coloredIcon}
                          </span>
                        </span>
                        {m.label}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
});
