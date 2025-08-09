// import { Highlight } from "./components/highlight";
import { Layout } from '@/components';

import { Banner } from './components/banner';

export const HomePage: React.FC = () => {
  return (
    <Layout disableHeaderHeight>
      <div className="bg-neutral-50 dark:bg-neutral-950">
        <Banner />
      </div>
      {/* <Highlight /> */}
    </Layout>
  );
};
