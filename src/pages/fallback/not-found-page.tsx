import { Separator } from "@/components";
import * as pageStyles from "./styles/not-found-page.css";
import {
  notFoundPageLightTheme,
  notFoundPageDarkTheme,
} from "./styles/not-found-page.theme.css";
import { useTheme } from "@/hooks";

// TODO: 다시 디자인하기

export const NotFoundPage: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(
    notFoundPageLightTheme,
    notFoundPageDarkTheme
  );

  return (
    <div className={themeClass}>
      <div className={pageStyles.container}>
        <div className={pageStyles.content}>
          <h1 className={pageStyles.errorCode}>404</h1>
          <Separator orientation="vertical" className={pageStyles.separator} />
          <p className={pageStyles.errorMessage}>
            This page could not be found.
          </p>
        </div>
      </div>
    </div>
  );
};
