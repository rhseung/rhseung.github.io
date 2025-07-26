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
  titleMarginBottom: primitiveTokens.spacing.sm,
  descriptionMarginBottom: primitiveTokens.spacing.md,
  techGap: primitiveTokens.spacing.xs,
  techPadding: primitiveTokens.spacing.xs,
  techPaddingSide: primitiveTokens.spacing.sm,
  buttonGap: primitiveTokens.spacing.sm,
  cardGap: primitiveTokens.spacing["2xl"],
  cardContentGap: primitiveTokens.spacing.md,
  containerGap: primitiveTokens.spacing["2xl"],
  gridGap: primitiveTokens.spacing["2xl"],

  // Typography semantics
  titleSize: primitiveTokens.fontSize.xl,
  titleWeight: primitiveTokens.fontWeight.bold,
  pageTitle: primitiveTokens.fontSize["2xl"],
  pageTitleWeight: primitiveTokens.fontWeight.bold,
  techSize: primitiveTokens.fontSize.xs,

  // Border semantics
  techRadius: primitiveTokens.borderRadius.sm,
  imageRadius: primitiveTokens.borderRadius.lg,

  // Layout semantics
  imageWidth: "500px",
  imageHeightMobile: "200px",
  cardMinHeight: "200px",
};

// Project page semantic tokens - 전체 페이지 테마 관리
export const [projectPageLightTheme, projectPageVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.white,
  title: primitiveTokens.color.neutral[900],
  pageTitleColor: primitiveTokens.color.neutral[900],
  description: primitiveTokens.color.neutral[600],
  techBg: primitiveTokens.color.neutral[200],
  techText: primitiveTokens.color.neutral[700],
  imageBg: primitiveTokens.color.neutral[200],

  ...common,
});

export const projectPageDarkTheme = createTheme(projectPageVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[900],
  title: primitiveTokens.color.neutral[50],
  pageTitleColor: primitiveTokens.color.neutral[50],
  description: primitiveTokens.color.neutral[400],
  techBg: primitiveTokens.color.neutral[800],
  techText: primitiveTokens.color.neutral[300],
  imageBg: primitiveTokens.color.neutral[800],

  ...common,
});
