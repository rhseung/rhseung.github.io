import { style } from "@vanilla-extract/css";
import { separatorVars } from "./separator.theme.css";

export const root = style({
  backgroundColor: separatorVars.color.border,
  flexShrink: 0,
  borderRadius: separatorVars.borderRadius,

  // 포커스 가능한 경우의 스타일
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${separatorVars.color.focus}`,
      outlineOffset: "2px",
    },

    // horizontal orientation
    '&[data-orientation="horizontal"]': {
      height: separatorVars.size.horizontal,
      width: "100%",
    },

    // vertical orientation
    '&[data-orientation="vertical"]': {
      height: "100%",
      width: separatorVars.size.vertical,
    },
  },
});
