import { Banner } from "./components/banner";
// import { Highlight } from "./components/highlight";
import { useTheme } from "@/hooks";
import {
  homePageLightTheme,
  homePageDarkTheme,
} from "./styles/home-page.theme.css";

export const HomePage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(homePageLightTheme, homePageDarkTheme);

  return (
    <div className={themeClass}>
      <Banner />
      {/* <Highlight /> */}
    </div>
  );
};
