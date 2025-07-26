import { IconMoon, IconSun, IconShadow } from "@tabler/icons-react";

import { useTheme } from "../hooks/use-theme";

import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme, getActualTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <IconSun size={20} />;
      case "dark":
        return <IconMoon size={20} />;
      case "system":
        return <IconShadow size={20} />;
    }
  };

  const getAriaLabel = () => {
    if (theme === "system") {
      const actualTheme = getActualTheme();
      return `시스템 테마 (현재 ${actualTheme === "light" ? "라이트" : "다크"})`;
    }
    return theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
    >
      {getIcon()}
    </Button>
  );
}
