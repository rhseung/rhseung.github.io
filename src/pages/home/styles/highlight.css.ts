import { style } from "@vanilla-extract/css";
import { highlightVars } from "./highlight.theme.css";

export const section = style({
  backgroundColor: highlightVars.background,
  width: "100%",
  padding: highlightVars.sectionPadding,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: highlightVars.sectionPaddingMobile,
    },
  },
});

export const container = style({
  maxWidth: highlightVars.containerMaxWidth,
  width: "100%",
});

export const title = style({
  fontSize: highlightVars.titleSize,
  fontWeight: highlightVars.titleWeight,
  color: highlightVars.title,
  margin: 0,
  marginBottom: highlightVars.titleMarginBottom,
});

export const description = style({
  color: highlightVars.description,
  margin: 0,
  marginBottom: highlightVars.descriptionMarginBottom,
});

export const techList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: highlightVars.techGap,
});

export const buttons = style({
  display: "flex",
  gap: highlightVars.buttonGap,
});

// Card styles
export const card = style({
  width: "100%",
  display: "flex",
  gap: highlightVars.cardGap,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const cardImage = style({
  width: highlightVars.imageWidth,
  backgroundColor: highlightVars.imageBg,
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: highlightVars.imageRadius,
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: highlightVars.imageHeightMobile,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: highlightVars.cardMinHeight,
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
  gap: highlightVars.cardContentGap,
  marginTop: "auto",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: highlightVars.containerGap,
  width: "100%",
});

// Grid layouts
export const twoColumnGrid = style({
  display: "grid",
  gap: highlightVars.gridGap,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
