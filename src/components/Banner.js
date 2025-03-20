import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";

const BannerLayout = styled.div`
	position: relative;
	
	width: 100%;
	height: 100vh; /* 화면 높이를 가득 채움 */
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: black; /* 배경이 검정색이 아닌 이미지일 때 대비용 */
`;

const BannerImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	
	width: 100%;
	height: 100%;
	object-fit: cover; /* 이미지를 화면에 맞게 조정 */
`;

const BannerOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Title = styled.h1`
	font-family: "Mona Sans Black", sans-serif;
	font-size: 5rem;

	color: white;
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
	z-index: 2;
	margin: 0;
`;

const SubTitle = styled.h2`
	font-family: "Mona Sans ExtraLight", sans-serif;
	font-size: 1.5rem;
	
	color: white;
	text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.7);
	z-index: 2;
	margin-top: 10px;
	margin-bottom: 0;
`;

export function Banner({ title, subTitle, wallpaper }) {
	const [themeMode, _, __] = useTheme();

	return (
		<BannerLayout>
			<BannerImage src={wallpaper} alt="banner wallpaper" />
			{themeMode === 'dark' && <BannerOverlay />}
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
		</BannerLayout>
	)
}