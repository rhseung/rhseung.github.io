import * as pageStyles from "../styles/link-page.css";
import { ExternalLink } from "lucide-react";

export interface LinkType {
  title: string;
  username: string;
  url: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

export const LinkCard: React.FC<{
  link: LinkType;
  index: number;
}> = ({ link, index }) => {
  const handleClick = () => {
    window.open(link.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      key={index}
      className={pageStyles.linkCard}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={
        {
          "--hover-border-color": link.iconColor || "transparent",
        } as React.CSSProperties
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div
        className={pageStyles.linkIcon}
        style={link.iconColor ? { color: link.iconColor } : {}}
      >
        {link.icon || <ExternalLink />}
      </div>
      <div className={pageStyles.linkContent}>
        <div className={pageStyles.linkTitle}>{link.title}</div>
        <div className={pageStyles.linkUsername}>{link.username}</div>
      </div>
    </div>
  );
};
