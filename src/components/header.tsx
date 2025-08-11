import { forwardRef } from 'react';

import { IconMenu2 } from '@tabler/icons-react';
import { useLocation, useNavigate } from '@tanstack/react-router';

import Logo from '@/assets/logo.svg?react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ThemeToggle,
} from '@/components';
import { cn } from '@/utils/cn';

export const Header = forwardRef<
  HTMLElementTagNameMap['header'],
  React.HTMLAttributes<HTMLElementTagNameMap['header']>
>((_, ref) => {
  // TODO: 탭 간 전환 애니메이션 추가

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavigate = async (to: string) => {
    await navigate({ to });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 네비게이션/드롭다운 공통 스타일 상수
  const navBase = cn('cursor-pointer relative transition-colors duration-150');
  const navActive = cn(
    'text-primary-600 dark:text-primary-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:rounded-full after:content-[""] after:transition-all after:duration-300 hover:text-primary-700 dark:hover:text-primary-300 hover:after:bg-primary-700 dark:hover:after:bg-primary-300 after:bg-primary-600 dark:after:bg-primary-400',
  );
  const navInactive = cn(
    'text-neutral-900 dark:text-neutral-50 hover:text-primary-500 dark:hover:text-primary-300',
  );
  const dropdownBase = cn('');
  const dropdownActive = cn(
    'text-primary-600 dark:text-primary-400 font-semibold',
  );
  const dropdownInactive = cn('text-neutral-900 dark:text-neutral-50');

  return (
    <header
      ref={ref}
      className="fixed top-0 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-4 bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md transition-transform duration-300"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Logo width={90} className="hidden sm:block" />
            <Logo width={70} className="sm:hidden" />
          </div>
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-20">
            <span
              onClick={() => handleNavigate('/')}
              className={cn(
                navBase,
                currentPath === '/' ? navActive : navInactive,
              )}
            >
              홈
            </span>
            <span
              onClick={() => handleNavigate('/project')}
              className={cn(
                navBase,
                currentPath === '/project' ? navActive : navInactive,
              )}
            >
              프로젝트
            </span>
            <span
              onClick={() => handleNavigate('/career')}
              className={cn(
                navBase,
                currentPath === '/career' ? navActive : navInactive,
              )}
            >
              이력
            </span>
            <span
              onClick={() => handleNavigate('/link')}
              className={cn(
                navBase,
                currentPath === '/link' ? navActive : navInactive,
              )}
            >
              링크
            </span>
            <span
              onClick={() => handleNavigate('/blog')}
              className={cn(
                navBase,
                currentPath === '/blog' ? navActive : navInactive,
              )}
            >
              블로그
            </span>
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
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
                  <DropdownMenuItem
                    onClick={() => handleNavigate('/')}
                    className={cn(
                      dropdownBase,
                      currentPath === '/' ? dropdownActive : dropdownInactive,
                    )}
                  >
                    홈
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('/project')}
                    className={cn(
                      dropdownBase,
                      currentPath === '/project'
                        ? dropdownActive
                        : dropdownInactive,
                    )}
                  >
                    프로젝트
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('/career')}
                    className={cn(
                      dropdownBase,
                      currentPath === '/career'
                        ? dropdownActive
                        : dropdownInactive,
                    )}
                  >
                    이력
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('/link')}
                    className={cn(
                      dropdownBase,
                      currentPath === '/link'
                        ? dropdownActive
                        : dropdownInactive,
                    )}
                  >
                    링크
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigate('/blog')}
                    className={cn(
                      dropdownBase,
                      currentPath === '/blog'
                        ? dropdownActive
                        : dropdownInactive,
                    )}
                  >
                    블로그
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
});
