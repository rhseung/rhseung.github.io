import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

const common = {
  spacing: primitiveTokens.spacing,
  fontSize: primitiveTokens.fontSize,
  fontWeight: primitiveTokens.fontWeight,
  borderRadius: primitiveTokens.borderRadius,
  shadow: primitiveTokens.shadow,
};

// Button section semantic tokens - complete independence
export const [buttonLightTheme, buttonVars] = createTheme({
  color: {
    // Primary button
    primary: primitiveTokens.color.neutral[900],
    primaryForeground: primitiveTokens.color.white,
    primaryHover: primitiveTokens.color.neutral[800],

    // Destructive button
    destructive: primitiveTokens.color.danger[600],
    destructiveForeground: primitiveTokens.color.white,
    destructiveHover: primitiveTokens.color.danger[700],

    // Secondary button
    secondary: primitiveTokens.color.neutral[200],
    secondaryForeground: primitiveTokens.color.neutral[900],
    secondaryHover: primitiveTokens.color.neutral[300],

    // Outline button
    outline: primitiveTokens.color.white,
    outlineForeground: primitiveTokens.color.neutral[900],
    outlineHover: primitiveTokens.color.neutral[100],
    outlineBorder: primitiveTokens.color.neutral[300],

    // Ghost button
    ghost: "transparent",
    ghostForeground: primitiveTokens.color.neutral[900],
    ghostHover: primitiveTokens.color.neutral[100],

    // Link button
    link: "transparent",
    linkForeground: primitiveTokens.color.primary[600],

    // Focus ring
    ring: primitiveTokens.color.primary[600],
  },
  ...common,
});

// Dark theme
export const buttonDarkTheme = createTheme(buttonVars, {
  color: {
    // Primary button
    primary: primitiveTokens.color.white,
    primaryForeground: primitiveTokens.color.neutral[900],
    primaryHover: primitiveTokens.color.neutral[200],

    // Destructive button
    destructive: primitiveTokens.color.danger[500],
    destructiveForeground: primitiveTokens.color.white,
    destructiveHover: primitiveTokens.color.danger[600],

    // Secondary button
    secondary: primitiveTokens.color.neutral[800],
    secondaryForeground: primitiveTokens.color.white,
    secondaryHover: primitiveTokens.color.neutral[700],

    // Outline button
    outline: primitiveTokens.color.neutral[950],
    outlineForeground: primitiveTokens.color.white,
    outlineHover: primitiveTokens.color.neutral[800],
    outlineBorder: primitiveTokens.color.neutral[700],

    // Ghost button
    ghost: "transparent",
    ghostForeground: primitiveTokens.color.white,
    ghostHover: primitiveTokens.color.neutral[800],

    // Link button
    link: "transparent",
    linkForeground: primitiveTokens.color.primary[400],

    // Focus ring
    ring: primitiveTokens.color.primary[400],
  },
  ...common,
});
