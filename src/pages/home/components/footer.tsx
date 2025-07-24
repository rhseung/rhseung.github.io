import { Button } from "@/components/ui/button";
import * as footerStyles from "../styles/footer.css";
import { footerLightTheme, footerDarkTheme } from "../styles/footer.theme.css";
import { useTheme } from "@/hooks/use-theme";

import { Github, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(footerLightTheme, footerDarkTheme);

  return (
    <footer className={themeClass}>
      <div className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>
          <p className={footerStyles.footerText}>
            © {new Date().getFullYear()} Hyunseung Ryu. All rights reserved.
          </p>
          <div className={footerStyles.socialLinks}>
            <Button variant="ghost" size="icon">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
