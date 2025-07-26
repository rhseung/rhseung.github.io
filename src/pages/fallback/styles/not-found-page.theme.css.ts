import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Typography semantics
  errorCodeSize: primitiveTokens.fontSize["6xl"],
  errorCodeWeight: primitiveTokens.fontWeight.medium,
  errorMessageSize: primitiveTokens.fontSize.base,
  errorMessageWeight: primitiveTokens.fontWeight.normal,

  // Spacing semantics
  contentGap: primitiveTokens.spacing.lg,
  separatorHeight: "64px",
};

// Not Found page semantic tokens
export const [notFoundPageLightTheme, notFoundPageVars] = createTheme({
  // Color semantics
  background: primitiveTokens.color.white,
  errorCodeColor: primitiveTokens.color.neutral[900],
  errorMessageColor: primitiveTokens.color.neutral[600],

  ...common,
});

export const notFoundPageDarkTheme = createTheme(notFoundPageVars, {
  // Color semantics
  background: primitiveTokens.color.neutral[900],
  errorCodeColor: primitiveTokens.color.neutral[50],
  errorMessageColor: primitiveTokens.color.neutral[400],

  ...common,
});
