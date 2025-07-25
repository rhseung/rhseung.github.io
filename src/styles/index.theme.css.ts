import { createTheme } from "@vanilla-extract/css";

// primitive 디자인 토큰
export const [primitiveTheme, primitiveTokens] = createTheme({
  color: {
    white: "#ffffff",
    black: "#000000",

    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },
    danger: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },
    info: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49",
    },
  },

  opacity: {
    0: "0",
    10: "0.1",
    20: "0.2",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    80: "0.8",
    90: "0.9",
    100: "1",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    smd: "0.75rem",
    md: "1rem",
    base: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    black: "800",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "9999px",
  },

  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -4px rgb(0 0 0 / 0.15)",
  },

  gradient: {
    rainbow:
      "linear-gradient(to right, rgba(240, 85, 150, 1) 0%, rgba(153, 103, 239, 1) 50%, rgba(74, 205, 232, 1) 100%)",
    rainbowDark:
      "linear-gradient(to right, rgb(255, 124, 168) 0%, rgb(180, 145, 255) 50%, rgb(124, 249, 255) 100%)",
  },

  maxWidth: "72rem",
});

// TODO: header 뒷 배경 paddingTop 처리 - store로 전역 변수로 만들면?
// TODO: import 정렬 lint 추가
// TODO: https://ui.shadcn.com/ 의 컬러 팔레트 사용하자 - 지금 다크 모드 색상이 너무 밝음 - 이를 위해서는 일단 primitive token -> semantic token -> component token 구조로 리팩토링하기
