import * as pageStyles from "../styles/career-page.css";
import { Badge } from "@/components/ui/badge";

interface CertificationCardProps {
  date: string;
  name: string;
  agency: string;
  status: string;
  logo?: React.ReactNode;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  date,
  name,
  agency,
  status,
  logo,
}) => {
  return (
    <div className={pageStyles.itemCard}>
      <div className={pageStyles.cardHeader}>
        <div className={pageStyles.cardTitleWithLogo}>
          {logo && <div className={pageStyles.cardLogo}>{logo}</div>}
          <h3 className={pageStyles.cardTitle}>{name}</h3>
        </div>
        <Badge variant="outline" className={pageStyles.careerBadgeOutline}>
          {date}
        </Badge>
      </div>
      <p className={pageStyles.cardDetail}>발급기관: {agency}</p>
      <Badge
        variant={status === "취득" ? "default" : "secondary"}
        className={
          status === "취득"
            ? pageStyles.careerBadgeDefault
            : pageStyles.careerBadgeSecondary
        }
      >
        {status}
      </Badge>
    </div>
  );
};
