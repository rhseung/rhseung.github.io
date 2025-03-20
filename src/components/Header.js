import { parseToRgb } from "polished";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

// blur header
const HeaderStyle = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 55px;
	opacity: ${(props) => (props.visible ? 1 : 0)};
	transform: ${(props) => (props.visible ? 'translateY(0)' : 'translateY(-55px)')};
	transition: opacity 0.3s ease, transform 0.3s ease;
	background: rgba(${({ theme }) => {
		const { red, green, blue } = parseToRgb(theme.bgColor);
		return `${red}, ${green}, ${blue}, 0.5`;
	}});
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	z-index: 1000; // 다른 콘텐츠 위에 표시되도록 설정
	font-family: "Mona Sans", serif;
	font-weight: bold;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // 헤더에 그림자 효과 추가

	// 헤더 텍스트 스타일링
	h1 {
		color: ${({ theme }) => theme.textColor};
		font-size: 24px;
		cursor: pointer;
		transition: color 0.2s ease;
		
		&:hover {
			color: ${({ theme }) => theme.activeTextColor};
		}
	}
`;

const ThemeToggleButton = styled.button`
	justify-content: center; /* 가로 중앙 정렬 */
	align-items: center; /* 세로 중앙 정렬 */
	text-align: center; /* 텍스트 정렬 */
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.textColor};
	border: none;
	padding: 8px 16px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	margin-right: 30px;
`;

export function Header({ children }) {
	const [visible, setVisible] = useState(false);
	const [themeMode, themeObject, toggleTheme] = useTheme();

	useEffect(() => {
		const handleScroll = () => setVisible(window.scrollY > 1);
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return <HeaderStyle visible={visible} theme={themeObject}>
		{children}
		<ThemeToggleButton theme={themeObject} onClick={toggleTheme}>
			{themeMode === "light" ? "🌙" : "☀️"}
		</ThemeToggleButton>
	</HeaderStyle>;
}