import { IconBrandGithub, IconMail } from '@tabler/icons-react';

import { Button } from '@/components';

export const Footer: React.FC = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/rhseung', '_blank', 'noopener,noreferrer');
  };

  const handleMailClick = () => {
    window.open('mailto:ryu@rhseung.me', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-925">
      <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Hyunseung Ryu. All rights reserved.
          </p>
          <div className="flex justify-center gap-2 sm:gap-4 mt-4">
            <Button variant="ghost" size="icon" onClick={handleGithubClick}>
              <IconBrandGithub size={20} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleMailClick}>
              <IconMail size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
