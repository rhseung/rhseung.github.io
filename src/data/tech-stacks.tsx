import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaYarn,
} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiFlask,
  SiFlutter,
  SiI18Next,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiKotlin,
  SiLatex,
  SiMysql,
  SiNestjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPrisma,
  SiPypi,
  SiPytorch,
  SiReactquery,
  SiReactrouter,
  SiScikitlearn,
  SiSfml,
  SiStyledcomponents,
  SiTensorflow,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export interface TechStack {
  name: string;
  color: string;
  darkColor?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const techStacks = {
  // Frontend
  React: {
    name: 'React',
    color: '#58C4DC',
    icon: FaReact,
  },
  Nextjs: {
    name: 'Next.js',
    color: '#000000',
    darkColor: '#FFFFFF',
    icon: RiNextjsFill,
  },
  TypeScript: {
    name: 'TypeScript',
    color: '#3178C6',
    icon: SiTypescript,
  },
  JavaScript: {
    name: 'JavaScript',
    color: '#f3e14f',
    icon: SiJavascript,
  },
  HTML: {
    name: 'HTML',
    color: '#d35836',
    icon: FaHtml5,
  },
  CSS: {
    name: 'CSS',
    color: '#447ebe',
    icon: FaCss3Alt,
  },
  TailwindCss: {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    icon: RiTailwindCssFill,
  },
  VanillaExtract: {
    name: 'Vanilla Extract',
    color: '#8bf2e0',
  },
  StyledComponents: {
    name: 'Styled Components',
    color: '#DB7093',
    icon: SiStyledcomponents,
  },
  TanstackRouter: {
    name: 'Tanstack Router',
    color: '#58af66',
  },
  ReactRouter: {
    name: 'React Router',
    color: '#CA4245',
    icon: SiReactrouter,
  },
  ReactQuery: {
    name: 'React Query',
    color: '#FF4154',
    icon: SiReactquery,
  },
  I18Next: {
    name: 'i18next',
    color: '#26A69A',
    icon: SiI18Next,
  },
  OpenApiTypeScript: {
    name: 'OpenAPI TypeScript',
    color: '#3f76f3',
  },
  Vite: { name: 'Vite', color: '#7895f7', icon: SiVite },

  // Backend
  NodeJs: {
    name: 'Node.js',
    color: '#3E863D',
    icon: FaNodeJs,
  },
  Nestjs: {
    name: 'Nest.js',
    color: '#EA2845',
    icon: SiNestjs,
  },
  Python: {
    name: 'Python',
    color: '#3776AB',
    icon: FaPython,
  },
  Flask: {
    name: 'Flask',
    color: '#000000',
    darkColor: '#FFFFFF',
    icon: SiFlask,
  },
  Java: { name: 'Java', color: '#ED8B00', icon: FaJava },
  Prisma: {
    name: 'Prisma',
    color: '#16A394',
    icon: SiPrisma,
  },
  MySQL: {
    name: 'MySQL',
    color: '#4479A1',
    icon: SiMysql,
  },

  // Mobile Frontend
  Flutter: {
    name: 'Flutter',
    color: '#135C9C',
    icon: SiFlutter,
  },
  Dart: { name: 'Dart', color: '#2678BC', icon: SiDart },

  // Low-level / Systems
  C: { name: 'C', color: '#34475C', icon: SiC },
  Cpp: {
    name: 'C++',
    color: '#00599C',
    icon: SiCplusplus,
  },
  SFML: { name: 'SFML', color: '#92d23e', icon: SiSfml },

  // Mobile/Desktop UI
  Kotlin: {
    name: 'Kotlin',
    color: '#7F52FF',
    icon: SiKotlin,
  },
  Swing: { name: 'Swing', color: '#e72d2c' },

  // AI/ML & Data
  PyTorch: {
    name: 'PyTorch',
    color: '#e74a2b',
    icon: SiPytorch,
  },
  TensorFlow: {
    name: 'TensorFlow',
    color: '#ff6f00',
    icon: SiTensorflow,
  },
  Keras: {
    name: 'Keras',
    color: '#d00000',
    icon: SiKeras,
  },
  OpenCV: {
    name: 'OpenCV',
    color: '#050505',
    darkColor: '#FFFFFF',
    icon: SiOpencv,
  },
  ScikitLearn: {
    name: 'Scikit-learn',
    color: '#f89939',
    icon: SiScikitlearn,
  },
  NumPy: {
    name: 'NumPy',
    color: '#4d77cf',
    icon: SiNumpy,
  },
  Pandas: {
    name: 'Pandas',
    color: '#150458',
    darkColor: '#FFFFFF',
    icon: SiPandas,
  },
  Matplotlib: {
    name: 'Matplotlib',
    color: '#11557c',
  },
  Seaborn: {
    name: 'Seaborn',
    color: '#4c72b0',
  },
  Altair: {
    name: 'Altair',
    color: '#1f77b4',
  },
  Jupyter: {
    name: 'Jupyter',
    color: '#f37626',
    icon: SiJupyter,
  },

  // Package Managers/Build Tools
  Npm: { name: 'Npm', color: '#CB3837', icon: FaNpm },
  Yarn: { name: 'Yarn', color: '#4F8DB5', icon: FaYarn },
  Bun: { name: 'Bun', color: '#F9F0E1' },
  PyPI: { name: 'PyPI', color: '#3375aa', icon: SiPypi },

  // Design/Documentation
  Figma: { name: 'Figma', color: '#FF7237', icon: FaFigma },
  LaTeX: { name: 'LaTeX', color: '#008080', icon: SiLatex },
} as const;
