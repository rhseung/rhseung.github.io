import { IconMoon, IconShadow, IconSun } from '@tabler/icons-react';

import { Button } from '@/components';
import { useTheme } from '@/hooks';

export function ThemeToggle() {
  const { theme, toggleTheme, getActualTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <>
            <IconSun size={16} className="sm:hidden" />
            <IconSun size={20} className="hidden sm:block" />
          </>
        );
      case 'dark':
        return (
          <>
            <IconMoon size={16} className="sm:hidden" />
            <IconMoon size={20} className="hidden sm:block" />
          </>
        );
      case 'system':
        return (
          <>
            <IconShadow size={16} className="sm:hidden" />
            <IconShadow size={20} className="hidden sm:block" />
          </>
        );
    }
  };

  const getAriaLabel = () => {
    if (theme === 'system') {
      const actualTheme = getActualTheme();
      return `시스템 테마 (현재 ${actualTheme === 'light' ? '라이트' : '다크'})`;
    }
    return theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 sm:h-10 sm:w-10"
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
    >
      {getIcon()}
    </Button>
  );
}
