import * as pageStyles from "../styles/career-page.css";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils";

export interface EducationCardProps {
  period: string;
  institution: string;
  major: string;
  status: string;
  logo?: React.ReactNode;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  period,
  institution,
  major,
  status,
  logo,
}) => {
  return (
    <div className={pageStyles.itemCard}>
      <div className={pageStyles.cardHeader}>
        <div className={pageStyles.cardTitleWithLogo}>
          {logo && <div className={pageStyles.cardLogo}>{logo}</div>}
          <h3 className={pageStyles.cardTitle}>{institution}</h3>
        </div>
        <Badge variant="outline" className={pageStyles.careerBadgeOutline}>
          {period}
        </Badge>
      </div>
      <p className={pageStyles.cardDetail}>{major}</p>
      <Badge
        variant={status === "재학" ? "default" : "secondary"}
        className={cn(
          status === "재학"
            ? pageStyles.careerBadgeDefault
            : pageStyles.careerBadgeSecondary
        )}
      >
        {status}
      </Badge>
    </div>
  );
};
