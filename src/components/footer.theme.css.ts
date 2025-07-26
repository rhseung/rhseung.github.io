import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Container layout semantics
  containerMaxWidth: primitiveTokens.maxWidth,

  // Spacing semantics
  padding: primitiveTokens.spacing["2xl"],
  paddingSide: primitiveTokens.spacing.lg,
  socialGap: primitiveTokens.spacing.md,

  // Typography semantics
  textAlign: "center" as const,
};

// Footer section semantic tokens - complete independence
export const [footerLightTheme, footerVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.neutral[50],
  text: primitiveTokens.color.neutral[600],

  ...common,
});

export const footerDarkTheme = createTheme(footerVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[950],
  text: primitiveTokens.color.neutral[400],

  ...common,
});
