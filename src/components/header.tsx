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
                  <Link to="/link">
                    <NavigationMenuTrigger>링크</NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/career">
                    <NavigationMenuTrigger>이력</NavigationMenuTrigger>
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
