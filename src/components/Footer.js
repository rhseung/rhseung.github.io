import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

const Box = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.mainColor};
	color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h1`
	font-family: "Mona Sans", sans-serif;
	font-weight: bold;
	font-size: 1.8rem;
	margin-bottom: 0;
	margin-top: 0;
	padding: 30px 30px 0;
`;

const SubTitle = styled.h2`
	font-family: "Mona Sans", "Pretendard Variable", sans-serif;
	font-weight: 350;
	font-size: 1rem;
	margin-bottom: 0;
	padding: 0 30px 30px;
`;

export function Footer({ title, subTitle }) {
	const [_, themeObject, __] = useTheme();

	return (
		<Box theme={themeObject}>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
			<SubTitle>© {new Date().getFullYear()} Hyunseung Ryu. All Rights Reserved.</SubTitle>
		</Box>
	);
}