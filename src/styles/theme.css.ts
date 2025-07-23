import { createTheme } from "@vanilla-extract/css";

const common = {
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    base: "1.25rem", // 20px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
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
};

export const [themeClass, vars] = createTheme({
  color: {
    background: "oklch(0.99 0 0)",
    foreground: "oklch(0.25 0.005 285.823)",
    card: "oklch(0.97 0 0)",
    cardForeground: "oklch(0.25 0.005 285.823)",
    popover: "oklch(0.97 0 0)",
    popoverForeground: "oklch(0.25 0.005 285.823)",
    primary: "oklch(0.35 0.006 285.885)",
    primaryForeground: "oklch(0.97 0 0)",
    secondary: "oklch(0.96 0.001 286.375)",
    secondaryForeground: "oklch(0.25 0.005 285.823)",
    muted: "oklch(0.96 0.001 286.375)",
    mutedForeground: "oklch(0.65 0.004 285.823)",
    accent: "oklch(0.96 0.001 286.375)",
    accentForeground: "oklch(0.25 0.005 285.823)",
    destructive: "oklch(0.78 0.19 23.78)",
    destructiveForeground: "oklch(0.98 0 0)",
    border: "oklch(0.96 0.001 286.375)",
    input: "oklch(0.96 0.001 286.375)",
    ring: "oklch(0.35 0.006 285.885)",
  },
  gradient: {
    heroTitle:
      "linear-gradient(to right, rgba(240, 85, 150, 1) 0%, rgba(153, 103, 239, 1) 50%, rgba(74, 205, 232, 1) 100%)",
  },
  ...common,
});

export const darkThemeClass = createTheme(vars, {
  color: {
    background: "oklch(0.096 0.006 285.883)",
    foreground: "oklch(0.985 0 0)",
    card: "oklch(0.096 0.006 285.883)",
    cardForeground: "oklch(0.985 0 0)",
    popover: "oklch(0.096 0.006 285.883)",
    popoverForeground: "oklch(0.985 0 0)",
    primary: "oklch(0.985 0 0)",
    primaryForeground: "oklch(0.141 0.005 285.823)",
    secondary: "oklch(0.157 0.005 285.823)",
    secondaryForeground: "oklch(0.985 0 0)",
    muted: "oklch(0.157 0.005 285.823)",
    mutedForeground: "oklch(0.5 0.004 285.823)",
    accent: "oklch(0.157 0.005 285.823)",
    accentForeground: "oklch(0.985 0 0)",
    destructive: "oklch(0.633 0.204 23.78)",
    destructiveForeground: "oklch(0.985 0 0)",
    border: "oklch(0.157 0.005 285.823)",
    input: "oklch(0.157 0.005 285.823)",
    ring: "oklch(0.985 0 0)",
  },
  gradient: {
    heroTitle:
      "linear-gradient(to right, rgb(255, 124, 168) 0%, rgb(180, 145, 255) 50%, rgb(124, 249, 255) 100%)",
  },
  ...common,
});
