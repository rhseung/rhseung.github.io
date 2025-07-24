import { style } from "@vanilla-extract/css";
import { projectVars } from "./project-section.theme.css";

export const projectSection = style({
  backgroundColor: projectVars.background,
  width: "100%",
  minHeight: "100vh",
  padding: projectVars.sectionPadding,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: projectVars.sectionPaddingMobile,
    },
  },
});

export const projectContainer = style({
  maxWidth: projectVars.containerMaxWidth,
  width: "100%",
});

export const projectTitle = style({
  fontSize: projectVars.titleSize,
  fontWeight: projectVars.titleWeight,
  color: projectVars.title,
  margin: 0,
  marginBottom: projectVars.titleMarginBottom,
});

export const projectDescription = style({
  color: projectVars.description,
  margin: 0,
  marginBottom: projectVars.descriptionMarginBottom,
});

export const projectTechList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: projectVars.techGap,
});

export const projectTechTag = style({
  padding: `${projectVars.techPadding} ${projectVars.techPaddingSide}`,
  backgroundColor: projectVars.techBg,
  color: projectVars.techText,
  borderRadius: projectVars.techRadius,
  fontSize: projectVars.techSize,
});

export const projectButtons = style({
  display: "flex",
  gap: projectVars.buttonGap,
});

// Card styles
export const card = style({
  width: "100%",
  display: "flex",
  gap: projectVars.cardGap,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const cardImage = style({
  width: projectVars.imageWidth,
  backgroundColor: projectVars.imageBg,
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: projectVars.imageRadius,
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: projectVars.imageHeightMobile,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: projectVars.cardMinHeight,
  "@media": {
    "(max-width: 768px)": {
      minHeight: "auto",
    },
  },
});

export const cardContentTop = style({
  display: "flex",
  flexDirection: "column",
});

export const cardContentBottom = style({
  display: "flex",
  flexDirection: "column",
  gap: projectVars.cardContentGap,
  marginTop: "auto",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: projectVars.containerGap,
  width: "100%",
});

// Grid layouts
export const twoColumnGrid = style({
  display: "grid",
  gap: projectVars.gridGap,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
