import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

const Title = styled.h1`
	//box-sizing: border-box;
	//background-clip: content-box, padding-box;
	background: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	padding: 0 30px;
	font-family: "Mona Sans", sans-serif;
	font-weight: bold;
	font-size: 1.8rem;
	margin-bottom: 0;
	margin-top: 30px;
`;

const SubTitle = styled.h2`
	//box-sizing: border-box;
	//background-clip: content-box, padding-box;
	background: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	padding: 0 30px;
	font-family: "Mona Sans ExtraLight", "Pretendard Variable", sans-serif;
	font-weight: 300;
	font-size: 1rem;
	margin-bottom: 0;
`;

const ItemListStyle = styled.div`
	overflow: hidden;
	padding: 30px;
	background: ${({ theme }) => theme.bgColor};
	display: flex;
	flex-wrap: wrap;
	gap: ${({ gap }) => gap};

	border-bottom: ${({ theme }) => theme.borderColor};
`;

export function Slot({ title, subTitle, children, gap="1rem" }) {
	const [_, themeObject, __] = useTheme();

	return (
		<div className="w-screen">
			<Title theme={themeObject}>{title}</Title>
			<SubTitle theme={themeObject}>{subTitle}</SubTitle>
			<ItemListStyle gap={gap} theme={themeObject}>{children}</ItemListStyle>
		</div>
	);
}