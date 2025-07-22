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

export const linkedItem = style({
  display: "flex",
  gap: vars.spacing.xs,
});

export const itemIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
});

export const linkIcon = style({
  width: "1.25rem",
  height: "1.25rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
});

export const linkContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.lg,
  ":hover": {
    color: vars.color.primary,
  },
});

export const linkContainerIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
  selectors: {
    [`${linkContainer}:hover &`]: {
      color: vars.color.primary,
    },
  },
});

export const schoolLinkContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.lg,
  ":hover": {
    color: vars.color.primary,
  },
});

export const schoolIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
  selectors: {
    [`${schoolLinkContainer}:hover &`]: {
      color: "#0ea5e9", // sky-500
    },
  },
});

export const schoolLink = style({
  color: vars.color.mutedForeground,
  textUnderlineOffset: "4px",
  transition: "color 0.2s ease-in-out",
  textDecorationThickness: "1.5px",
  selectors: {
    [`${schoolLinkContainer}:hover &`]: {
      color: "#0ea5e9", // sky-500
    },
  },
});

export const graduateLinkContainer = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.lg,
  ":hover": {
    color: vars.color.primary,
  },
});

export const graduateIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: vars.color.mutedForeground,
  transition: "color 0.2s ease-in-out",
  selectors: {
    [`${graduateLinkContainer}:hover &`]: {
      color: "#ef4444", // red-500
    },
  },
});

export const graduateLink = style({
  color: vars.color.mutedForeground,
  textUnderlineOffset: "4px",
  transition: "color 0.2s ease-in-out",
  textDecorationThickness: "1.5px",
  selectors: {
    [`${graduateLinkContainer}:hover &`]: {
      color: "#ef4444", // red-500
    },
  },
});

export const itemText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary,
});

export const itemLink = style({
  color: vars.color.mutedForeground,
  textUnderlineOffset: "4px",
  transition: "color 0.2s ease-in-out",
  textDecorationThickness: "1.5px",
  textDecoration: "none",
  selectors: {
    [`${linkContainer}:hover &`]: {
      color: vars.color.primary,
      textDecoration: "underline",
    },
  },
});
