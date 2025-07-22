import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const socialTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginBottom: vars.spacing.sm,
});

export const socialDescription = style({
  color: vars.color.mutedForeground,
  marginBottom: vars.spacing.md,
});

export const socialTechList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.md,
});

export const socialTechTag = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: vars.color.secondary,
  color: vars.color.secondaryForeground,
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.xs,
});

export const socialButtons = style({
  display: "flex",
  gap: vars.spacing.sm,
});
