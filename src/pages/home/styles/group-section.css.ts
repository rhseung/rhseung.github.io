import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const groupTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginBottom: vars.spacing.sm,
});

export const groupDescription = style({
  color: vars.color.mutedForeground,
  marginBottom: vars.spacing.md,
});

export const groupTechList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.md,
});

export const groupTechTag = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: vars.color.secondary,
  color: vars.color.secondaryForeground,
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.xs,
});

export const groupButtons = style({
  display: "flex",
  gap: vars.spacing.sm,
});
