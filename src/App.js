import { FaGithub, FaInstagram, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { ImNpm } from "react-icons/im";
import { SiC, SiCplusplus, SiKotlin, SiPypi, SiPytorch, SiTypescript, SiVelog, SiModrinth } from "react-icons/si";
import styled, { createGlobalStyle } from "styled-components";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Global } from "./components/GlobalStyle";

import { Header } from "./components/Header";
import { Item, LinkItem } from "./components/Item";
import { Slot } from "./components/Slot";
import { useTheme } from "./context/ThemeProvider";
import wallpaper from "./image/wallpaper.jpg";
import gsa from "./image/gsa.png";
import gist from "./image/gist.png";

export default function App() {
	const [themeMode, themeObject, toggleTheme] = useTheme();

	return (
		<>
			<Global />
			<Banner wallpaper={wallpaper} title="Rhseung" subTitle="Lorem ipsum dolor sit amet" />
			<Header>
				<h1 onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>Hyunseung Ryu</h1>
			</Header>
			<Slot title="Me" subTitle="안녕하세요, 류현승입니다.">
				<Item width="150px" colors={[themeMode === "light" ? "#000000" : "#ffffff"]} textColor={[themeMode === "light" ? "#ffffff" : "#000000"]}>
					2006년 2월 24일
				</Item>
				<Item width="350px" colors={["#52b3e4", "#0083c6"]}>
					<img src={gsa} alt="gsa logo" width="25px" style={{ display: "inline-block", marginRight: "5px" }} />
					과학영재학교 광주과학고등학교 39기
				</Item>
				<Item width="150px" colors={["#df3127", "#c1272d"]}>
					<img src={gist} alt="gist logo" width="25px" style={{ display: "inline-block", marginRight: "5px" }} />
					GIST 25학번
				</Item>
			</Slot>
			<Slot title="Profiles" subTitle="소셜 미디어와 개발 사이트 프로필입니다.">
				<LinkItem colors={["#3b2e60"]} link="https://github.com/rhseung">
					<FaGithub style={{"margin-right": 5}}/>
					GitHub
				</LinkItem>
				<LinkItem colors={["#c63ea4"]} link="https://www.instagram.com/r._hseung/#">
					<FaInstagram style={{"margin-right": 5}}/>
					Instagram
				</LinkItem>
				<LinkItem colors={["#21c998"]} link="https://velog.io/@rhseung224">
					<SiVelog style={{"margin-right": 5}}/>
					Velog
				</LinkItem>
				<LinkItem colors={["#00af5c"]} link="https://modrinth.com/user/Rhseung">
					<SiModrinth style={{"margin-right": 5}}/>
					Modrinth
				</LinkItem>
				<LinkItem colors={["#cc3534"]} link="https://www.npmjs.com/~rhseung">
					<ImNpm style={{"margin-right": 5}}/>
					npm
				</LinkItem>
				<LinkItem colors={["#3776ab", "#37ab65"]} link="https://pypi.org/user/rhseung/">
					<SiPypi style={{"margin-right": 5}}/>
					PyPI
				</LinkItem>
			</Slot>
			<Slot title="Skills" subTitle="제가 해 봤던, 그리고 할 수 있는 것들입니다.">
				<Item colors={["#8051ff", "#e4445c"]}>
					<SiKotlin style={{"margin-right": 5}}/>
					Kotlin
				</Item>
				<Item colors={["#f8781d"]}>
					<FaJava style={{"margin-right": 5}}/>
					Java
				</Item>
				<Item colors={["#3776ab"]}>
					<FaPython style={{"margin-right": 5}}/>
					Python
				</Item>
				<Item colors={["#34475c"]}>
					<SiC style={{"margin-right": 5}}/>
					C
				</Item>
				<Item colors={["#00599c"]}>
					<SiCplusplus style={{"margin-right": 5}}/>
					C++
				</Item>
				<Item colors={["#44883e"]}>
					<FaNodeJs style={{"margin-right": 5}}/>
					Node.js
				</Item>
				<Item colors={["#3178c6"]}>
					<SiTypescript style={{"margin-right": 5}}/>
					Typescript
				</Item>
				<Item colors={["#ef4b28"]}>
					<SiPytorch style={{"margin-right": 5}}/>
					Pytorch
				</Item>
				<Item colors={["#00758f"]}>
					<GrMysql style={{"margin-right": 5}}/>
					MySQL
				</Item>
				<Item colors={["#61dbfb"]}>
					<FaReact style={{"margin-right": 5}}/>
					React
				</Item>
			</Slot>
			<Slot title="Projects" subTitle="제가 개발한 프로젝트입니다." gap="2rem">
				<Card
					title="github/gsa-bot"
					subtitle="광주과학고등학교에서 사용하는 공식 카카오톡 봇입니다."
					colors={["#f9e000", "#f9e000"]}
					textColor="#371c1d"
					link="https://github.com/GSAStudentCouncil/gsa-bot"
					tags={["Node.js", "MySQL"]}
				/>
				<Card
					title="github/particles"
					subtitle="SFML 프레임워크로 제작한 2D 강체 물리 엔진. 2024 GSA R&E."
					colors={["#dc258c", "#6aab73"]}
					link="https://github.com/rhseung/particles"
					tags={["C++", "SFML", "Physics"]}
				/>
				<Card
					title="github/siunits"
					subtitle="SI 단위계를 파이썬에서 사용할 수 있게 하는 라이브러리입니다. numpy 지원."
					colors={["#3776ab", "#37ab65"]}
					link="https://github.com/rhseung/siunits"
					tags={["Python", "Math", "Library"]}
				/>
				<Card
					title="modrinth/glance"
					subtitle="Minecraft mod that focused on 'GUI Tweaks for Minecraft'."
					colors={["#00af5c"]}
					link="https://modrinth.com/mod/glance"
					tags={["Java", "Kotlin", "Mod"]}
				/>
				<Card
					title="github/timetable"
					subtitle="광주과학고등학교의 시간표 엑셀 데이터를 가공하여 사용자에게 제공하는 앱."
					colors={["#6a11cb", "#2575fc"]}
					link="https://github.com/gsa-projects/timetable"
					tags={["Python", "Data Processing"]}
				/>
				<Card
					title="npm/pattern"
					subtitle="Easy handling of JavaScript regular expressions."
					colors={["#cc4f4f"]}
					link="https://www.npmjs.com/package/@essentialib/pattern"
					tags={["Node.js", "Regex", "Library"]}
				/>
				<Card
					title="github/datetime"
					subtitle="바닐라 JS의 Date 객체의 단점을 보완, 편리하게 만든 라이브러리."
					colors={["#ed670f", "#e7fc25"]}
					link="https://github.com/essentialib/datetime"
					tags={["Node.js", "Date", "NLP"]}
				/>
				<Card
					title="github/ranges"
					subtitle="TS/JS 범용 구간, 범위, 쉬운 반복자 모듈, ranges."
					colors={["#3178c6"]}
					link="https://github.com/essentialib/datetime"
					tags={["Typescript", "Library", "Range"]}
				/>
				<Card
					title="github/console.log"
					subtitle="JS의 console.log 함수의 구현체. 비 node 환경에서도 사용 가능."
					colors={["#373a43"]}
					link="https://github.com/rhseung/console.log"
					tags={["Node.js", "Library", "Impl"]}
				/>
				<Card
					title="github/tetris-placer"
					subtitle="테트리스 빌드를 연구할 수 있도록 자유롭게 테트로미노들을 배치할 수 있는 툴."
					colors={["#c3adda"]}
					link="https://github.com/rhseung/tetris-placer"
					tags={["Game", "Tetris"]}
				/>
				<Card
					title="YOLOv3 re-impl"
					subtitle="Object Detection 모델인 YOLOv3를 Pytorch로 다시 구현한 프로젝트. 일부 코드 비공개 (용량 이슈)"
					colors={["#ef4b28"]}
					link="https://github.com/gsa-projects/2023-rne"
					tags={["AI", "Pytorch"]}
				/>
			</Slot>
			<Footer title="Hyunseung Ryu" subTitle="Lorem ipsum dolor sit amet" />
		</>
	);
}