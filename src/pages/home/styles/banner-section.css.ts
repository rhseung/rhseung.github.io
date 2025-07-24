import { style } from "@vanilla-extract/css";
import { bannerVars } from "./banner-section.theme.css";

export const bannerSection = style({
  display: "flex",
  flexDirection: "column",
  gap: bannerVars.sectionGap,
  backgroundColor: bannerVars.background,
  width: "100%",
  minHeight: "100vh",
  padding: bannerVars.sectionPadding,
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: bannerVars.sectionPaddingMobile,
    },
  },
});

export const bannerContainer = style({
  maxWidth: bannerVars.containerMaxWidth,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: bannerVars.sectionGap,
});

export const profileContainer = style({
  display: "flex",
  gap: bannerVars.profileGap,
  alignItems: "center",
});

export const profileImage = style({
  width: "8rem",
  height: "8rem",
  borderRadius: bannerVars.profileRadius,
  display: "block",
});

export const bannerTitle = style({
  fontSize: bannerVars.titleSize,
  fontWeight: bannerVars.titleWeight,
  lineHeight: 1.6,
  marginBottom: bannerVars.titleMargin,
  background: bannerVars.titleGradient,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: bannerVars.title,
  letterSpacing: "-0.02em",
});

export const bannerDescription = style({
  fontSize: bannerVars.descriptionSize,
  fontWeight: bannerVars.descriptionWeight,
  lineHeight: 1.6,
  marginBottom: bannerVars.descriptionMargin,
  color: bannerVars.description,
  letterSpacing: "-0.02em",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: bannerVars.infoGap,
});

export const infoItem = style({
  display: "flex",
  gap: bannerVars.itemGap,
});

export const infoItemIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: bannerVars.infoIcon,
  transition: "color 0.2s ease-in-out",
});

export const infoItemText = style({
  fontSize: bannerVars.infoSize,
  fontWeight: bannerVars.infoWeight,
  color: bannerVars.infoText,
});

export const infoItemLinkedText = style({
  textDecoration: "none",
  color: bannerVars.linkDefault,
  transition: "color 0.2s ease-in-out",
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-0.1em",
    left: 0,
    width: 0,
    height: "0.075em",
    backgroundColor: bannerVars.linkUnderline,
    transition: "width 0.3s ease-in-out",
  },
  ":hover": {
    color: bannerVars.linkHover,
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
});
