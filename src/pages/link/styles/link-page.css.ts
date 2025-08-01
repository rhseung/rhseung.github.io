import { style } from '@vanilla-extract/css';

import { linkPageVars } from './link-page.theme.css';

// 페이지 레벨 스타일
export const section = style({
  backgroundColor: linkPageVars.background,
  width: '100%',
  padding: linkPageVars.sectionPadding,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(max-width: 1023px)': {
      padding: linkPageVars.sectionPaddingMobile,
    },
  },
});

export const titleSection = style({
  backgroundColor: linkPageVars.background,
  width: '100%',
  paddingLeft: linkPageVars.titleSectionPaddingX,
  paddingRight: linkPageVars.titleSectionPaddingX,
  paddingTop: linkPageVars.titleSectionPaddingY,
  paddingBottom: linkPageVars.titleSectionPaddingY,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(max-width: 1023px)': {
      padding: linkPageVars.titleSectionPaddingMobile,
    },
  },
});

export const container = style({
  maxWidth: linkPageVars.containerMaxWidth,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: linkPageVars.containerGap,
});

// 페이지 타이틀 스타일
export const pageTitle = style({
  fontSize: linkPageVars.pageTitle,
  fontWeight: linkPageVars.pageTitleWeight,
  color: linkPageVars.pageTitleColor,
  margin: 0,
});

export const pageSubTitle = style({
  fontSize: linkPageVars.pageSubTitle,
  fontWeight: linkPageVars.pageSubTitleWeight,
  color: linkPageVars.pageSubTitleColor,
  margin: 0,
  marginBottom: linkPageVars.subTitleGap,
});

// 링크 카드 스타일
export const linkCard = style({
  backgroundColor: linkPageVars.cardBg,
  border: `${linkPageVars.cardBorder} ${linkPageVars.cardBorderColor}`,
  borderRadius: linkPageVars.cardRadius,
  padding: linkPageVars.cardPadding,
  minHeight: linkPageVars.cardMinHeight,
  display: 'flex',
  alignItems: 'center',
  gap: linkPageVars.iconGap,
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: linkPageVars.cardHoverBg,
    transform: 'translateY(-2px)',
    boxShadow:
      '0 2px 8px rgba(0, 0, 0, 0.06), inset 0 0 0 1px var(--hover-border-color, ' +
      linkPageVars.cardBorderColor +
      ')',
    borderColor:
      'var(--hover-border-color, ' + linkPageVars.cardBorderColor + ')',
  },

  '@media': {
    '(prefers-color-scheme: dark)': {
      ':hover': {
        boxShadow:
          '0 2px 8px rgba(0, 0, 0, 0.2), inset 0 0 0 1px var(--hover-border-color, ' +
          linkPageVars.cardBorderColor +
          ')',
      },
    },
  },
});

export const linkIcon = style({
  width: linkPageVars.iconSize,
  height: linkPageVars.iconSize,
  color: linkPageVars.iconColor,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const linkContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: linkPageVars.cardContentGap,
  flex: 1,
  minWidth: 0, // flex item이 줄어들 수 있도록 함
});

export const linkTitle = style({
  fontSize: linkPageVars.titleSize,
  fontWeight: linkPageVars.titleWeight,
  color: linkPageVars.title,
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexShrink: 1,
});

export const linkUsername = style({
  fontSize: linkPageVars.urlSize,
  color: linkPageVars.urlColor,
  margin: 0,
  fontFamily: 'monospace',
  marginLeft: 'auto', // 오른쪽 끝으로 밀어냄
});

export const linkColumnContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: linkPageVars.columnGap,
  width: '100%',
});

// Grid layouts
export const threeColumnGrid = style({
  display: 'grid',
  gap: linkPageVars.cardGap,
  gridTemplateColumns: '1fr',
  '@media': {
    // "(min-width: 768px)": {
    //   gridTemplateColumns: "repeat(3, 1fr)",
    // },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});
