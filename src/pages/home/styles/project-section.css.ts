import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const projectTitle = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.foreground,
  // marginBottom: vars.spacing.sm,
});

export const projectDescription = style({
  color: vars.color.mutedForeground,
  // marginBottom: vars.spacing.md,
});

export const projectTechList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.spacing.xs,
  // marginBottom: vars.spacing.md,
});

export const projectTechTag = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: vars.color.background,
  color: vars.color.secondaryForeground,
  borderRadius: vars.borderRadius.sm,
  fontSize: vars.fontSize.xs,
});

export const projectButtons = style({
  display: "flex",
  gap: vars.spacing.sm,
});

// Card styles
export const card = style({
  width: "100%",
  display: "flex",
  gap: vars.spacing["2xl"],
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const cardImage = style({
  width: "400px",
  backgroundColor: vars.color.muted,
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: vars.borderRadius.lg,
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: "200px",
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  // paddingTop: vars.spacing.sm,
  // paddingBottom: vars.spacing.sm,
  justifyContent: "space-between",
  minHeight: "200px",
  "@media": {
    "(max-width: 768px)": {
      minHeight: "auto",
    },
  },
});

export const cardContentTop = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.md,
});

export const cardContentBottom = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.md,
  // marginTop: "auto",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing["3xl"],
  width: "100%",
  // "@media": {
  //   "(min-width: 768px)": {
  //     gridTemplateColumns: "repeat(2, 1fr)",
  //   },
  //   "(min-width: 1024px)": {
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //   },
  // },
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
