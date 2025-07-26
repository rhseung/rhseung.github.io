import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  getThemeClass: (lightClass: string, darkClass: string) => string;
  getActualTheme: () => "light" | "dark";
}

// html 클래스를 업데이트하는 함수
function updateHtmlClass(theme: Theme) {
  if (typeof document === "undefined") return;

  const actualTheme = getActualTheme(theme);

  if (actualTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// 실제 테마를 계산하는 함수 (system 테마 처리)
function getActualTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
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

  // 기본값을 system으로 설정
  return "system";
}

// Zustand store 생성 (persist 미들웨어 사용)
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: getInitialTheme(),

      toggleTheme: () => {
        const currentTheme = get().theme;
        let newTheme: Theme;

        // system -> light -> dark -> system 순환
        if (currentTheme === "system") {
          newTheme = "light";
        } else if (currentTheme === "light") {
          newTheme = "dark";
        } else {
          newTheme = "system";
        }

        set({ theme: newTheme });
        updateHtmlClass(newTheme);
      },

      setTheme: (theme: Theme) => {
        set({ theme });
        updateHtmlClass(theme);
      },

      getThemeClass: (lightClass: string, darkClass: string) => {
        const theme = get().theme;
        const actualTheme = getActualTheme(theme);
        return actualTheme === "light" ? lightClass : darkClass;
      },

      getActualTheme: () => {
        const theme = get().theme;
        return getActualTheme(theme);
      },
    }),
    {
      name: "theme-storage", // localStorage key
    }
  )
);

// 편의를 위한 useTheme 훅
export function useTheme() {
  const { theme, toggleTheme, setTheme, getThemeClass, getActualTheme } =
    useThemeStore();

  // 초기 html 클래스 설정 및 미디어 쿼리 리스너 등록
  useEffect(() => {
    updateHtmlClass(theme);

    // 시스템 테마 변경 감지를 위한 미디어 쿼리 리스너
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaQueryChange = () => {
      // system 테마일 때만 자동으로 업데이트
      if (useThemeStore.getState().theme === "system") {
        updateHtmlClass("system");
      }
    };

    // 이벤트 리스너 등록
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // 클린업 함수
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [theme]);

  return {
    theme,
    toggleTheme,
    setTheme,
    getThemeClass,
    getActualTheme,
  };
}
