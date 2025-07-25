import { style } from "@vanilla-extract/css";
import { footerVars } from "./footer.theme.css";

export const footer = style({
  padding: `${footerVars.padding} ${footerVars.paddingSide}`,
  textAlign: footerVars.textAlign,
  backgroundColor: footerVars.background,
});

export const footerContainer = style({
  maxWidth: footerVars.containerMaxWidth,
  margin: "0 auto",
  width: "100%",
});

export const footerText = style({
  color: footerVars.text,
});

export const socialLinks = style({
  display: "flex",
  justifyContent: "center",
  gap: footerVars.socialGap,
});
