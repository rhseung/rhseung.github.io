import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Container layout semantics
  containerMaxWidth: "72rem",
  gap: primitiveTokens.spacing["3xl"],

  // Spacing semantics
  padding: primitiveTokens.spacing.md,
  paddingLarge: primitiveTokens.spacing.xl,

  // Typography semantics
  titleSize: primitiveTokens.fontSize.lg,
  titleWeight: primitiveTokens.fontWeight.semibold,

  // Layout semantics
  zIndex: "10",
  blur: "blur(12px)",
};

// Header section semantic tokens - complete independence
export const [headerLightTheme, headerVars] = createTheme({
  // Color semantics
  background: "rgba(250, 250, 250, 0.8)", // neutral[50] with 95% opacity
  foreground: primitiveTokens.color.neutral[900],
  foregroundHover: primitiveTokens.color.neutral[600],

  ...common,
});

export const headerDarkTheme = createTheme(headerVars, {
  // Color semantics
  background: "rgba(10, 10, 10, 0.8)", // neutral[950] with 95% opacity
  foreground: primitiveTokens.color.neutral[50],
  foregroundHover: primitiveTokens.color.primary[200],

  ...common,
});
