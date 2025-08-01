import { style } from '@vanilla-extract/css';

import { projectPageVars } from './project-page.theme.css';

// 페이지 레벨 스타일
export const section = style({
  backgroundColor: projectPageVars.background,
  width: '100%',
  padding: projectPageVars.sectionPadding,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(max-width: 1023px)': {
      padding: projectPageVars.sectionPaddingMobile,
    },
  },
});

export const titleSection = style({
  backgroundColor: projectPageVars.background,
  width: '100%',
  paddingLeft: projectPageVars.titleSectionPaddingX,
  paddingRight: projectPageVars.titleSectionPaddingX,
  paddingTop: projectPageVars.titleSectionPaddingY,
  paddingBottom: projectPageVars.titleSectionPaddingY,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(max-width: 1023px)': {
      padding: projectPageVars.titleSectionPaddingMobile,
    },
  },
});

export const container = style({
  maxWidth: projectPageVars.containerMaxWidth,
  width: '100%',
});

export const separatorSection = style({
  backgroundColor: projectPageVars.background,
  width: '100%',
  marginLeft: projectPageVars.titleSectionPaddingX,
  marginRight: projectPageVars.titleSectionPaddingX,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(max-width: 1023px)': {
      marginLeft: projectPageVars.titleSectionPaddingMobile,
      marginRight: projectPageVars.titleSectionPaddingMobile,
    },
  },
});

// 페이지 타이틀 스타일
export const pageTitle = style({
  fontSize: projectPageVars.pageTitle,
  fontWeight: projectPageVars.pageTitleWeight,
  color: projectPageVars.pageTitleColor,
  margin: 0,
});

// 프로젝트 카드 스타일
export const projectTitle = style({
  fontSize: projectPageVars.titleSize,
  fontWeight: projectPageVars.titleWeight,
  color: projectPageVars.title,
  margin: 0,
  marginBottom: projectPageVars.titleMarginBottom,
});

export const projectDesc = style({
  color: projectPageVars.description,
  margin: 0,
  marginBottom: projectPageVars.descriptionMarginBottom,
  lineHeight: '1.6',
});

export const techList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: projectPageVars.techGap,
});

export const buttons = style({
  display: 'flex',
  gap: projectPageVars.buttonGap,
});

// Card styles
export const card = style({
  width: '100%',
  display: 'flex',
  gap: projectPageVars.cardGap,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const cardImage = style({
  width: projectPageVars.imageWidth,
  backgroundColor: projectPageVars.imageBg,
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: projectPageVars.imageRadius,
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
      height: projectPageVars.imageHeightMobile,
    },
  },
});

export const cardContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: projectPageVars.cardMinHeight,
  '@media': {
    '(max-width: 768px)': {
      minHeight: 'auto',
    },
  },
});

export const cardContentTop = style({
  display: 'flex',
  flexDirection: 'column',
});

export const cardContentBottom = style({
  display: 'flex',
  flexDirection: 'column',
  gap: projectPageVars.cardContentGap,
  marginTop: 'auto',
});

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: projectPageVars.containerGap,
  width: '100%',
});

// Grid layouts
export const twoColumnGrid = style({
  display: 'grid',
  gap: projectPageVars.gridGap,
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});
