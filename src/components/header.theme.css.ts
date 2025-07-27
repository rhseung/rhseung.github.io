import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Container layout semantics
  containerMaxWidth: primitiveTokens.maxWidth,
  gap: primitiveTokens.spacing["3xl"],

  // Spacing semantics
  padding: primitiveTokens.spacing.md,
  paddingLarge: primitiveTokens.spacing.xl,

  // Typography semantics
  titleSize: primitiveTokens.fontSize.lg,
  titleWeight: primitiveTokens.fontWeight.semibold,

  // Layout semantics
  zIndex: "50",
  blur: "blur(12px)",
};

// Header section semantic tokens - complete independence
export const [headerLightTheme, headerVars] = createTheme({
  // Color semantics
  background: "rgba(250, 250, 250, 0.85)", // 반투명
  foreground: primitiveTokens.color.neutral[900],
  foregroundHover: primitiveTokens.color.neutral[600],

  ...common,
});

export const headerDarkTheme = createTheme(headerVars, {
  // Color semantics
  background: "rgba(10, 10, 10, 0.85)", // 반투명
  foreground: primitiveTokens.color.neutral[50],
  foregroundHover: primitiveTokens.color.neutral[200],

  ...common,
});
