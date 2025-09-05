import React from 'react';

import { Layout } from '@/components';
import { linksData } from '@/data/links';

import { LinkCard } from './components/link-card';

export const LinkPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-8 sm:py-12 lg:py-16 text-center">
        <h1 className="max-w-6xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
          링크
        </h1>
      </div>

      <div className="pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {linksData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 sm:mb-8">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {section.items.map((link, itemIndex) => (
                    <LinkCard
                      key={itemIndex}
                      service={link.service}
                      title={link.title}
                      username={link.username}
                      url={link.url}
                      icon={React.createElement(link.icon, { size: 30 })}
                      iconColor={link.iconColor}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
