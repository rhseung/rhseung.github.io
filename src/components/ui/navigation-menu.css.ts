import { style, globalStyle } from "@vanilla-extract/css";

import { navigationMenuVars } from "./navigation-menu.theme.css";

export const root = style({
  position: "relative",
  display: "flex",
  maxWidth: "max-content",
  flex: "1",
  alignItems: "center",
  justifyContent: "space-between",
});

export const list = style({
  width: "100%",
  display: "flex",
  listStyle: "none",
  alignItems: "center",
  justifyContent: "space-between",
  gap: navigationMenuVars.spacing["3xl"],
  margin: 0,
  padding: 0,
});

export const item = style({
  position: "relative",
});

export const trigger = style({
  display: "inline-flex",
  height: "2.25rem",
  width: "max-content",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: navigationMenuVars.borderRadius.md,
  backgroundColor: navigationMenuVars.color.triggerDefault,
  paddingLeft: navigationMenuVars.spacing.md,
  paddingRight: navigationMenuVars.spacing.md,
  paddingTop: navigationMenuVars.spacing.sm,
  paddingBottom: navigationMenuVars.spacing.sm,
  fontSize: navigationMenuVars.fontSize.sm,
  fontWeight: navigationMenuVars.fontWeight.medium,
  color: navigationMenuVars.color.triggerDefaultForeground,
  border: "none",
  cursor: "pointer",
  outline: "none",
  transition: "all 0.1s ease-in-out",

  ":hover": {
    backgroundColor: navigationMenuVars.color.triggerHover,
    color: navigationMenuVars.color.triggerHoverForeground,
  },

  ":focus": {
    backgroundColor: navigationMenuVars.color.triggerActive,
    color: navigationMenuVars.color.triggerActiveForeground,
  },

  ":disabled": {
    pointerEvents: "none",
    opacity: 0.5,
  },

  selectors: {
    '&[data-state="open"]:hover': {
      backgroundColor: navigationMenuVars.color.triggerActive,
    },
    '&[data-state="open"]': {
      color: navigationMenuVars.color.triggerActiveForeground,
      backgroundColor: navigationMenuVars.color.triggerActive,
      opacity: "0.5",
    },
    '&[data-state="open"]:focus': {
      backgroundColor: navigationMenuVars.color.triggerActive,
    },
  },

  ":focus-visible": {
    outline: `3px solid ${navigationMenuVars.color.ring}`,
    outlineOffset: "1px",
    opacity: "0.5",
  },
});

globalStyle(`${trigger} svg`, {
  position: "relative",
  top: "1px",
  marginLeft: navigationMenuVars.spacing.xs,
  width: "0.75rem",
  height: "0.75rem",
  transition: "transform 0.3s ease",
});

globalStyle(`${trigger}[data-state="open"] svg`, {
  transform: "rotate(180deg)",
});

export const content = style({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  padding: navigationMenuVars.spacing.sm,
  paddingRight: "0.625rem",

  selectors: {
    '&[data-motion^="from-"]': {
      animationName: "fadeIn",
      animationDuration: "0.2s",
    },
    '&[data-motion^="to-"]': {
      animationName: "fadeOut",
      animationDuration: "0.2s",
    },
    '&[data-motion="from-end"]': {
      animationName: "slideInFromRight",
    },
    '&[data-motion="from-start"]': {
      animationName: "slideInFromLeft",
    },
    '&[data-motion="to-end"]': {
      animationName: "slideOutToRight",
    },
    '&[data-motion="to-start"]': {
      animationName: "slideOutToLeft",
    },
  },

  "@media": {
    "(min-width: 768px)": {
      position: "absolute",
      width: "auto",
    },
  },
});

// viewport=false일 때 사용되는 스타일
globalStyle('[data-viewport="false"] .content', {
  backgroundColor: navigationMenuVars.color.popoverBackground,
  color: navigationMenuVars.color.popoverForeground,
  top: "100%",
  marginTop: "0.375rem",
  overflow: "hidden",
  borderRadius: navigationMenuVars.borderRadius.md,
  border: `1px solid ${navigationMenuVars.color.popoverBorder}`,
  boxShadow: navigationMenuVars.shadow.lg,
});

// 링크 포커스 스타일 제거
globalStyle('[data-slot="navigation-menu-link"]:focus', {
  outline: "none",
});

export const viewportWrapper = style({
  position: "absolute",
  top: "100%",
  left: "0",
  isolation: "isolate",
  zIndex: "50",
  display: "flex",
  justifyContent: "center",
});

export const viewport = style({
  transformOrigin: "top center",
  backgroundColor: navigationMenuVars.color.popoverBackground,
  color: navigationMenuVars.color.popoverForeground,
  position: "relative",
  marginTop: "0.375rem",
  height: "var(--radix-navigation-menu-viewport-height)",
  width: "100%",
  overflow: "hidden",
  borderRadius: navigationMenuVars.borderRadius.md,
  border: `1px solid ${navigationMenuVars.color.popoverBorder}`,
  boxShadow: navigationMenuVars.shadow.lg,

  selectors: {
    '&[data-state="open"]': {
      animationName: "zoomIn",
      animationDuration: "0.2s",
    },
    '&[data-state="closed"]': {
      animationName: "zoomOut",
      animationDuration: "0.2s",
    },
  },

  "@media": {
    "(min-width: 768px)": {
      width: "var(--radix-navigation-menu-viewport-width)",
    },
  },
});

export const link = style({
  display: "flex",
  flexDirection: "column",
  gap: navigationMenuVars.spacing.xs,
  borderRadius: navigationMenuVars.borderRadius.sm,
  padding: navigationMenuVars.spacing.sm,
  fontSize: navigationMenuVars.fontSize.sm,
  transition: "all 0.2s ease-in-out",
  outline: "none",
  backgroundColor: navigationMenuVars.color.linkDefault,
  color: navigationMenuVars.color.linkDefaultForeground,
  textDecoration: "none",

  ":hover": {
    backgroundColor: navigationMenuVars.color.linkHover,
    color: navigationMenuVars.color.linkHoverForeground,
  },

  ":focus": {
    backgroundColor: navigationMenuVars.color.linkActive,
    color: navigationMenuVars.color.linkActiveForeground,
  },

  selectors: {
    '&[data-active="true"]': {
      backgroundColor: navigationMenuVars.color.linkActive,
      color: navigationMenuVars.color.linkActiveForeground,
      opacity: "0.5",
    },
    '&[data-active="true"]:focus': {
      backgroundColor: navigationMenuVars.color.linkActive,
    },
    '&[data-active="true"]:hover': {
      backgroundColor: navigationMenuVars.color.linkActive,
    },
  },

  ":focus-visible": {
    outline: `3px solid ${navigationMenuVars.color.ring}`,
    outlineOffset: "1px",
    opacity: "0.5",
  },
});

globalStyle(`${link} svg:not([class*='text-'])`, {
  color: navigationMenuVars.color.mutedForeground,
});

globalStyle(`${link} svg:not([class*='size-'])`, {
  width: "1rem",
  height: "1rem",
});

export const indicator = style({
  top: "100%",
  zIndex: "1",
  display: "flex",
  height: "0.375rem",
  alignItems: "flex-end",
  justifyContent: "center",
  overflow: "hidden",

  selectors: {
    '&[data-state="visible"]': {
      animationName: "fadeIn",
      animationDuration: "0.2s",
    },
    '&[data-state="hidden"]': {
      animationName: "fadeOut",
      animationDuration: "0.2s",
    },
  },
});

export const indicatorArrow = style({
  position: "relative",
  top: "60%",
  height: "0.5rem",
  width: "0.5rem",
  transform: "rotate(45deg)",
  borderTopLeftRadius: navigationMenuVars.borderRadius.sm,
  backgroundColor: navigationMenuVars.color.indicatorBorder,
  boxShadow: navigationMenuVars.shadow.md,
});
