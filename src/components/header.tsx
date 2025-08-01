import { forwardRef } from 'react';

import { Link, useNavigate } from '@tanstack/react-router';

import Logo from '@/assets/logo.svg?react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components';
import { ThemeToggle } from '@/components/theme-toggle';

export const Header = forwardRef<HTMLDivElement>((_props, ref) => {
  const navigate = useNavigate();

  const handleLogoClick = async () => {
    await navigate({ to: '/' });
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
    <header className="fixed top-0 right-0 left-0 z-50 bg-neutral-50/85 p-4 backdrop-blur-md lg:px-6 dark:bg-neutral-950/85">
      <div ref={ref} className="mx-auto w-full max-w-7xl">
        <div className="flex w-full items-center justify-between">
          <div
            onClick={handleLogoClick}
            className="flex cursor-pointer items-center text-neutral-900 transition-colors duration-100 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-200"
          >
            <Logo width={100} />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuTrigger>홈</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/project">
                  <NavigationMenuTrigger>프로젝트</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/career">
                  <NavigationMenuTrigger>이력</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/link">
                  <NavigationMenuTrigger>링크</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuTrigger>블로그</NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
