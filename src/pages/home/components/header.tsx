import { ThemeToggle } from "@/components/theme-toggle";
import * as styles from "@/styles/index.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Portfolio</h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
