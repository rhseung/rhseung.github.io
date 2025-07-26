import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { badgeVars } from "./badge.theme.css";

// 기본 뱃지 스타일
export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: badgeVars.borderRadius,
  border: `1px solid transparent`,
  paddingLeft: badgeVars.spacing.px,
  paddingRight: badgeVars.spacing.px,
  paddingTop: badgeVars.spacing.py,
  paddingBottom: badgeVars.spacing.py,
  fontSize: badgeVars.fontSize,
  fontWeight: badgeVars.fontWeight,
  width: "fit-content",
  whiteSpace: "nowrap",
  flexShrink: 0,
  gap: "0.25rem",
  overflow: "hidden",
  transition: "color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

  // Focus styles
  ":focus-visible": {
    borderColor: badgeVars.color.focusRing,
    outline: "none",
    boxShadow: `0 0 0 3px ${badgeVars.color.focusRing}`,
  },

  selectors: {
    // Invalid state
    '&[aria-invalid="true"]': {
      borderColor: badgeVars.color.invalidBorder,
      boxShadow: `0 0 0 3px ${badgeVars.color.invalidRing}`,
    },
  },
});

// SVG 스타일을 globalStyle로 분리
globalStyle(`${root} > svg`, {
  width: "0.75rem",
  height: "0.75rem",
  pointerEvents: "none",
});

// 뱃지 variants
export const badgeVariants = recipe({
  base: root,
  variants: {
    variant: {
      default: {
        backgroundColor: badgeVars.color.defaultBackground,
        color: badgeVars.color.defaultForeground,
        borderColor: "transparent",

        selectors: {
          "a&:hover": {
            backgroundColor: badgeVars.color.defaultHover,
          },
        },
      },
      secondary: {
        backgroundColor: badgeVars.color.secondaryBackground,
        color: badgeVars.color.secondaryForeground,
        borderColor: "transparent",

        selectors: {
          "a&:hover": {
            backgroundColor: badgeVars.color.secondaryHover,
          },
        },
      },
      destructive: {
        backgroundColor: badgeVars.color.destructiveBackground,
        color: badgeVars.color.destructiveForeground,
        borderColor: "transparent",

        selectors: {
          "a&:hover": {
            backgroundColor: badgeVars.color.destructiveHover,
          },
          "&:focus-visible": {
            boxShadow: `0 0 0 3px ${badgeVars.color.destructiveFocusRing}`,
          },
        },
      },
      outline: {
        color: badgeVars.color.outlineForeground,
        borderColor: badgeVars.color.border,
        backgroundColor: "transparent",

        selectors: {
          "a&:hover": {
            backgroundColor: badgeVars.color.outlineHover,
            color: badgeVars.color.outlineHoverForeground,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
