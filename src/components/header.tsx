import { forwardRef } from 'react';

import { IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';

import Logo from '@/assets/logo.svg?react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = forwardRef<HTMLElementTagNameMap['header']>(
  (_props, ref) => {
    const navigate = useNavigate();

    const handleLogoClick = async () => {
      await navigate({ to: '/' });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const handleNavigate = async (to: string) => {
      await navigate({ to });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // TODO: 선택되어 있는 탭은 강조 표시 - shadcn ui에서 tab 컴포넌트 쓰는건 어때 <- 홈 탭 왼쪽 아래에 알 수 없는 회색 픽셀이 자꾸 보이는데 navigation bar content 같아서 그럼
    // TODO: 선택되어 있는 탭 아래 하얀 바로 선택되었다는 표시 추가
    // TODO: 탭 간 전환 애니메이션 추가
    // TODO: https://ui.shadcn.com/docs/components/sidebar 모바일에서 이거 사용

    return (
      <header
        ref={ref}
        className="fixed top-0 right-0 left-0 z-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-4 bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md transition-transform duration-300"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex w-full items-center justify-between">
            <div
              onClick={handleLogoClick}
              className="flex cursor-pointer items-center text-neutral-900 transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-200"
            >
              <Logo width={80} className="hidden sm:block" />
              <Logo width={60} className="sm:hidden" />
            </div>
            <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center gap-20">
              <span
                onClick={() => handleNavigate('/')}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                홈
              </span>
              <span
                onClick={() => handleNavigate('/project')}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                프로젝트
              </span>
              <span
                onClick={() => handleNavigate('/career')}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                이력
              </span>
              <span
                onClick={() => handleNavigate('/link')}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                링크
              </span>
              <span
                onClick={() => handleNavigate('/blog')}
                className="cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                블로그
              </span>
            </nav>
            <div className="flex items-center gap-1 sm:gap-2">
              {/* 모바일/태블릿 햄버거 메뉴 */}
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
                    <DropdownMenuItem onClick={() => handleNavigate('/')}>
                      홈
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleNavigate('/project')}
                    >
                      프로젝트
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigate('/career')}>
                      이력
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigate('/link')}>
                      링크
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigate('/blog')}>
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
  },
);

Header.displayName = 'Header';
