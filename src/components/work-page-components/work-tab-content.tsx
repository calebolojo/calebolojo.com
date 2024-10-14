import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { showcase_projects } from '@/data/projects';

import ProjectCard from '@/components/cards/project-card/ProjectCard';

interface TabContentProps {
  category?: string;
  perPage?: number;
}
export const TabContent = ({ category, perPage = 6 }: TabContentProps) => {
  const filtered_works = useMemo(
    () =>
      showcase_projects
        .filter((each) => !each.isFeaturedInHomePage)
        .slice(0, perPage),
    // showcase_projects
    // .filter(
    //   (each) =>
    //     !each.isFeaturedInHomePage ||
    //     each.category?.includes(category as string),
    // )
    // .slice(0, perPage),
    [perPage],
  );

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-space-80 w-full'>
      {filtered_works.map((each, i) => (
        <motion.div key={each.id} className='w-full'>
          <ProjectCard
            featuredImageSrc={each.fullscreenFeaturedGif}
            featuredGifSrc={each.fullscreenFeaturedGif}
            useGif
            description={(each.description as string).substring(0, 80) + '...'}
            tags={each.highlightTags}
            title={each.title}
            variant='card'
            ctaBtnText='See Project'
            href=''
          />
        </motion.div>
      ))}
    </div>
  );
};
