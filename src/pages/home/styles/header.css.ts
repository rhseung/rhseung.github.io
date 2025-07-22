import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  padding: `${vars.spacing.lg} ${vars.spacing.lg}`,
  borderBottom: `1px solid color-mix(in srgb, ${vars.color.border} 20%, transparent)`,
  backgroundColor: `color-mix(in srgb, ${vars.color.background} 80%, transparent)`,
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
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
