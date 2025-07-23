import { ThemeToggle } from "@/components/theme-toggle";
import * as styles from "@/styles/index.css";
import * as headerStyles from "../styles/header.css";

export const Header: React.FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={styles.maxWidthWideContainer}>
        <div className={headerStyles.headerContent}>
          <h1 className={headerStyles.headerTitle}>Hyunseung Ryu</h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
