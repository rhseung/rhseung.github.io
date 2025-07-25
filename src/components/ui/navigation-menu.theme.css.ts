import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles";

const common = {
  spacing: primitiveTokens.spacing,
  fontSize: primitiveTokens.fontSize,
  fontWeight: primitiveTokens.fontWeight,
  borderRadius: primitiveTokens.borderRadius,
  shadow: primitiveTokens.shadow,
};

// 네비게이션 메뉴 테마
export const [navigationMenuLightTheme, navigationMenuVars] = createTheme({
  color: {
    background: "transparent",
    foreground: primitiveTokens.color.neutral[900],

    // Trigger states
    triggerDefault: "transparent",
    triggerDefaultForeground: primitiveTokens.color.neutral[900],
    triggerHover: "transparent",
    triggerHoverForeground: primitiveTokens.color.neutral[900],
    triggerActive: "transparent",
    triggerActiveForeground: primitiveTokens.color.neutral[900],

    // Content/Popover
    popoverBackground: primitiveTokens.color.white,
    popoverForeground: primitiveTokens.color.neutral[900],
    popoverBorder: primitiveTokens.color.neutral[200],

    // Link states
    linkDefault: "transparent",
    linkDefaultForeground: primitiveTokens.color.neutral[900],
    linkHover: primitiveTokens.color.neutral[100],
    linkHoverForeground: primitiveTokens.color.neutral[900],
    linkActive: primitiveTokens.color.neutral[100],
    linkActiveForeground: primitiveTokens.color.neutral[900],

    // Muted elements
    mutedForeground: primitiveTokens.color.neutral[500],

    // Focus ring
    ring: primitiveTokens.color.primary[600],

    // Indicator
    indicatorBorder: primitiveTokens.color.neutral[200],
  },
  ...common,
});

export const navigationMenuDarkTheme = createTheme(navigationMenuVars, {
  color: {
    background: "transparent",
    foreground: primitiveTokens.color.neutral[50],

    // Trigger states
    triggerDefault: "transparent",
    triggerDefaultForeground: primitiveTokens.color.neutral[50],
    triggerHover: "transparent",
    triggerHoverForeground: primitiveTokens.color.neutral[50],
    triggerActive: "transparent",
    triggerActiveForeground: primitiveTokens.color.neutral[50],

    // Content/Popover
    popoverBackground: primitiveTokens.color.neutral[950],
    popoverForeground: primitiveTokens.color.neutral[50],
    popoverBorder: primitiveTokens.color.neutral[800],

    // Link states
    linkDefault: "transparent",
    linkDefaultForeground: primitiveTokens.color.neutral[50],
    linkHover: primitiveTokens.color.neutral[800],
    linkHoverForeground: primitiveTokens.color.neutral[50],
    linkActive: primitiveTokens.color.neutral[800],
    linkActiveForeground: primitiveTokens.color.neutral[50],

    // Muted elements
    mutedForeground: primitiveTokens.color.neutral[400],

    // Focus ring
    ring: primitiveTokens.color.primary[400],

    // Indicator
    indicatorBorder: primitiveTokens.color.neutral[800],
  },
  ...common,
});
