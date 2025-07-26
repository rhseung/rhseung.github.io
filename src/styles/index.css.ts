import { style, globalStyle } from "@vanilla-extract/css";

import { primitiveTokens } from "./index.theme.css";

// TODO: 반응형 폰트 크기

// Global styles
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html", {
  backgroundColor: primitiveTokens.color.neutral[50],
  transition: "background-color 0.2s ease-in-out",
  minHeight: "100%",
  overscrollBehavior: "none",
});

globalStyle("html.dark", {
  backgroundColor: primitiveTokens.color.neutral[950],
});

globalStyle("body", {
  margin: 0,
  fontFamily:
    '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  // 텍스트 색상만 설정
  color: primitiveTokens.color.neutral[900],
  transition: "color 0.2s ease-in-out",
  minHeight: "100vh",
  position: "relative",
  overscrollBehavior: "none",
});

// 다크 모드용 body 스타일
globalStyle("body.dark", {
  color: primitiveTokens.color.neutral[50],
});

export const titleContainer = style({
  width: "100%",
  padding: primitiveTokens.spacing["3xl"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 1023px)": {
      padding: primitiveTokens.spacing.lg,
    },
  },
});

export const title = style({
  maxWidth: primitiveTokens.maxWidth,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: primitiveTokens.spacing["3xl"],
});
