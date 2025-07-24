import { ThemeToggle } from "@/components/theme-toggle";
import * as headerStyles from "../styles/header.css";
import { headerLightTheme, headerDarkTheme } from "../styles/header.theme.css";
import Logo from "@/assets/logo.svg?react";
import { useTheme } from "@/hooks/use-theme";

export const Header: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(headerLightTheme, headerDarkTheme);

  return (
    <header className={themeClass}>
      <div className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <div className={headerStyles.headerContent}>
            <Logo width={100} className={headerStyles.logo} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
