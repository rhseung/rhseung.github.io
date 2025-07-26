import { Button } from "@/components/ui/button";
import * as footerStyles from "./footer.css";
import { footerLightTheme, footerDarkTheme } from "./footer.theme.css";
import { useTheme } from "@/hooks/use-theme";
import { IconMail, IconBrandGithub } from "@tabler/icons-react";

export const Footer: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(footerLightTheme, footerDarkTheme);

  const handleGithubClick = () => {
    window.open("https://github.com/rhseung", "_blank", "noopener,noreferrer");
  };

  const handleMailClick = () => {
    window.open("mailto:rhseungg@gmail.com", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={themeClass}>
      <div className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>
          <p className={footerStyles.footerText}>
            © {new Date().getFullYear()} Hyunseung Ryu. All rights reserved.
          </p>
          <div className={footerStyles.socialLinks}>
            <Button variant="ghost" size="icon" onClick={handleGithubClick}>
              <IconBrandGithub size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleMailClick}>
              <IconMail size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
