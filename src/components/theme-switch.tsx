import { useEffect, useState } from 'react';

import { IconMoon, IconShadow, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components';

export const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getActualTheme = () => {
    return theme === 'system' ? resolvedTheme : theme;
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

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
      default:
        return null;
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
};
