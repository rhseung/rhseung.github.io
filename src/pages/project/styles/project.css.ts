import { style } from "@vanilla-extract/css";
import { projectVars } from "./project.theme.css";

export const section = style({
  backgroundColor: projectVars.background,
  width: "100%",
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

export const titleSection = style({
  backgroundColor: projectVars.background,
  width: "100%",
  paddingLeft: projectVars.titleSectionPaddingX,
  paddingRight: projectVars.titleSectionPaddingX,
  paddingTop: projectVars.titleSectionPaddingY,
  paddingBottom: projectVars.titleSectionPaddingY,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: projectVars.titleSectionPaddingMobile,
    },
  },
});

export const container = style({
  maxWidth: projectVars.containerMaxWidth,
  width: "100%",
});

export const separatorSection = style({
  backgroundColor: projectVars.background,
  width: "100%",
  marginLeft: projectVars.titleSectionPaddingX,
  marginRight: projectVars.titleSectionPaddingX,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      marginLeft: projectVars.titleSectionPaddingMobile,
      marginRight: projectVars.titleSectionPaddingMobile,
    },
  },
});

export const projectTitle = style({
  fontSize: projectVars.titleSize,
  fontWeight: projectVars.titleWeight,
  color: projectVars.title,
  margin: 0,
  marginBottom: projectVars.titleMarginBottom,
});

export const projectDesc = style({
  color: projectVars.description,
  margin: 0,
  marginBottom: projectVars.descriptionMarginBottom,
});

export const techList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: projectVars.techGap,
});

export const buttons = style({
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
