import { style, globalStyle } from "@vanilla-extract/css";
import { tableVars } from "./table.theme.css";

export const tableContainer = style({
  position: "relative",
  width: "100%",
  overflowX: "auto",
});

export const table = style({
  width: "100%",
  captionSide: "bottom",
  fontSize: tableVars.fontSize,
  color: tableVars.text,
});

export const tableHeader = style({});

globalStyle(`${tableHeader}[data-slot='table-header'] tr`, {
  borderBottom: `${tableVars.borderWidth} solid ${tableVars.border}`,
});

export const tableBody = style({});

globalStyle(`${tableBody}[data-slot='table-body'] tr:last-child`, {
  border: "0",
});

export const tableFooter = style({
  backgroundColor: tableVars.mutedBackground,
  borderTop: `${tableVars.borderWidth} solid ${tableVars.border}`,
  fontWeight: tableVars.headerFontWeight,
});

globalStyle(`${tableFooter}[data-slot='table-footer'] > tr:last-child`, {
  borderBottom: "0",
});

export const tableRow = style({
  borderBottom: `${tableVars.borderWidth} solid ${tableVars.border}`,
  transition: "colors 0.2s ease-in-out",

  ":hover": {
    backgroundColor: tableVars.hoverBackground,
  },

  selectors: {
    "&[data-state='selected']": {
      backgroundColor: tableVars.selectedBackground,
    },
  },
});

export const tableHead = style({
  height: tableVars.headerHeight,
  padding: tableVars.cellPadding,
  textAlign: "left",
  verticalAlign: "middle",
  fontWeight: tableVars.headerFontWeight,
  whiteSpace: "nowrap",
  color: tableVars.text,
});

globalStyle(`${tableHead}:has([role='checkbox'])`, {
  paddingRight: "0",
});

globalStyle(`${tableHead} [role='checkbox']`, {
  transform: "translateY(2px)",
});

export const tableCell = style({
  padding: tableVars.cellPadding,
  verticalAlign: "middle",
  whiteSpace: "nowrap",
});

globalStyle(`${tableCell}:has([role='checkbox'])`, {
  paddingRight: "0",
});

globalStyle(`${tableCell} [role='checkbox']`, {
  transform: "translateY(2px)",
});

export const tableCaption = style({
  marginTop: tableVars.captionMarginTop,
  fontSize: tableVars.fontSize,
  color: tableVars.mutedText,
});
