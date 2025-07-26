import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles/index.theme.css";

// 세퍼레이터 라이트 테마
export const [separatorLightTheme, separatorVars] = createTheme({
  color: {
    // 기본 경계선 색상
    border: primitiveTokens.color.neutral[200],

    // 포커스 상태 (접근성을 위한)
    focus: primitiveTokens.color.primary[500],
  },
  size: {
    // 두께 설정
    horizontal: "1px",
    vertical: "1px",
  },
  borderRadius: primitiveTokens.borderRadius.sm,
});

// 세퍼레이터 다크 테마
export const separatorDarkTheme = createTheme(separatorVars, {
  color: {
    // 다크 모드 경계선 색상
    border: primitiveTokens.color.neutral[800],

    // 포커스 상태
    focus: primitiveTokens.color.primary[400],
  },
  size: {
    horizontal: "1px",
    vertical: "1px",
  },
  borderRadius: primitiveTokens.borderRadius.sm,
});
