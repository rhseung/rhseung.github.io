import { createTheme } from "@vanilla-extract/css";
import { primitiveTokens } from "@/styles/index.theme.css";

const common = {
  spacing: primitiveTokens.spacing,
  fontSize: primitiveTokens.fontSize,
  fontWeight: primitiveTokens.fontWeight,
  borderRadius: primitiveTokens.borderRadius,
  shadow: primitiveTokens.shadow,
};

// 아바타 테마
export const [avatarLightTheme, avatarVars] = createTheme({
  color: {
    // Avatar root
    background: "transparent",

    // Avatar image
    imageBackground: "transparent",

    // Avatar fallback
    fallbackBackground: primitiveTokens.color.neutral[100],
    fallbackForeground: primitiveTokens.color.neutral[600],
    fallbackBorder: primitiveTokens.color.neutral[200],
  },

  // Sizes
  size: {
    sm: "2rem", // 32px
    md: "2.5rem", // 40px
    lg: "3rem", // 48px
    xl: "4rem", // 64px
  },

  ...common,
});

export const avatarDarkTheme = createTheme(avatarVars, {
  color: {
    background: "transparent",
    imageBackground: "transparent",
    fallbackBackground: primitiveTokens.color.neutral[800],
    fallbackForeground: primitiveTokens.color.neutral[300],
    fallbackBorder: primitiveTokens.color.neutral[700],
  },

  size: {
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "4rem",
  },

  ...common,
});
