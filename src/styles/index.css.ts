import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

// TODO: 반응형 폰트 크기

// Global styles
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily:
    '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
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
  backgroundColor: vars.color.background,
  "@media": {
    "(min-width: 1024px)": {
      paddingLeft: 0,
      paddingRight: 0,
      // padding: `${vars.spacing["3xl"]} ${vars.spacing["2xl"]}`,
    },
  },
});

export const sectionAlternate = style([
  section,
  {
    backgroundColor: vars.color.muted,
  },
]);

export const sectionFullHeight = style([
  section,
  {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const maxWidthContainer = style({
  maxWidth: "64rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2xl"],
  alignItems: "start",
  alignContent: "start",
});

export const maxWidthLeftContainer = style({
  maxWidth: "64rem",
  marginLeft: 0,
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2xl"],
  alignItems: "start",
  alignContent: "start",
});

export const maxWidthWideContainer = style({
  maxWidth: "72rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2xl"],
  alignItems: "start",
  alignContent: "start",
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

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  color: vars.color.foreground,
  marginBottom: vars.spacing.lg,
});
