import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { buttonVars } from "./button.theme.css";

// Base button styles
const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: buttonVars.spacing.sm,
  whiteSpace: "nowrap",
  borderRadius: buttonVars.borderRadius.md,
  fontSize: buttonVars.fontSize.sm,
  fontWeight: buttonVars.fontWeight.medium,
  transition: "all 0.2s ease-in-out",
  outline: "none",
  border: "none",
  cursor: "pointer",

  ":disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },

  ":focus-visible": {
    outline: `3px solid ${buttonVars.color.ring}`,
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
        backgroundColor: buttonVars.color.primary,
        color: buttonVars.color.primaryForeground,
        boxShadow: buttonVars.shadow.sm,

        ":hover": {
          backgroundColor: buttonVars.color.primaryHover,
        },
      },

      destructive: {
        backgroundColor: buttonVars.color.destructive,
        color: buttonVars.color.destructiveForeground,
        boxShadow: buttonVars.shadow.sm,

        ":hover": {
          backgroundColor: buttonVars.color.destructiveHover,
        },
      },

      outline: {
        border: `1px solid ${buttonVars.color.outlineBorder}`,
        backgroundColor: buttonVars.color.outline,
        color: buttonVars.color.outlineForeground,
        boxShadow: buttonVars.shadow.sm,

        ":hover": {
          backgroundColor: buttonVars.color.outlineHover,
        },
      },

      secondary: {
        backgroundColor: buttonVars.color.secondary,
        color: buttonVars.color.secondaryForeground,
        boxShadow: buttonVars.shadow.sm,

        ":hover": {
          backgroundColor: buttonVars.color.secondaryHover,
        },
      },

      ghost: {
        backgroundColor: buttonVars.color.ghost,
        color: buttonVars.color.ghostForeground,

        ":hover": {
          backgroundColor: buttonVars.color.ghostHover,
        },
      },

      link: {
        backgroundColor: buttonVars.color.link,
        color: buttonVars.color.linkForeground,
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
        padding: `${buttonVars.spacing.sm} ${buttonVars.spacing.md}`,
      },

      sm: {
        height: "2rem", // h-8
        borderRadius: buttonVars.borderRadius.md,
        gap: buttonVars.spacing.xs,
        padding: `0 ${buttonVars.spacing.sm}`,
      },

      lg: {
        height: "2.5rem", // h-10
        borderRadius: buttonVars.borderRadius.md,
        padding: `0 ${buttonVars.spacing.lg}`,
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
