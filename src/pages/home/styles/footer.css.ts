import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const footer = style({
  padding: `${vars.spacing["2xl"]} ${vars.spacing.lg}`,
  borderTop: `1px solid ${vars.color.border}`,
  textAlign: "center",
});

export const footerText = style({
  color: vars.color.mutedForeground,
  marginBottom: vars.spacing.md,
});

export const socialLinks = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.spacing.md,
});
