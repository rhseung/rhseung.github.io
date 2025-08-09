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
      <div className="px-6 py-12 text-center">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Hyunseung Ryu. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
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
