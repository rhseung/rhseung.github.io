import { style, globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

// Global styles
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
});

// Layout styles
export const container = style({
  minHeight: "100vh",
  backgroundColor: vars.color.background,
});

export const section = style({
  padding: `${vars.spacing["3xl"]} ${vars.spacing.lg}`,
  "@media": {
    "(min-width: 1024px)": {
      padding: `${vars.spacing["3xl"]} ${vars.spacing["2xl"]}`,
    },
  },
});

export const sectionAlternate = style([
  section,
  {
    backgroundColor: `color-mix(in srgb, ${vars.color.muted} 50%, transparent)`,
  },
]);

export const maxWidthContainer = style({
  maxWidth: "64rem",
  margin: "0 auto",
});

export const maxWidthWideContainer = style({
  maxWidth: "72rem",
  margin: "0 auto",
});

// Header styles
export const header = style({
  padding: `${vars.spacing.lg} ${vars.spacing.lg}`,
  borderBottom: `1px solid color-mix(in srgb, ${vars.color.border} 20%, transparent)`,
  backgroundColor: vars.color.background,
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(8px)",
  "@media": {
    "(min-width: 1024px)": {
      padding: `${vars.spacing.lg} ${vars.spacing["2xl"]}`,
    },
  },
});

export const headerContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  margin: 0,
});

// Typography styles
export const heading1 = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1.1,
  color: vars.color.foreground,
  "@media": {
    "(min-width: 640px)": {
      fontSize: vars.fontSize["6xl"],
    },
  },
});

export const heading2 = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1.2,
  color: vars.color.foreground,
});

export const heading3 = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
});

export const heading4 = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.primary,
});

export const textMuted = style({
  color: vars.color.mutedForeground,
});

export const textPrimary = style({
  color: vars.color.primary,
});

// Hero section styles
export const heroSection = style([
  section,
  {
    position: "relative",
    paddingTop: `${vars.spacing["3xl"]}`,
    paddingBottom: `${vars.spacing["2xl"]}`,
    textAlign: "center",
  },
]);

export const profileImage = style({
  width: "8rem",
  height: "8rem",
  borderRadius: vars.borderRadius.full,
  margin: `0 auto ${vars.spacing.lg}`,
  boxShadow: vars.shadow.lg,
  display: "block",
});

export const heroTitle = style([
  heading1,
  {
    marginBottom: vars.spacing.lg,
  },
]);

export const heroDescription = style({
  marginTop: vars.spacing.lg,
  fontSize: vars.fontSize.lg,
  lineHeight: 1.6,
  color: vars.color.mutedForeground,
});

export const buttonGroup = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.md,
  flexWrap: "wrap",
});

// Card styles
export const card = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.spacing.lg,
  backgroundColor: vars.color.card,
  transition: "box-shadow 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      boxShadow: vars.shadow.lg,
    },
  },
});

export const cardGrid = style({
  display: "grid",
  gap: vars.spacing.lg,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

// Tech stack styles
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

export const projectTechTag = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: vars.color.secondary,
  color: vars.color.secondaryForeground,
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.xs,
});

// Grid layouts
export const twoColumnGrid = style({
  display: "grid",
  gap: vars.spacing["2xl"],
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

// Contact info styles
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

// Experience timeline styles
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

export const experiencePosition = style([
  heading3,
  {
    marginBottom: vars.spacing.xs,
  },
]);

export const experienceCompany = style([
  heading4,
  {
    marginBottom: vars.spacing.sm,
  },
]);

export const experienceDescription = style({
  color: vars.color.mutedForeground,
});

// Footer styles
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

// Section headers
export const sectionHeader = style({
  textAlign: "center",
  marginBottom: vars.spacing["2xl"],
});

export const sectionTitle = style([
  heading2,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.spacing.sm,
  },
]);

// Project card specific styles
export const projectTitle = style([
  heading3,
  {
    marginBottom: vars.spacing.sm,
  },
]);

export const projectDescription = style({
  color: vars.color.mutedForeground,
  marginBottom: vars.spacing.md,
});

export const projectTechList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.xs,
  marginBottom: vars.spacing.md,
});

export const projectButtons = style({
  display: "flex",
  gap: vars.spacing.sm,
});
