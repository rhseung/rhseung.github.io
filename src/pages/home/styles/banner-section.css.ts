import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// Hero section styles
export const bannerSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3xl"],
});

export const profileContainer = style({
  display: "flex",
  gap: vars.spacing["3xl"],
  alignItems: "center",
});

export const profileImage = style({
  width: "8rem",
  height: "8rem",
  borderRadius: vars.borderRadius.full,
  display: "block",
});

export const bannerTitle = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.black,
  lineHeight: 1.6,
  marginBottom: vars.spacing.lg,
  background: vars.gradient.heroTitle,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  letterSpacing: "-0.02em",
});

export const bannerDescription = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.normal,
  lineHeight: 1.6,
  marginBottom: vars.spacing.lg,
  color: vars.color.mutedForeground,
  letterSpacing: "-0.02em",
});
