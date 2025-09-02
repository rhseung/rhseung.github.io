import { IconAt, IconBackpack, IconSchool } from '@tabler/icons-react';

import profileImage from '@/assets/profile.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/';

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-16 items-center">
      <Avatar className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full block flex-shrink-0">
        <AvatarImage src={profileImage} />
        <AvatarFallback>Rhseung</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 text-center sm:text-left">
        <div className="flex items-center gap-4 sm:gap-6">
          <IconAt
            className="text-neutral-600 dark:text-neutral-400 transition-colors duration-200 flex-shrink-0"
            size={24}
          />
          <span className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-50 break-all">
            <a
              href="mailto:ryu@rhseung.me"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-neutral-500 dark:text-neutral-500 transition-colors duration-200 relative hover:text-neutral-900 dark:hover:text-neutral-50 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-neutral-50 after:transition-all after:duration-300 hover:after:w-full"
            >
              ryu@rhseung.me
            </a>
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <IconBackpack
            className="text-neutral-600 dark:text-neutral-400 transition-colors duration-200 flex-shrink-0"
            size={24}
          />
          <span className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-50 text-left">
            <a
              href="https://gsa.gen.hs.kr:453/main/main.php"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-neutral-500 dark:text-neutral-500 transition-colors duration-200 relative hover:text-neutral-900 dark:hover:text-neutral-50 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-neutral-50 after:transition-all after:duration-300 hover:after:w-full"
            >
              과학영재학교 광주과학고등학교
            </a>{' '}
            39기 졸업
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <IconSchool
            className="text-neutral-600 dark:text-neutral-400 transition-colors duration-200 flex-shrink-0"
            size={24}
          />
          <span className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-50 text-left">
            <a
              href="https://ewww.gist.ac.kr/kr/main.html"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-neutral-500 dark:text-neutral-500 transition-colors duration-200 relative hover:text-neutral-900 dark:hover:text-neutral-50 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-neutral-50 after:transition-all after:duration-300 hover:after:w-full"
            >
              GIST
            </a>{' '}
            '25 도전탐색과정 재학 중
          </span>
        </div>
      </div>
    </div>
  );
};
