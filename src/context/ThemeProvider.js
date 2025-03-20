import React, { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/Theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const localTheme = window.localStorage.getItem("theme") || 'light';
	const [themeMode, setThemeMode] = useState(localTheme);
	const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ themeMode, setThemeMode }}>
			<StyledProvider theme={themeObject}>
				{children}
			</StyledProvider>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const { themeMode, setThemeMode } = useContext(ThemeContext);

	const toggleTheme = useCallback(() => {
		const to = themeMode === 'light' ? 'dark' : 'light';

		setThemeMode(to);
		window.localStorage.setItem("theme", to);
	}, [themeMode, setThemeMode]);

	const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

	return [themeMode, themeObject, toggleTheme];
}