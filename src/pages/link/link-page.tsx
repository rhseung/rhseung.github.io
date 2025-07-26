import { LinkCard } from "./components/link-card";
import * as pageStyles from "./styles/link-page.css";
import {
  linkPageLightTheme,
  linkPageDarkTheme,
} from "./styles/link-page.theme.css";
import { useTheme } from "@/hooks";
import { Separator } from "@/components";
import { cn } from "@/utils";
import {
  IconMail,
  IconUserSquare,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandNpm,
  IconBrandPython,
  IconBrandStackoverflow,
  IconCode,
  IconTrophy,
  IconArticle,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandReddit,
  IconBrandSteam,
  IconBrandSpotify,
} from "@tabler/icons-react";

export const LinkPage: React.FC = () => {
  const { getThemeClass, getActualTheme } = useTheme();
  const themeClass = getThemeClass(linkPageLightTheme, linkPageDarkTheme);
  const currentTheme = getActualTheme();

  const professionalLinks = [
    {
      title: "이메일",
      username: "rhseungg@gmail.com",
      url: "mailto:rhseungg@gmail.com",
      icon: <IconMail />,
      iconColor: "#EA4335",
    },
    {
      title: "포트폴리오",
      username: "rhseung.github.io",
      url: "https://rhseung.github.io",
      icon: <IconUserSquare />,
      iconColor: "#0066CC",
    },
    {
      title: "LinkedIn",
      username: "in/rhseung",
      url: "https://linkedin.com/in/rhseung",
      icon: <IconBrandLinkedin />,
      iconColor: "#0A66C2",
    },
  ];

  const developmentLinks = [
    {
      title: "GitHub",
      username: "@rhseung",
      url: "https://github.com/rhseung",
      icon: <IconBrandGithub />,
      iconColor: currentTheme === "dark" ? "#F0F6FF" : "#181717",
    },
    {
      title: "NPM",
      username: "~rhseung",
      url: "https://npmjs.com/~rhseung",
      icon: <IconBrandNpm />,
      iconColor: "#CB3837",
    },
    {
      title: "PyPI",
      username: "rhseung",
      url: "https://pypi.org/user/rhseung",
      icon: <IconBrandPython />,
      iconColor: "#3775A9",
    },
    {
      title: "Stack Overflow",
      username: "rhseung",
      url: "https://stackoverflow.com/users/rhseung",
      icon: <IconBrandStackoverflow />,
      iconColor: "#F58025",
    },
  ];

  const algorithmLinks = [
    {
      title: "백준 OJ",
      username: "rhseung",
      url: "https://boj.kr/rhseung",
      icon: <IconCode />,
      iconColor: "#0076C0",
    },
    {
      title: "Solved.ac",
      username: "rhseung",
      url: "https://solved.ac/profile/rhseung",
      icon: <IconTrophy />,
      iconColor: "#17CE3A",
    },
    {
      title: "블로그",
      username: "blog.rhseung.dev",
      url: "https://blog.example.com",
      icon: <IconArticle />,
      iconColor: "#FF6B6B",
    },
  ];

  const socialLinks = [
    {
      title: "Instagram",
      username: "@rhseung_",
      url: "https://instagram.com/rhseung_",
      icon: <IconBrandInstagram />,
      iconColor: "#E4405F",
    },
    {
      title: "Discord",
      username: "rhseung#1234",
      url: "https://discord.com/users/rhseung",
      icon: <IconBrandDiscord />,
      iconColor: "#5865F2",
    },
    {
      title: "Reddit",
      username: "u/rhseung",
      url: "https://reddit.com/u/rhseung",
      icon: <IconBrandReddit />,
      iconColor: "#FF4500",
    },
  ];

  const entertainmentLinks = [
    {
      title: "Steam",
      username: "rhseung",
      url: "https://steamcommunity.com/id/rhseung",
      icon: <IconBrandSteam />,
      iconColor: currentTheme === "dark" ? "#a5cfeb" : "#102457",
    },
    {
      title: "Spotify",
      username: "rhseung",
      url: "https://open.spotify.com/user/rhseung",
      icon: <IconBrandSpotify />,
      iconColor: "#1DB954",
    },
  ];

  return (
    <div className={themeClass}>
      <div className={pageStyles.titleSection}>
        <h1 className={cn(pageStyles.container, pageStyles.pageTitle)}>링크</h1>
      </div>
      <Separator />

      <div className={pageStyles.section}>
        <div className={pageStyles.container}>
          <div>
            <h2 className={pageStyles.pageSubTitle}>프로페셔널 & 포트폴리오</h2>
            <div
              className={cn(
                pageStyles.linkColumnContainer,
                pageStyles.threeColumnGrid
              )}
            >
              {professionalLinks.map((link, index) => (
                <LinkCard
                  key={`professional-${index}`}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className={pageStyles.pageSubTitle}>개발 플랫폼</h2>
            <div
              className={cn(
                pageStyles.linkColumnContainer,
                pageStyles.threeColumnGrid
              )}
            >
              {developmentLinks.map((link, index) => (
                <LinkCard
                  key={`development-${index}`}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className={pageStyles.pageSubTitle}>코딩 테스트 & 알고리즘</h2>
            <div
              className={cn(
                pageStyles.linkColumnContainer,
                pageStyles.threeColumnGrid
              )}
            >
              {algorithmLinks.map((link, index) => (
                <LinkCard
                  key={`algorithm-${index}`}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className={pageStyles.pageSubTitle}>소셜 & 커뮤니티</h2>
            <div
              className={cn(
                pageStyles.linkColumnContainer,
                pageStyles.threeColumnGrid
              )}
            >
              {socialLinks.map((link, index) => (
                <LinkCard key={`social-${index}`} link={link} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h2 className={pageStyles.pageSubTitle}>게임 & 음악</h2>
            <div
              className={cn(
                pageStyles.linkColumnContainer,
                pageStyles.threeColumnGrid
              )}
            >
              {entertainmentLinks.map((link, index) => (
                <LinkCard
                  key={`entertainment-${index}`}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
