import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { avatarVars } from "./avatar.theme.css";

export const root = style({
  position: "relative",
  display: "flex",
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: avatarVars.borderRadius.full,
  backgroundColor: avatarVars.color.background,
});

export const image = style({
  aspectRatio: "1",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: avatarVars.color.imageBackground,
});

export const fallback = style({
  backgroundColor: avatarVars.color.fallbackBackground,
  color: avatarVars.color.fallbackForeground,
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: avatarVars.borderRadius.full,
  fontSize: avatarVars.fontSize.sm,
  fontWeight: avatarVars.fontWeight.medium,
  border: `1px solid ${avatarVars.color.fallbackBorder}`,
});

// Size variants recipe
export const avatarVariants = recipe({
  base: root,
  variants: {
    size: {
      sm: {
        width: avatarVars.size.sm,
        height: avatarVars.size.sm,
      },
      md: {
        width: avatarVars.size.md,
        height: avatarVars.size.md,
      },
      lg: {
        width: avatarVars.size.lg,
        height: avatarVars.size.lg,
      },
      xl: {
        width: avatarVars.size.xl,
        height: avatarVars.size.xl,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
