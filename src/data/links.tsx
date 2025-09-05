import React from 'react';

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

import type { LinkService } from '@/pages/link/fetchers';

export interface LinkItem {
  title: string;
  username: string;
  url: string;
  icon: React.ComponentType<{ size?: number }>;
  iconColor: string;
  service?: LinkService;
}

export interface LinkSection {
  title: string;
  items: LinkItem[];
}

export const linksData: LinkSection[] = [
  {
    title: '연락처',
    items: [
      {
        title: '이메일',
        username: 'ryu@rhseung.me',
        url: 'mailto:ryu@rhseung.me',
        icon: IconMail,
        iconColor: 'var(--color-mail)',
      },
      {
        title: 'Instagram',
        username: 'r._hseung',
        url: 'https://www.instagram.com/r._hseung/#',
        icon: IconBrandInstagram,
        iconColor: 'var(--color-instagram)',
      },
      {
        title: 'Discord',
        username: 'rhseung',
        url: 'https://discord.com/users/1056154758337015828',
        icon: IconBrandDiscord,
        iconColor: 'var(--color-discord)',
      },
      {
        title: 'LinkedIn',
        username: '류현승',
        url: 'https://www.linkedin.com/in/%ED%98%84%EC%8A%B9-%EB%A5%98-a340b02a7/',
        icon: IconBrandLinkedin,
        iconColor: 'var(--color-linkedin)',
      },
    ],
  },
  {
    title: '개발 플랫폼',
    items: [
      {
        title: 'Stack Overflow',
        username: 'rhseung',
        url: 'https://stackoverflow.com/users/20864379/rhseung',
        icon: IconBrandStackoverflow,
        iconColor: 'var(--color-stackoverflow)',
        service: 'stackoverflow',
      },
      {
        title: 'GitHub',
        username: 'rhseung',
        url: 'https://github.com/rhseung',
        icon: IconBrandGithub,
        iconColor: 'var(--color-github)',
        service: 'github',
      },
      {
        title: 'NPM',
        username: '~rhseung',
        url: 'https://www.npmjs.com/~rhseung',
        icon: IconBrandNpm,
        iconColor: 'var(--color-npm)',
      },
      {
        title: 'PyPI',
        username: 'rhseung',
        url: 'https://pypi.org/user/rhseung/',
        icon: IconBrandPython,
        iconColor: 'var(--color-python)',
      },
      {
        title: 'Modrinth',
        username: 'Rhseung',
        url: 'https://modrinth.com/user/Rhseung',
        icon: IconBox,
        iconColor: 'var(--color-modrinth)',
      },
      {
        title: 'Velog',
        username: '@rhseung224',
        url: 'https://velog.io/@rhseung224/posts',
        icon: IconBlockquote,
        iconColor: 'var(--color-velog)',
      },
    ],
  },
  {
    title: '코딩 테스트 & 알고리즘',
    items: [
      {
        title: '백준 OJ',
        username: 'rhseung',
        url: 'https://www.acmicpc.net/user/rhseung',
        icon: IconCode,
        iconColor: 'var(--color-baekjoon)',
        service: 'baekjoon',
      },
      {
        title: 'Solved.ac',
        username: 'rhseung',
        url: 'https://solved.ac/profile/rhseung',
        icon: IconTrophy,
        iconColor: 'var(--color-solvedac)',
        service: 'solvedac',
      },
    ],
  },
  {
    title: '게임 & 음악',
    items: [
      {
        title: 'Steam',
        username: 'Rhseung',
        url: 'https://steamcommunity.com/profiles/76561198370925344/',
        icon: IconBrandSteam,
        iconColor: 'var(--color-steam)',
      },
      {
        title: 'Spotify',
        username: 'Rhseung',
        url: 'https://open.spotify.com/user/0ql7swrx5cap6f8ozxxnqmolx',
        icon: IconBrandSpotify,
        iconColor: 'var(--color-spotify)',
      },
    ],
  },
];
