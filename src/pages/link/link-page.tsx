import {
  IconBlockquote,
  IconBox,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNpm,
  IconBrandPython,
  IconBrandSpotify,
  IconBrandStackoverflow,
  IconBrandSteam,
  IconCode,
  IconMail,
  IconTrophy,
} from '@tabler/icons-react';

import { Layout } from '@/components';
import { useTheme } from '@/hooks';

import { LinkCard } from './components/link-card';

export const LinkPage: React.FC = () => {
  // TODO: api 사용해서 팔로워 같은 거 보면 좋을 듯
  // TODO: 호버 시 막 아래에 콘텐츠 더 떠서 깃허브면 레포개수, 커밋 잔디 등 버라이어티한 인터랙션

  const { getActualTheme } = useTheme();
  const theme = getActualTheme();

  return (
    <Layout>
      <div className="py-16 text-center">
        <h1 className="max-w-7xl mx-auto px-16 lg:px-16 max-lg:px-6 text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          링크
        </h1>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-16 lg:px-16 max-lg:px-6">
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                연락처
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LinkCard
                  title="이메일"
                  username="ryu@rhseung.me"
                  url="mailto:ryu@rhseung.me"
                  icon={<IconMail size={30} />}
                  iconColor="#EA4335"
                />
                <LinkCard
                  title="Instagram"
                  username="r._hseung"
                  url="https://www.instagram.com/r._hseung/#"
                  icon={<IconBrandInstagram size={30} />}
                  iconColor="#E4405F"
                />
                <LinkCard
                  title="Discord"
                  username="rhseung"
                  url="https://discord.com/users/1056154758337015828"
                  icon={<IconBrandDiscord size={30} />}
                  iconColor="#5865F2"
                />
                <LinkCard
                  title="LinkedIn"
                  username="류현승"
                  url="https://www.linkedin.com/in/%ED%98%84%EC%8A%B9-%EB%A5%98-a340b02a7/"
                  icon={<IconBrandLinkedin size={30} />}
                  iconColor="#0A66C2"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                개발 플랫폼
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LinkCard
                  title="Stack Overflow"
                  username="Rhseung"
                  url="https://stackoverflow.com/users/20864379/rhseung"
                  icon={<IconBrandStackoverflow size={30} />}
                  iconColor="#F58025"
                />
                <LinkCard
                  title="GitHub"
                  username="@rhseung"
                  url="https://github.com/rhseung"
                  icon={<IconBrandGithub size={30} />}
                  iconColor={theme === 'dark' ? '#fafafa' : '#333333'}
                />
                <LinkCard
                  title="NPM"
                  username="~rhseung"
                  url="https://www.npmjs.com/~rhseung"
                  icon={<IconBrandNpm size={30} />}
                  iconColor="#CB3837"
                />
                <LinkCard
                  title="PyPI"
                  username="rhseung"
                  url="https://pypi.org/user/rhseung/"
                  icon={<IconBrandPython size={30} />}
                  iconColor="#3775A9"
                />
                <LinkCard
                  title="Modrinth"
                  username="Rhseung"
                  url="https://modrinth.com/user/Rhseung"
                  icon={<IconBox size={30} />}
                  iconColor="#66d676"
                />
                <LinkCard
                  title="Velog"
                  username="@rhseung224"
                  url="https://velog.io/@rhseung224/posts"
                  icon={<IconBlockquote size={30} />}
                  iconColor="#5dc096"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                코딩 테스트 & 알고리즘
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LinkCard
                  title="백준 OJ"
                  username="rhseung"
                  url="https://www.acmicpc.net/user/rhseung"
                  icon={<IconCode size={30} />}
                  iconColor="#0076C0"
                />
                <LinkCard
                  title="Solved.ac"
                  username="rhseung"
                  url="https://solved.ac/profile/rhseung"
                  icon={<IconTrophy size={30} />}
                  iconColor="#17CE3A"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
                게임 & 음악
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LinkCard
                  title="Steam"
                  username="Rhseung"
                  url="https://steamcommunity.com/profiles/76561198370925344/"
                  icon={<IconBrandSteam size={30} />}
                  iconColor={theme === 'dark' ? '#1f72a1' : '#172138'}
                />
                <LinkCard
                  title="Spotify"
                  username="Rhseung"
                  url="https://open.spotify.com/user/0ql7swrx5cap6f8ozxxnqmolx"
                  icon={<IconBrandSpotify size={30} />}
                  iconColor="#1DB954"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
