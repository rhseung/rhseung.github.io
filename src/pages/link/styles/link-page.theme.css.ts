import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Section layout semantics
  sectionPadding: primitiveTokens.spacing["3xl"],
  sectionPaddingMobile: primitiveTokens.spacing.lg,
  titleSectionPaddingX: primitiveTokens.spacing["3xl"],
  titleSectionPaddingY: primitiveTokens.spacing.xl,
  titleSectionPaddingMobile: primitiveTokens.spacing.lg,
  containerMaxWidth: primitiveTokens.maxWidth,

  // Spacing semantics
  subTitleGap: primitiveTokens.spacing.lg,
  cardGap: primitiveTokens.spacing.lg,
  cardContentGap: primitiveTokens.spacing.sm,
  containerGap: primitiveTokens.spacing["2xl"],
  columnGap: primitiveTokens.spacing.xl,
  iconGap: primitiveTokens.spacing.md, // 아이콘과 제목 사이 간격

  // Typography semantics
  titleSize: primitiveTokens.fontSize.lg,
  titleWeight: primitiveTokens.fontWeight.semibold,
  pageTitle: primitiveTokens.fontSize["2xl"],
  pageTitleWeight: primitiveTokens.fontWeight.bold,
  pageSubTitle: primitiveTokens.fontSize.lg,
  pageSubTitleWeight: primitiveTokens.fontWeight.semibold,
  urlSize: primitiveTokens.fontSize.xs,

  // Border semantics
  cardRadius: primitiveTokens.borderRadius.lg,
  cardBorder: "1px solid",

  // Layout semantics
  iconSize: "1.5rem",
  cardPadding: primitiveTokens.spacing.md,
  cardMinHeight: "60px",
};

// Link page semantic tokens - 전체 페이지 테마 관리
export const [linkPageLightTheme, linkPageVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.white,
  title: primitiveTokens.color.neutral[900],
  pageTitleColor: primitiveTokens.color.neutral[900],
  pageSubTitleColor: primitiveTokens.color.neutral[700],
  description: primitiveTokens.color.neutral[600],
  cardBg: primitiveTokens.color.white,
  cardBorderColor: primitiveTokens.color.neutral[200],
  cardHoverBg: primitiveTokens.color.neutral[50],
  iconColor: primitiveTokens.color.neutral[600],
  urlColor: primitiveTokens.color.neutral[500],

  ...common,
});

export const linkPageDarkTheme = createTheme(linkPageVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[900],
  title: primitiveTokens.color.neutral[50],
  pageTitleColor: primitiveTokens.color.neutral[50],
  pageSubTitleColor: primitiveTokens.color.neutral[300],
  description: primitiveTokens.color.neutral[400],
  cardBg: primitiveTokens.color.neutral[800],
  cardBorderColor: primitiveTokens.color.neutral[700],
  cardHoverBg: primitiveTokens.color.neutral[700],
  iconColor: primitiveTokens.color.neutral[400],
  urlColor: primitiveTokens.color.neutral[500],

  ...common,
});
