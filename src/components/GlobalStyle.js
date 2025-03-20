import { createGlobalStyle } from "styled-components";
import { useTheme } from "../context/ThemeProvider";

const GlobalStyle = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.bgColor};
	}
`;

export function Global() {
	const [_, themeObject, __] = useTheme();

	return <GlobalStyle theme={themeObject} />;
}
