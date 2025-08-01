import { ExternalLink } from 'lucide-react';

// TODO: @tabler/icons-react로 변경할 것

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
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      key={index}
      className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-opacity-50"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={
        {
          '--hover-border-color': link.iconColor || 'transparent',
        } as React.CSSProperties
      }
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div
        className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110"
        style={link.iconColor ? { color: link.iconColor } : {}}
      >
        {link.icon || <ExternalLink />}
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {link.title}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {link.username}
        </div>
      </div>
    </div>
  );
};
