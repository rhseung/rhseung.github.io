import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const experienceList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["2xl"],
});

export const experienceItem = style({
  borderLeft: `4px solid ${vars.color.primary}`,
  paddingLeft: vars.spacing.lg,
});

export const experienceDate = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  marginBottom: vars.spacing.sm,
});

export const experienceDateText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.mutedForeground,
});

export const experiencePosition = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginBottom: vars.spacing.xs,
});

export const experienceCompany = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.primary,
  marginBottom: vars.spacing.sm,
});

export const experienceDescription = style({
  color: vars.color.mutedForeground,
});
