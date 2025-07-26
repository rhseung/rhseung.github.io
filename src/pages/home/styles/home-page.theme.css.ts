import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Section layout semantics
  sectionPadding: primitiveTokens.spacing["3xl"],
  sectionPaddingMobile: primitiveTokens.spacing.lg,
  containerMaxWidth: primitiveTokens.maxWidth,

  // Banner section spacing semantics
  bannerSectionGap: primitiveTokens.spacing["3xl"],
  profileGap: primitiveTokens.spacing["3xl"],
  titleMargin: primitiveTokens.spacing.lg,
  descriptionMargin: primitiveTokens.spacing.lg,
  infoGap: primitiveTokens.spacing.base,
  itemGap: primitiveTokens.spacing.lg,

  // Highlight section spacing semantics
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

  // Banner typography semantics
  bannerTitleSize: primitiveTokens.fontSize["4xl"],
  bannerTitleWeight: primitiveTokens.fontWeight.black,
  bannerDescriptionSize: primitiveTokens.fontSize["4xl"],
  bannerDescriptionWeight: primitiveTokens.fontWeight.normal,
  infoSize: primitiveTokens.fontSize.xl,
  infoWeight: primitiveTokens.fontWeight.medium,

  // Highlight typography semantics
  highlightTitleSize: primitiveTokens.fontSize.xl,
  highlightTitleWeight: primitiveTokens.fontWeight.bold,
  techSize: primitiveTokens.fontSize.xs,

  // Border semantics
  profileRadius: primitiveTokens.borderRadius.full,
  techRadius: primitiveTokens.borderRadius.sm,
  imageRadius: primitiveTokens.borderRadius.lg,

  // Layout semantics
  imageWidth: "500px",
  imageHeightMobile: "200px",
  cardMinHeight: "200px",
};

// Home page semantic tokens - 전체 페이지 테마 관리
export const [homePageLightTheme, homePageVars] = createTheme({
  // Banner section color semantics
  bannerBackground: primitiveTokens.color.neutral[50],
  profileBg: primitiveTokens.color.neutral[100],
  bannerTitle: "transparent", // uses gradient
  bannerDescription: primitiveTokens.color.neutral[600],
  infoText: primitiveTokens.color.neutral[900],
  infoIcon: primitiveTokens.color.neutral[600],
  linkDefault: primitiveTokens.color.neutral[500],
  linkHover: primitiveTokens.color.neutral[900],
  linkUnderline: primitiveTokens.color.neutral[900],

  // Highlight section color semantics
  highlightBackground: primitiveTokens.color.white,
  highlightTitle: primitiveTokens.color.neutral[900],
  highlightDescription: primitiveTokens.color.neutral[600],
  techBg: primitiveTokens.color.neutral[200],
  techText: primitiveTokens.color.neutral[700],
  imageBg: primitiveTokens.color.neutral[200],

  // Gradient semantics
  titleGradient: primitiveTokens.gradient.rainbow,

  ...common,
});

export const homePageDarkTheme = createTheme(homePageVars, {
  // Banner section color semantics
  bannerBackground: primitiveTokens.color.neutral[950],
  profileBg: primitiveTokens.color.neutral[800],
  bannerTitle: "transparent", // uses gradient
  bannerDescription: primitiveTokens.color.neutral[400],
  infoText: primitiveTokens.color.neutral[50],
  infoIcon: primitiveTokens.color.neutral[400],
  linkDefault: primitiveTokens.color.neutral[500],
  linkHover: primitiveTokens.color.neutral[50],
  linkUnderline: primitiveTokens.color.neutral[50],

  // Highlight section color semantics
  highlightBackground: primitiveTokens.color.neutral[900],
  highlightTitle: primitiveTokens.color.neutral[50],
  highlightDescription: primitiveTokens.color.neutral[400],
  techBg: primitiveTokens.color.neutral[800],
  techText: primitiveTokens.color.neutral[300],
  imageBg: primitiveTokens.color.neutral[800],

  // Gradient override for dark theme
  titleGradient: primitiveTokens.gradient.rainbowDark,

  ...common,
});
