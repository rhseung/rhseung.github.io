import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

// Global styles
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily:
    '"Mona Sans", "Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
});

// Layout styles
export const container = style({
  minHeight: "100vh",
  backgroundColor: vars.color.background,
});

export const section = style({
  padding: `${vars.spacing["3xl"]} ${vars.spacing.lg}`,
  "@media": {
    "(min-width: 1024px)": {
      padding: `${vars.spacing["3xl"]} ${vars.spacing["2xl"]}`,
    },
  },
});

export const sectionAlternate = style([
  section,
  {
    backgroundColor: `color-mix(in srgb, ${vars.color.muted} 50%, transparent)`,
  },
]);

export const maxWidthContainer = style({
  maxWidth: "64rem",
  margin: "0 auto",
});

export const maxWidthWideContainer = style({
  maxWidth: "72rem",
  margin: "0 auto",
});

// Header styles
export const header = style({
  padding: `${vars.spacing.lg} ${vars.spacing.lg}`,
  borderBottom: `1px solid color-mix(in srgb, ${vars.color.border} 20%, transparent)`,
  backgroundColor: `color-mix(in srgb, ${vars.color.background} 80%, transparent)`,
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  "@media": {
    "(min-width: 1024px)": {
      padding: `${vars.spacing.lg} ${vars.spacing["2xl"]}`,
    },
  },
});

export const headerContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  margin: 0,
});

// Typography styles
export const heading1 = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1.1,
  color: vars.color.foreground,
  "@media": {
    "(min-width: 640px)": {
      fontSize: vars.fontSize["6xl"],
    },
  },
});

export const heading2 = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.black,
  lineHeight: 1.6,
  color: vars.color.foreground,
});

export const heading3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
});

export const heading4 = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.primary,
});

export const textMuted = style({
  color: vars.color.mutedForeground,
});

export const textPrimary = style({
  color: vars.color.primary,
});

// Card styles
export const card = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.spacing.lg,
  backgroundColor: vars.color.card,
  transition: "box-shadow 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      boxShadow: vars.shadow.lg,
    },
  },
});

export const cardGrid = style({
  display: "grid",
  gap: vars.spacing.lg,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

// Grid layouts
export const twoColumnGrid = style({
  display: "grid",
  gap: vars.spacing["2xl"],
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

// Section headers
export const sectionHeader = style({
  textAlign: "center",
  marginBottom: vars.spacing["2xl"],
});

export const sectionTitle = style([
  heading2,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.spacing.sm,
  },
]);
