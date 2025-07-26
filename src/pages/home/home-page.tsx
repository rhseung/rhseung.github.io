import { styles } from "@/styles";
import { Banner } from "./components/banner";
import { Highlight } from "./components/highlight";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Highlight />
    </div>
  );
};
