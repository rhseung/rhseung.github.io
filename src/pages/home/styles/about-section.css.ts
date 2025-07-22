import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const techStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.sm,
});

export const techTag = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: `color-mix(in srgb, ${vars.color.primary} 10%, transparent)`,
  color: vars.color.primary,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
});

export const contactInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.sm,
});

export const contactItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  color: vars.color.mutedForeground,
});
