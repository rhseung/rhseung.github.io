import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.base,
});

export const item = style({
  display: "flex",
  gap: vars.spacing.lg,
});

export const itemIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
});

export const itemText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
});

export const linkedText = style({
  textDecoration: "none",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-0.1em",
    left: 0,
    width: 0,
    height: "0.075em",
    backgroundColor: vars.color.primary,
    transition: "width 0.3s ease-in-out",
  },
  ":hover": {
    color: vars.color.primary,
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
});
