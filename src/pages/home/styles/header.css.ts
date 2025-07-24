import { style } from "@vanilla-extract/css";
import { headerVars } from "./header.theme.css";

export const header = style({
  padding: `${headerVars.padding} ${headerVars.padding}`,
  backgroundColor: headerVars.background,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: headerVars.zIndex,
  backdropFilter: headerVars.blur,
  WebkitBackdropFilter: headerVars.blur,
  "@media": {
    "(min-width: 1024px)": {
      padding: `${headerVars.padding} ${headerVars.paddingLarge}`,
    },
  },
});

export const headerContainer = style({
  maxWidth: headerVars.containerMaxWidth,
  margin: "0 auto",
  width: "100%",
});

export const headerContent = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerTitle = style({
  fontSize: headerVars.titleSize,
  fontWeight: headerVars.titleWeight,
  color: headerVars.foreground,
  margin: 0,
});
