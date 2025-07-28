import { style } from "@vanilla-extract/css";
import { careerPageVars } from "./career-page.theme.css";

// 페이지 레벨 스타일
export const section = style({
  backgroundColor: careerPageVars.background,
  width: "100%",
  padding: careerPageVars.sectionPadding,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: careerPageVars.sectionPaddingMobile,
    },
  },
});

export const titleSection = style({
  backgroundColor: careerPageVars.background,
  width: "100%",
  paddingLeft: careerPageVars.titleSectionPaddingX,
  paddingRight: careerPageVars.titleSectionPaddingX,
  paddingTop: careerPageVars.titleSectionPaddingY,
  paddingBottom: careerPageVars.titleSectionPaddingY,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1023px)": {
      padding: careerPageVars.titleSectionPaddingMobile,
    },
  },
});

export const container = style({
  maxWidth: careerPageVars.containerMaxWidth,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: careerPageVars.containerGap,
});

// 페이지 타이틀 스타일
export const pageTitle = style({
  fontSize: careerPageVars.pageTitle,
  fontWeight: careerPageVars.pageTitleWeight,
  color: careerPageVars.pageTitleColor,
  margin: 0,
});

export const pageSubTitle = style({
  fontSize: careerPageVars.pageSubTitle,
  fontWeight: careerPageVars.pageSubTitleWeight,
  color: careerPageVars.pageSubTitleColor,
  margin: 0,
  marginBottom: careerPageVars.subTitleGap,
});

// 섹션 콘텐츠 스타일
export const sectionContent = style({
  display: "flex",
  flexDirection: "column",
  gap: careerPageVars.sectionContentGap,
});

export const textContent = style({
  fontSize: careerPageVars.bodyText,
  fontWeight: careerPageVars.bodyTextWeight,
  color: careerPageVars.bodyTextColor,
  lineHeight: "1.6",
  margin: 0,
  marginBottom: careerPageVars.textGap,
});

export const smallText = style({
  fontSize: careerPageVars.smallText,
  color: careerPageVars.bodyTextColor,
  margin: 0,
});

export const detailText = style([
  smallText,
  {
    display: "flex",
    flexDirection: "column",
    gap: careerPageVars.detailTextGap,
    paddingLeft: careerPageVars.detailTextPaddingLeft,
  },
]);

export const goldText = style({
  color: careerPageVars.goldColor,
});

// 테이블 컨테이너 스타일
export const tableContainer = style({
  // backgroundColor: careerPageVars.cardBg,
  // border: `${careerPageVars.cardBorder} ${careerPageVars.cardBorderColor}`,
  // borderRadius: careerPageVars.cardRadius,
  // padding: careerPageVars.cardPadding,
  overflow: "hidden",
});

// 카드형 컨테이너 스타일 (텍스트 콘텐츠용)
export const contentCard = style({
  backgroundColor: careerPageVars.cardBg,
  border: `${careerPageVars.cardBorder} ${careerPageVars.cardBorderColor}`,
  borderRadius: careerPageVars.cardRadius,
  padding: careerPageVars.cardPadding,
});

// 커스텀 배지 스타일 (카드 내에서 더 나은 대비를 위해)
// Career 페이지에서 Badge 컴포넌트의 색상만 오버라이드
export const careerBadgeOutline = style({
  backgroundColor: `${careerPageVars.badgeOutlineBg} !important`,
  color: `${careerPageVars.badgeOutlineText} !important`,
  borderColor: `${careerPageVars.badgeOutlineBorder} !important`,
});

export const careerBadgeDefault = style({
  backgroundColor: `${careerPageVars.badgeDefaultBg} !important`,
  color: `${careerPageVars.badgeDefaultText} !important`,
});

export const careerBadgeSecondary = style({
  backgroundColor: `${careerPageVars.badgeSecondaryBg} !important`,
  color: `${careerPageVars.badgeSecondaryText} !important`,
});

export const customBadgeDefault = style({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "12px",
  backgroundColor: careerPageVars.badgeDefaultBg,
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "2px",
  paddingBottom: "2px",
  fontSize: careerPageVars.smallText,
  fontWeight: careerPageVars.pageSubTitleWeight,
  color: careerPageVars.badgeDefaultText,
});

export const customBadgeSecondary = style({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "12px",
  backgroundColor: careerPageVars.badgeSecondaryBg,
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "2px",
  paddingBottom: "2px",
  fontSize: careerPageVars.smallText,
  fontWeight: careerPageVars.pageSubTitleWeight,
  color: careerPageVars.badgeSecondaryText,
});

// 카드 컨테이너 스타일 (flexbox 사용)
export const cardGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: careerPageVars.sectionContentGap,
  alignItems: "flex-start",
});

// 개별 아이템 카드 스타일
export const itemCard = style({
  display: "flex",
  flexDirection: "column",
  gap: careerPageVars.cardContentGap,
  backgroundColor: careerPageVars.cardBg,
  border: `${careerPageVars.cardBorder} ${careerPageVars.cardBorderColor}`,
  borderRadius: careerPageVars.cardRadius,
  padding: careerPageVars.cardPadding,
  transition: "all 0.2s ease-in-out",
  width: "fit-content",
  minWidth: "280px",
  maxWidth: "100%",

  ":hover": {
    backgroundColor: careerPageVars.cardHoverBg,
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
  },

  "@media": {
    "(prefers-color-scheme: dark)": {
      ":hover": {
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
});

// 카드 헤더 스타일
export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: careerPageVars.cardHeaderGap,
});

export const cardTitle = style({
  fontSize: careerPageVars.bodyText,
  fontWeight: careerPageVars.pageSubTitleWeight,
  color: careerPageVars.pageTitleColor,
  margin: 0,
  flex: 1,
  whiteSpace: "nowrap",
  overflow: "visible",
});

// 로고와 함께 표시되는 제목 컨테이너
export const cardTitleWithLogo = style({
  display: "flex",
  alignItems: "center",
  gap: careerPageVars.cardTitleGap,
  flex: 1,
});

// 로고 스타일
export const cardLogo = style({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: careerPageVars.logoBg,
  border: `1px solid ${careerPageVars.logoBorderColor}`,
  flexShrink: 0,
});

export const cardPeriod = style({
  fontSize: careerPageVars.smallText,
  color: careerPageVars.bodyTextColor,
  fontFamily: "monospace",
  backgroundColor: careerPageVars.cardHoverBg,
  padding: "4px 8px",
  borderRadius: "4px",
  whiteSpace: "nowrap",
});

export const cardDetail = style({
  fontSize: careerPageVars.smallText,
  color: careerPageVars.bodyTextColor,
  margin: 0,
  lineHeight: "1.6",
});
