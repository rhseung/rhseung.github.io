import { Button } from "@/components/ui/button";
import * as styles from "@/styles/index.css";
import * as footerStyles from "../styles/footer.css";

import { Github, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={styles.maxWidthContainer}>
        <p className={footerStyles.footerText}>
          © 2024 홍길동. 모든 권리 보유.
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
    </footer>
  );
};
