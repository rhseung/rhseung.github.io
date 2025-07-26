import * as pageStyles from "../styles/career-page.css";
import { Badge } from "@/components/ui/badge";

interface CompetitionCardProps {
  year: string;
  name: string;
  organizer: string;
  category: string;
  result: string;
  logo?: React.ReactNode;
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  year,
  name,
  organizer,
  category,
  result,
  logo,
}) => {
  const getResultVariant = (result: string) => {
    switch (result) {
      case "수상":
      case "우수상":
      case "최우수상":
        return "default";
      case "참가":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getResultStyle = (result: string) => {
    switch (result) {
      case "수상":
      case "우수상":
      case "최우수상":
        return pageStyles.careerBadgeDefault;
      case "참가":
        return pageStyles.careerBadgeSecondary;
      default:
        return pageStyles.careerBadgeOutline;
    }
  };

  return (
    <div className={pageStyles.itemCard}>
      <div className={pageStyles.cardHeader}>
        <div className={pageStyles.cardTitleWithLogo}>
          {logo && <div className={pageStyles.cardLogo}>{logo}</div>}
          <h3 className={pageStyles.cardTitle}>{name}</h3>
        </div>
        <Badge variant="outline" className={pageStyles.careerBadgeOutline}>
          {year}
        </Badge>
      </div>
      <div className={pageStyles.cardDetail}>
        <div>주최: {organizer}</div>
        <div>부문: {category}</div>
      </div>
      <Badge
        variant={getResultVariant(result)}
        className={getResultStyle(result)}
      >
        {result}
      </Badge>
    </div>
  );
};
