import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles/index.theme.css";

// 뱃지 라이트 테마
export const [badgeLightTheme, badgeVars] = createTheme({
  color: {
    // default variant
    defaultBackground: primitiveTokens.color.primary[500],
    defaultForeground: primitiveTokens.color.white,
    defaultHover: primitiveTokens.color.primary[600],

    // secondary variant
    secondaryBackground: primitiveTokens.color.neutral[100],
    secondaryForeground: primitiveTokens.color.neutral[900],
    secondaryHover: primitiveTokens.color.neutral[200],

    // destructive variant
    destructiveBackground: primitiveTokens.color.danger[500],
    destructiveForeground: primitiveTokens.color.white,
    destructiveHover: primitiveTokens.color.danger[600],
    destructiveFocusRing: primitiveTokens.color.danger[500] + "33", // 20% opacity

    // outline variant
    outlineForeground: primitiveTokens.color.neutral[900],
    outlineHover: primitiveTokens.color.neutral[100],
    outlineHoverForeground: primitiveTokens.color.neutral[900],

    // common
    border: primitiveTokens.color.neutral[200],
    focusRing: primitiveTokens.color.primary[500] + "80", // 50% opacity
    invalidRing: primitiveTokens.color.danger[500] + "33", // 20% opacity
    invalidBorder: primitiveTokens.color.danger[500],
  },
  spacing: {
    px: primitiveTokens.spacing.sm,
    py: primitiveTokens.spacing.xs,
  },
  fontSize: primitiveTokens.fontSize.xs,
  fontWeight: primitiveTokens.fontWeight.medium,
  borderRadius: primitiveTokens.borderRadius.md,
});

// 뱃지 다크 테마
export const badgeDarkTheme = createTheme(badgeVars, {
  color: {
    // default variant
    defaultBackground: primitiveTokens.color.primary[600],
    defaultForeground: primitiveTokens.color.white,
    defaultHover: primitiveTokens.color.primary[700],

    // secondary variant
    secondaryBackground: primitiveTokens.color.neutral[800],
    secondaryForeground: primitiveTokens.color.neutral[100],
    secondaryHover: primitiveTokens.color.neutral[700],

    // destructive variant
    destructiveBackground: primitiveTokens.color.danger[600] + "99", // 60% opacity
    destructiveForeground: primitiveTokens.color.white,
    destructiveHover: primitiveTokens.color.danger[700],
    destructiveFocusRing: primitiveTokens.color.danger[500] + "66", // 40% opacity

    // outline variant
    outlineForeground: primitiveTokens.color.neutral[100],
    outlineHover: primitiveTokens.color.neutral[800],
    outlineHoverForeground: primitiveTokens.color.neutral[100],

    // common
    border: primitiveTokens.color.neutral[700],
    focusRing: primitiveTokens.color.primary[500] + "80", // 50% opacity
    invalidRing: primitiveTokens.color.danger[500] + "66", // 40% opacity
    invalidBorder: primitiveTokens.color.danger[500],
  },
  spacing: {
    px: primitiveTokens.spacing.sm,
    py: primitiveTokens.spacing.xs,
  },
  fontSize: primitiveTokens.fontSize.xs,
  fontWeight: primitiveTokens.fontWeight.medium,
  borderRadius: primitiveTokens.borderRadius.md,
});
