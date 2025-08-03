import { Layout, Separator } from '@/components';

// TODO: 다시 디자인하기

export const NotFoundPage: React.FC = () => {
  return (
    <Layout disableHeaderHeight>
      <div className="bg-neutral-50 dark:bg-neutral-950 w-full h-screen flex items-center justify-center">
        <div className="flex items-center gap-6">
          <h1 className="text-6xl font-medium text-neutral-900 dark:text-neutral-50 m-0">
            404
          </h1>
          <Separator orientation="vertical" />
          <p className="text-base font-normal text-neutral-600 dark:text-neutral-400 m-0">
            This page could not be found.
          </p>
        </div>
      </div>
    </Layout>
  );
};
