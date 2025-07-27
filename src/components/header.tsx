import { ThemeToggle } from "@/components/theme-toggle";
import * as headerStyles from "./header.css";
import { headerLightTheme, headerDarkTheme } from "./header.theme.css";
import Logo from "@/assets/logo.svg?react";
import { useTheme } from "@/hooks/use-theme";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components";
import { Link, useNavigate } from "@tanstack/react-router";
import { forwardRef } from "react";

export const Header = forwardRef<HTMLDivElement>((_props, ref) => {
  const navigate = useNavigate();
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(headerLightTheme, headerDarkTheme);

  const handleLogoClick = async () => {
    await navigate({ to: "/" });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // TODO: 선택되어 있는 탭은 강조 표시 - shadcn ui에서 tab 컴포넌트 쓰는건 어때 <- 홈 탭 왼쪽 아래에 알 수 없는 회색 픽셀이 자꾸 보이는데 navigation bar content 같아서 그럼
  // TODO: 선택되어 있는 탭 아래 하얀 바로 선택되었다는 표시 추가
  // TODO: 탭 간 전환 애니메이션 추가
  // TODO: https://ui.shadcn.com/docs/components/sidebar 모바일에서 이거 사용

  return (
    <header className={themeClass}>
      <div ref={ref} className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <div className={headerStyles.headerContent}>
            <div onClick={handleLogoClick} className={headerStyles.logo}>
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
      </div>
    </header>
  );
});

Header.displayName = "Header";
