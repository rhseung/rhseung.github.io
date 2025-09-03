import { IconArrowLeft, IconHome } from '@tabler/icons-react';
import { useNavigate } from '@tanstack/react-router';

import { Button, Layout } from '@/components';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate({ to: '/' });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Layout disableHeaderHeight>
      <div className="w-full h-screen flex items-center justify-center px-4 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
        <div className="max-w-lg mx-auto text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-3xl opacity-30">
              <div className="text-9xl sm:text-[12rem] font-black text-primary-500 select-none">
                404
              </div>
            </div>
            <div className="relative">
              <h1 className="text-8xl sm:text-9xl font-black text-neutral-900 dark:text-neutral-50 select-none tracking-tighter">
                4<span className="text-primary-500 animate-pulse">0</span>4
              </h1>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              페이지를 찾을 수 없어요
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-2">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>

            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              URL을 다시 확인해보시거나 홈으로 돌아가세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={handleGoHome}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 text-base font-medium transition-all duration-200 hover:scale-105"
              size="lg"
            >
              <IconHome size={18} className="mr-2" />
              홈으로 가기
            </Button>

            <Button
              onClick={handleGoBack}
              variant="outline"
              className="group px-6 py-3 text-base font-medium transition-all duration-200 hover:scale-105"
              size="lg"
            >
              <IconArrowLeft
                size={18}
                className="mr-2 transition-transform group-hover:-translate-x-1"
              />
              뒤로 가기
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
