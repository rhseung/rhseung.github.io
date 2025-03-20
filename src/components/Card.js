import { darken, lighten } from "polished";
import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

// 타이틀과 서브타이틀을 위한 스타일 컴포넌트
const CardWrapper = styled.div`
	width: 300px;
	//height: 188px;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); // 그림자 효과
	font-family: "Mona Sans", "Pretendard Variable", sans-serif;
	cursor: pointer;
	transition: transform 0.3s ease-in-out; // transform 속성에 대한 전환 효과 추가
	background-color: ${({ theme }) => theme.mainColor};

	&:hover {
		transform: scale(1.02);
	}
`;

const CardHeader = styled.div`
	background: linear-gradient(${props => props.direction}, ${props => props.colors.join(", ")});
	padding: 20px;
	color: ${({ textColor }) => textColor};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 12px 12px 0 0;
`;

const Title = styled.h3`
	margin: 0;
	font-size: 1.4rem;
`;

const CardBody = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const Subtitle = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-size: 1rem;
	margin: 0;
`;

const Tags = styled.div`
	margin-top: 15px;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

const Tag = styled.span`
	background-color: ${({ theme }) => theme.tagColor};
	padding: 5px 10px;
	border-radius: 20px;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.textColor2};
`;

export function Card({ title, subtitle, colors, textColor = 'white', direction = colors.length === 1 ? "to right top" : "to right", link, tags }) {
	const [_, themeObject, __] = useTheme();

	return (
		<CardWrapper theme={themeObject} onClick={() => window.open(link)}>
			<CardHeader colors={colors.length === 1 ? [darken(0.08, colors[0]), lighten(0.08, colors[0])] : colors}
						textColor={textColor}
						direction={direction}>
				<Title>{title}</Title>
			</CardHeader>
			<CardBody>
				<Subtitle theme={themeObject}>{subtitle}</Subtitle>
				<Tags>{tags.map((tag, index) => <Tag key={index} theme={themeObject}>{tag}</Tag>)}</Tags>
			</CardBody>
		</CardWrapper>
	);
}