import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  getThemeClass: (lightClass: string, darkClass: string) => string;
}

// html 클래스를 업데이트하는 함수
function updateHtmlClass(theme: Theme) {
  if (typeof document === "undefined") return;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// 초기 테마 값을 결정하는 함수
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme-storage");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.state?.theme) return parsed.state.theme;
    } catch {
      // 파싱 실패 시 기본값 사용
    }
  }

  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

// Zustand store 생성 (persist 미들웨어 사용)
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: getInitialTheme(),

      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        updateHtmlClass(newTheme);
      },

      setTheme: (theme: Theme) => {
        set({ theme });
        updateHtmlClass(theme);
      },

      getThemeClass: (lightClass: string, darkClass: string) => {
        const theme = get().theme;
        return theme === "light" ? lightClass : darkClass;
      },
    }),
    {
      name: "theme-storage", // localStorage key
    }
  )
);

// 편의를 위한 useTheme 훅
export function useTheme() {
  const { theme, toggleTheme, setTheme, getThemeClass } = useThemeStore();

  // 초기 html 클래스 설정
  useEffect(() => {
    updateHtmlClass(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    setTheme,
    getThemeClass,
  };
}
