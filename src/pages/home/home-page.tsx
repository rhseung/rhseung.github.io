// import { Highlight } from "./components/highlight";
import { Layout } from '@/components';

import { Banner } from './components/banner';

export const HomePage: React.FC = () => {
  return (
    <Layout disableHeaderHeight>
      <Banner />
      {/* <Highlight /> */}
    </Layout>
  );
};
