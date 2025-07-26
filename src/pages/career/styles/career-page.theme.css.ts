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
  cardContentGap: primitiveTokens.spacing.smd,
  subTitleGap: primitiveTokens.spacing.lg,
  containerGap: primitiveTokens.spacing["2xl"],
  sectionContentGap: primitiveTokens.spacing.xl,
  tableGap: primitiveTokens.spacing.md,
  cardTitleGap: primitiveTokens.spacing.sm,
  textGap: primitiveTokens.spacing.sm,
  cardHeaderGap: primitiveTokens.spacing.lg,
  detailTextGap: primitiveTokens.spacing.sm,

  // Typography semantics
  pageTitle: primitiveTokens.fontSize["2xl"],
  pageTitleWeight: primitiveTokens.fontWeight.bold,
  pageSubTitle: primitiveTokens.fontSize.lg,
  pageSubTitleWeight: primitiveTokens.fontWeight.semibold,
  bodyText: primitiveTokens.fontSize.base,
  bodyTextWeight: primitiveTokens.fontWeight.normal,
  smallText: primitiveTokens.fontSize.sm,

  // Border semantics
  cardRadius: primitiveTokens.borderRadius.lg,
  cardBorder: "1px solid",

  // Layout semantics
  cardPadding: primitiveTokens.spacing.md,
  detailTextPaddingLeft: primitiveTokens.spacing.sm,
};

// Career page semantic tokens - 전체 페이지 테마 관리
export const [careerPageLightTheme, careerPageVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.white,
  pageTitleColor: primitiveTokens.color.neutral[900],
  pageSubTitleColor: primitiveTokens.color.neutral[700],
  bodyTextColor: primitiveTokens.color.neutral[600],
  cardBg: primitiveTokens.color.white,
  cardBorderColor: primitiveTokens.color.neutral[200],
  cardHoverBg: primitiveTokens.color.neutral[50],
  logoBg: "transparent",
  logoBorderColor: primitiveTokens.color.neutral[200],

  // Badge colors for better contrast on cards
  badgeOutlineBg: primitiveTokens.color.white,
  badgeOutlineText: primitiveTokens.color.neutral[700],
  badgeOutlineBorder: primitiveTokens.color.neutral[300],
  badgeDefaultBg: primitiveTokens.color.primary[500],
  badgeDefaultText: primitiveTokens.color.white,
  badgeSecondaryBg: primitiveTokens.color.neutral[200],
  badgeSecondaryText: primitiveTokens.color.neutral[700],

  goldColor: primitiveTokens.color.warning[500],

  ...common,
});

export const careerPageDarkTheme = createTheme(careerPageVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[900],
  pageTitleColor: primitiveTokens.color.neutral[50],
  pageSubTitleColor: primitiveTokens.color.neutral[300],
  bodyTextColor: primitiveTokens.color.neutral[400],
  cardBg: primitiveTokens.color.neutral[800],
  cardBorderColor: primitiveTokens.color.neutral[700],
  cardHoverBg: primitiveTokens.color.neutral[700],
  logoBg: "transparent",
  logoBorderColor: primitiveTokens.color.neutral[600],

  // Badge colors for better contrast on cards
  badgeOutlineBg: primitiveTokens.color.neutral[800],
  badgeOutlineText: primitiveTokens.color.neutral[200],
  badgeOutlineBorder: primitiveTokens.color.neutral[600],
  badgeDefaultBg: primitiveTokens.color.primary[600],
  badgeDefaultText: primitiveTokens.color.white,
  badgeSecondaryBg: primitiveTokens.color.neutral[600],
  badgeSecondaryText: primitiveTokens.color.neutral[200],

  goldColor: primitiveTokens.color.warning[400],

  ...common,
});
