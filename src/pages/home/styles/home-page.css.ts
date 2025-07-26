import { style } from "@vanilla-extract/css";
import { homePageVars } from "./home-page.theme.css";

// Banner section styles
export const bannerSection = style({
  display: "flex",
  flexDirection: "column",
  gap: homePageVars.bannerSectionGap,
  backgroundColor: homePageVars.bannerBackground,
  width: "100%",
  minHeight: "100vh",
  padding: homePageVars.sectionPadding,
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: homePageVars.sectionPaddingMobile,
    },
  },
});

export const bannerContainer = style({
  maxWidth: homePageVars.containerMaxWidth,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: homePageVars.bannerSectionGap,
});

export const profileContainer = style({
  display: "flex",
  gap: homePageVars.profileGap,
  alignItems: "center",
});

export const profileImage = style({
  width: "8rem",
  height: "8rem",
  borderRadius: homePageVars.profileRadius,
  display: "block",
});

export const bannerTitle = style({
  fontSize: homePageVars.bannerTitleSize,
  fontWeight: homePageVars.bannerTitleWeight,
  lineHeight: 1.6,
  marginBottom: homePageVars.titleMargin,
  background: homePageVars.titleGradient,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: homePageVars.bannerTitle,
  letterSpacing: "-0.02em",
});

export const bannerDescription = style({
  fontSize: homePageVars.bannerDescriptionSize,
  fontWeight: homePageVars.bannerDescriptionWeight,
  lineHeight: 1.6,
  marginBottom: homePageVars.descriptionMargin,
  color: homePageVars.bannerDescription,
  letterSpacing: "-0.02em",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: homePageVars.infoGap,
});

export const infoItem = style({
  display: "flex",
  alignItems: "center",
  gap: homePageVars.itemGap,
});

export const infoItemIcon = style({
  color: homePageVars.infoIcon,
  transition: "color 0.2s ease-in-out",
});

export const infoItemText = style({
  fontSize: homePageVars.infoSize,
  fontWeight: homePageVars.infoWeight,
  color: homePageVars.infoText,
});

export const infoItemLinkedText = style({
  textDecoration: "none",
  color: homePageVars.linkDefault,
  transition: "color 0.2s ease-in-out",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-0.1em",
    left: 0,
    width: 0,
    height: "0.075em",
    backgroundColor: homePageVars.linkUnderline,
    transition: "width 0.3s ease-in-out",
  },
  ":hover": {
    color: homePageVars.linkHover,
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
});

// Highlight section styles
export const highlightSection = style({
  backgroundColor: homePageVars.highlightBackground,
  width: "100%",
  padding: homePageVars.sectionPadding,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: homePageVars.sectionPaddingMobile,
    },
  },
});

export const highlightContainer = style({
  maxWidth: homePageVars.containerMaxWidth,
  width: "100%",
});

export const highlightTitle = style({
  fontSize: homePageVars.highlightTitleSize,
  fontWeight: homePageVars.highlightTitleWeight,
  color: homePageVars.highlightTitle,
  margin: 0,
  marginBottom: homePageVars.titleMarginBottom,
});

export const highlightDescription = style({
  color: homePageVars.highlightDescription,
  margin: 0,
  marginBottom: homePageVars.descriptionMarginBottom,
});

export const techList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: homePageVars.techGap,
});

export const buttons = style({
  display: "flex",
  gap: homePageVars.buttonGap,
});

// Card styles
export const card = style({
  width: "100%",
  display: "flex",
  gap: homePageVars.cardGap,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const cardImage = style({
  width: homePageVars.imageWidth,
  backgroundColor: homePageVars.imageBg,
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: homePageVars.imageRadius,
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: homePageVars.imageHeightMobile,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: homePageVars.cardMinHeight,
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
  gap: homePageVars.cardContentGap,
  marginTop: "auto",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: homePageVars.containerGap,
  width: "100%",
});

// Grid layouts
export const twoColumnGrid = style({
  display: "grid",
  gap: homePageVars.gridGap,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});
