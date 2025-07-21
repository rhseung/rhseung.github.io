import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";

// Base button styles
const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.sm,
  whiteSpace: "nowrap",
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  transition: "all 0.2s ease-in-out",
  outline: "none",
  border: "none",
  cursor: "pointer",

  ":disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },

  ":focus-visible": {
    outline: `3px solid ${vars.color.ring}`,
    outlineOffset: "2px",
  },
});

// SVG icon styles - using globalStyle for child elements
globalStyle(`${buttonBase} svg`, {
  pointerEvents: "none",
  width: "1rem",
  height: "1rem",
  flexShrink: 0,
});

// Button variants
export const buttonVariants = recipe({
  base: buttonBase,

  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.primary,
        color: vars.color.primaryForeground,
        boxShadow: vars.shadow.sm,

        ":hover": {
          backgroundColor: `color-mix(in srgb, ${vars.color.primary} 90%, black)`,
        },
      },

      destructive: {
        backgroundColor: vars.color.destructive,
        color: vars.color.destructiveForeground,
        boxShadow: vars.shadow.sm,

        ":hover": {
          backgroundColor: `color-mix(in srgb, ${vars.color.destructive} 90%, black)`,
        },
      },

      outline: {
        border: `1px solid ${vars.color.border}`,
        backgroundColor: vars.color.background,
        color: vars.color.foreground,
        boxShadow: vars.shadow.sm,

        ":hover": {
          backgroundColor: vars.color.accent,
          color: vars.color.accentForeground,
        },
      },

      secondary: {
        backgroundColor: vars.color.secondary,
        color: vars.color.secondaryForeground,
        boxShadow: vars.shadow.sm,

        ":hover": {
          backgroundColor: `color-mix(in srgb, ${vars.color.secondary} 80%, black)`,
        },
      },

      ghost: {
        backgroundColor: "transparent",
        color: vars.color.foreground,

        ":hover": {
          backgroundColor: vars.color.accent,
          color: vars.color.accentForeground,
        },
      },

      link: {
        backgroundColor: "transparent",
        color: vars.color.primary,
        textDecoration: "underline",
        textUnderlineOffset: "4px",

        ":hover": {
          textDecoration: "none",
        },
      },
    },

    size: {
      default: {
        height: "2.25rem", // h-9
        padding: `${vars.spacing.sm} ${vars.spacing.md}`,
      },

      sm: {
        height: "2rem", // h-8
        borderRadius: vars.borderRadius.md,
        gap: vars.spacing.xs,
        padding: `0 ${vars.spacing.sm}`,
      },

      lg: {
        height: "2.5rem", // h-10
        borderRadius: vars.borderRadius.md,
        padding: `0 ${vars.spacing.lg}`,
      },

      icon: {
        width: "2.25rem", // size-9
        height: "2.25rem",
        padding: "0",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
