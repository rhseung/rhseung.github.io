import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Section layout semantics
  sectionPadding: primitiveTokens.spacing["3xl"],
  sectionPaddingMobile: primitiveTokens.spacing.lg,
  containerMaxWidth: primitiveTokens.maxWidth,

  // Spacing semantics
  sectionGap: primitiveTokens.spacing["3xl"],
  profileGap: primitiveTokens.spacing["3xl"],
  titleMargin: primitiveTokens.spacing.lg,
  descriptionMargin: primitiveTokens.spacing.lg,
  infoGap: primitiveTokens.spacing.base,
  itemGap: primitiveTokens.spacing.lg,

  // Typography semantics
  titleSize: primitiveTokens.fontSize["4xl"],
  titleWeight: primitiveTokens.fontWeight.black,
  descriptionSize: primitiveTokens.fontSize["4xl"],
  descriptionWeight: primitiveTokens.fontWeight.normal,
  infoSize: primitiveTokens.fontSize.xl,
  infoWeight: primitiveTokens.fontWeight.medium,

  // Border semantics
  profileRadius: primitiveTokens.borderRadius.full,
};

// Banner section semantic tokens - complete independence
export const [bannerLightTheme, bannerVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.neutral[50],
  profileBg: primitiveTokens.color.neutral[100],
  title: "transparent", // uses gradient
  description: primitiveTokens.color.neutral[600],
  infoText: primitiveTokens.color.neutral[900],
  infoIcon: primitiveTokens.color.neutral[600],
  linkDefault: primitiveTokens.color.neutral[500],
  linkHover: primitiveTokens.color.neutral[900],
  linkUnderline: primitiveTokens.color.neutral[900],

  // Gradient semantics
  titleGradient: primitiveTokens.gradient.rainbow,

  ...common,
});

export const bannerDarkTheme = createTheme(bannerVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[950],
  profileBg: primitiveTokens.color.neutral[800],
  title: "transparent", // uses gradient
  description: primitiveTokens.color.neutral[400],
  infoText: primitiveTokens.color.neutral[50],
  infoIcon: primitiveTokens.color.neutral[400],
  linkDefault: primitiveTokens.color.neutral[500],
  linkHover: primitiveTokens.color.neutral[50],
  linkUnderline: primitiveTokens.color.neutral[50],

  // Gradient override for dark theme
  titleGradient: primitiveTokens.gradient.rainbowDark,

  ...common,
});
