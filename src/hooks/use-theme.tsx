import { useEffect } from 'react';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const KEY = 'theme-storage';
type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  getActualTheme: () => 'light' | 'dark';
}

function updateHtmlClass(theme: Theme) {
  if (typeof document === 'undefined') return;

  const actualTheme = getActualTheme(theme);

  if (actualTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function getActualTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'system') {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return theme;
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const saved = localStorage.getItem(KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.state?.theme) return parsed.state.theme;
    } catch {
      // 파싱 실패 시 기본값 사용
    }
  }

  // 기본값을 system으로 설정
  return 'system';
}

// Zustand store 생성 (persist 미들웨어 사용)
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: getInitialTheme(),

      toggleTheme: () => {
        const currentTheme = get().theme;
        let newTheme: Theme;

        // system -> light -> dark -> system
        if (currentTheme === 'system') {
          newTheme = 'light';
        } else if (currentTheme === 'light') {
          newTheme = 'dark';
        } else {
          newTheme = 'system';
        }

        set({ theme: newTheme });
        updateHtmlClass(newTheme);
      },

      setTheme: (theme: Theme) => {
        set({ theme });
        updateHtmlClass(theme);
      },

      getActualTheme: () => {
        const theme = get().theme;
        return getActualTheme(theme);
      },
    }),
    {
      name: KEY,
    },
  ),
);

export function useTheme() {
  const { theme, toggleTheme, setTheme, getActualTheme } = useThemeStore();

  useEffect(() => {
    updateHtmlClass(theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleMediaQueryChange = () => {
      if (useThemeStore.getState().theme === 'system') {
        updateHtmlClass('system');
      }
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    setTheme,
    getActualTheme,
  };
}
