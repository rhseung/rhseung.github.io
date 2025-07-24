import { ThemeToggle } from "@/components/theme-toggle";
import * as headerStyles from "../styles/header.css";
import { headerLightTheme, headerDarkTheme } from "../styles/header.theme.css";
import LightLogo from "@/assets/light-logo.svg?react";
import DarkLogo from "@/assets/dark-logo.svg?react";
import { useTheme } from "@/hooks/use-theme";

export const Header: React.FC = () => {
  const { theme, getThemeClass } = useTheme();
  const themeClass = getThemeClass(headerLightTheme, headerDarkTheme);

  return (
    <header className={themeClass}>
      <div className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <div className={headerStyles.headerContent}>
            {theme === "light" ? (
              <DarkLogo width={100} />
            ) : (
              <LightLogo width={100} />
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
