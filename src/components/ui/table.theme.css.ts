import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

// Common tokens that don't change between themes
const common = {
  // Typography semantics
  fontSize: primitiveTokens.fontSize.sm,
  headerFontWeight: primitiveTokens.fontWeight.medium,

  // Spacing semantics
  cellPadding: primitiveTokens.spacing.sm,
  headerHeight: "2.5rem", // 10 in Tailwind
  captionMarginTop: primitiveTokens.spacing.lg,

  // Border semantics
  borderWidth: "1px",
};

// Table semantic tokens
export const [tableLightTheme, tableVars] = createTheme({
  // Color semantics
  text: primitiveTokens.color.neutral[900],
  mutedText: primitiveTokens.color.neutral[500],
  border: primitiveTokens.color.neutral[200],
  mutedBackground: primitiveTokens.color.neutral[50],
  selectedBackground: primitiveTokens.color.neutral[100],
  hoverBackground: primitiveTokens.color.neutral[50],

  ...common,
});

export const tableDarkTheme = createTheme(tableVars, {
  // Color semantics
  text: primitiveTokens.color.neutral[50],
  mutedText: primitiveTokens.color.neutral[400],
  border: primitiveTokens.color.neutral[700],
  mutedBackground: primitiveTokens.color.neutral[800],
  selectedBackground: primitiveTokens.color.neutral[700],
  hoverBackground: primitiveTokens.color.neutral[800],

  ...common,
});
