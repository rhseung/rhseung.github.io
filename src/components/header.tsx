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

/**
 * Collapsible Header Hook
 * - 스크롤 다운 누적이 일정 임계치(=downThreshold) 이상이고 헤더 높이보다 충분히 내려오면 숨김
 * - 스크롤 업 누적(=upThreshold) 시 즉시 표시
 * - 상단 근접(=nearTopPx) 시 표시
 * - 포인터가 화면 상단(헤더 높이 + 8px) 이내로 오면 표시
 * - requestAnimationFrame으로 스로틀하여 자연스러운 애니메이션과 성능 보장
 */
function useCollapsibleHeader(opts: {
  headerHeight: number;
  upThreshold?: number;
  downThreshold?: number;
  nearTopPx?: number;
}) {
  const {
    headerHeight,
    upThreshold = 20,
    downThreshold = 20,
    nearTopPx = 4,
  } = opts;

  const [isVisible, setIsVisible] = useState(true);

  const lastYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);
  const upAccumRef = useRef<number>(0);
  const downAccumRef = useRef<number>(0);

  // 스크롤 방향 누적 관리
  const handleProgress = (currY: number) => {
    const lastY = lastYRef.current;
    const delta = currY - lastY;

    // 상단 근접 시 무조건 보이기
    if (currY <= Math.max(nearTopPx, 1)) {
      upAccumRef.current = 0;
      downAccumRef.current = 0;
      if (!isVisible) setIsVisible(true);
      return;
    }

    if (delta < 0) {
      // UP
      upAccumRef.current += -delta;
      downAccumRef.current = 0;

      if (upAccumRef.current >= upThreshold) {
        if (!isVisible) setIsVisible(true);
        upAccumRef.current = 0; // 트리거 후 리셋
      }
    } else if (delta > 0) {
      // DOWN
      downAccumRef.current += delta;
      upAccumRef.current = 0;

      // 충분히 내려왔고(헤더 높이 + 16px), 누적이 임계치 도달 시 숨김
      if (currY > headerHeight + 16 && downAccumRef.current >= downThreshold) {
        if (isVisible) setIsVisible(false);
        downAccumRef.current = 0;
      }
    }

    lastYRef.current = currY;
  };

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        handleProgress(window.scrollY);
      });
    };

    const onTouchMove = onScroll; // 모바일 제스처도 동일 처리

    // 포인터가 상단(헤더 높이 + 8px)이내로 오면 즉시 표시
    const onMouseMove = (e: MouseEvent) => {
      const proximity = headerHeight + 8;
      if (e.clientY <= proximity && !isVisible) {
        setIsVisible(true);
        // 방향 누적 리셋 (사용자 의지 반영)
        upAccumRef.current = 0;
        downAccumRef.current = 0;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mousemove', onMouseMove);
    };
    // headerHeight에 반응 (리사이즈 시 proximity/조건 업데이트)
  }, [headerHeight, isVisible]);

  return isVisible;
}

export const Header = forwardRef<
  HTMLElementTagNameMap['header'],
  React.HTMLAttributes<HTMLElementTagNameMap['header']>
>(({}, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const currentIdx = menus.findIndex((m) => m.href === currentPath);

  const headerRef = useRef<HTMLElementTagNameMap['header']>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const observer = new ResizeObserver(() => {
      setHeaderHeight(headerEl.offsetHeight);
    });

    setHeaderHeight(headerEl.offsetHeight);
    observer.observe(headerEl);
    return () => observer.disconnect();
  }, []);

  // 스크롤 상태 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // 초기값 설정
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = useCollapsibleHeader({
    headerHeight,
    upThreshold: 20, // 느린 스크롤에서도 잘 포착되도록 작은 임계치
    downThreshold: 24,
    nearTopPx: 4,
  });

  const handleNavigate = async (to: string) => {
    const toIdx = menus.findIndex((m) => m.href === to);

    if (currentIdx !== toIdx) {
      await navigate({
        to,
        viewTransition: {
          types: () => {
            if (!(0 <= currentIdx && currentIdx < menus.length))
              return ['reload'];
            else if (currentIdx > toIdx) return ['backwards'];
            else return ['forwards'];
          },
        },
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={(node) => {
        headerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref && 'current' in ref) ref.current = node;
      }}
      className={cn(
        'no-transition fixed top-4 left-4 right-4 z-50 mx-auto sm:py-1 bg-neutral-50/60 dark:bg-neutral-950/60 backdrop-blur-md transition-all duration-300 overflow-hidden will-change-transform rounded-xl max-w-[calc(theme(maxWidth.6xl)+3rem)]',
        isScrolled
          ? 'shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/30 border border-neutral-200/50 dark:border-neutral-800/50'
          : 'shadow-none border-transparent',
        isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]',
      )}
      // iOS 사파리에서 스크롤 중 레이어 프로모션 안정화
      style={{ WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="flex w-full items-center justify-between gap-6 sm:gap-10">
          <div className="flex items-center">
            <Logo width={90} className="hidden sm:block" />
            <Logo width={70} className="sm:hidden" />
          </div>

          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-10">
            {menus.map((m) => (
              <span
                key={m.href}
                onClick={() => handleNavigate(m.href)}
                className={cn(
                  'group relative isolate z-0 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer rounded-md px-4 py-2 leading-none transition-colors duration-150',
                  currentPath === m.href
                    ? 'text-neutral-900 dark:text-neutral-50'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50',
                )}
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
                      currentPath === m.href
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100',
                    )}
                  >
                    {m.coloredIcon}
                  </span>
                </span>
                {m.label}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeSwitch />
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                    aria-label="Open navigation menu"
                  >
                    <IconMenu2 size={16} className="sm:hidden" />
                    <IconMenu2 size={20} className="hidden sm:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {menus.map((m) => (
                    <DropdownMenuItem
                      key={m.href}
                      onClick={() => handleNavigate(m.href)}
                      className={cn(
                        'group flex items-center gap-2',
                        currentPath === m.href
                          ? 'text-neutral-900 dark:text-neutral-50'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50',
                      )}
                    >
                      <span className="relative inline-flex items-center shrink-0 w-5 h-5">
                        <span className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
                          {m.icon}
                        </span>
                        <span
                          className={cn(
                            'absolute inset-0 flex items-center justify-center transition-opacity duration-150',
                            currentPath === m.href
                              ? 'opacity-100'
                              : 'opacity-0 group-hover:opacity-100',
                          )}
                        >
                          {m.coloredIcon}
                        </span>
                      </span>
                      {m.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
