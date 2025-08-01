import { style } from "@vanilla-extract/css";
import { notFoundPageVars } from "./not-found-page.theme.css";

// 전체 컨테이너 스타일
export const container = style({
  backgroundColor: notFoundPageVars.background,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 콘텐츠 컨테이너 스타일
export const content = style({
  display: "flex",
  alignItems: "center",
  gap: notFoundPageVars.contentGap,
});

// 404 에러 코드 스타일
export const errorCode = style({
  fontSize: notFoundPageVars.errorCodeSize,
  fontWeight: notFoundPageVars.errorCodeWeight,
  color: notFoundPageVars.errorCodeColor,
  margin: 0,
});

// 에러 메시지 스타일
export const errorMessage = style({
  fontSize: notFoundPageVars.errorMessageSize,
  fontWeight: notFoundPageVars.errorMessageWeight,
  color: notFoundPageVars.errorMessageColor,
  margin: 0,
});

// Separator 스타일
export const separator = style({
  height: notFoundPageVars.separatorHeight,
});
