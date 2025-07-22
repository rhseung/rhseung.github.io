import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// Hero section styles
export const heroSection = style({
  position: "relative",
  paddingTop: vars.spacing["3xl"],
  paddingBottom: vars.spacing["2xl"],
  textAlign: "left",
  padding: `${vars.spacing["3xl"]} ${vars.spacing.lg}`,
  "@media": {
    "(min-width: 1024px)": {
      padding: `${vars.spacing["3xl"]} ${vars.spacing["2xl"]}`,
    },
  },
});

export const profileImage = style({
  width: "8rem",
  height: "8rem",
  borderRadius: vars.borderRadius.full,
  margin: `0 0 ${vars.spacing.lg} 0`,
  boxShadow: "0 0 20px 0 rgb(0 0 0 / 0.15)",
  display: "block",
});

export const heroTitle = style({
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

export const heroDescription = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.normal,
  lineHeight: 1.6,
  marginBottom: vars.spacing.lg,
  color: vars.color.mutedForeground,
  letterSpacing: "-0.02em",
});
