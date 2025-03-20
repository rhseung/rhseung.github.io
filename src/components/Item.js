import { darken, lighten } from "polished";
import styled from "styled-components";

const Style = styled.div`
	border-radius: 30px; // 모서리 둥글게
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); // 그림자 효과
	padding: 20px; // 내부 여백
	width: ${({ width }) => width}; // 고정 너비
	height: 10px; // 고정 높이

	display: flex; /* Flexbox 활성화 */
	justify-content: center; /* 가로 중앙 정렬 */
	align-items: center; /* 세로 중앙 정렬 */
	text-align: center; /* 텍스트 정렬 */
	color: ${({ textColor }) => textColor}; // 텍스트 색상
	font-family: "Mona Sans", "Pretendard Variable", sans-serif;
	font-weight: bold;
	font-size: 18px;

	cursor: pointer;
	transition: transform 0.3s ease-in-out; // transform 속성에 대한 전환 효과 추가
	background: linear-gradient(${props => props.direction}, ${props => props.colors.join(', ')});

	&:hover {
		transform: scale(1.05);
	}
`;

export function LinkItem({ textColor = "white", width = "120px", colors, direction = colors.length === 1 ? 'to right top' : 'to right', link, children }) {
	return (
		<Style direction={direction}
			   textColor={textColor}
			   width={width}
			   colors={colors.length === 1 ? [darken(0.08, colors[0]), lighten(0.08, colors[0])] : colors}
			   onClick={() => window.open(link)}
		>
			{children}
		</Style>
	);
}

export function Item({ textColor = "white", width = "120px", colors, direction = colors.length === 1 ? 'to right top' : 'to right', children }) {
	return (
		<Style direction={direction}
			   textColor={textColor}
			   width={width}
			   colors={colors.length === 1 ? [darken(0.08, colors[0]), lighten(0.08, colors[0])] : colors}
		>
			{children}
		</Style>
	);
}