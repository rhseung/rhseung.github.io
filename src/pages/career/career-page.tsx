import { Layout } from '@/components';
import { careerData } from '@/data/career';

import { AchievementList } from './components/achievement-list-card';
import { CareerCard } from './components/career-card';

export const CareerPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 sm:py-12 lg:py-16 text-center">
        <h1 className="max-w-6xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          이력
        </h1>
      </div>

      <div className="pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {careerData.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 sm:mb-8">
                  {section.title}
                </h2>

                {section.items.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {section.items.map((item, itemIndex) => (
                      <CareerCard
                        key={itemIndex}
                        title={item.title}
                        date={item.date}
                        badges={item.badges}
                        logo={item.logo}
                      >
                        {item.description}
                      </CareerCard>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* 항목이 없을 때 표시할 메시지 */}
                  </div>
                )}

                {section.achievements && (
                  <AchievementList
                    title="주요 성과"
                    achievements={section.achievements.map(
                      (achievement) => achievement.content,
                    )}
                  />
                )}

                {section.note && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 m-0">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
