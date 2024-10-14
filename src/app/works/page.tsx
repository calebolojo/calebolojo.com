'use client';
import { Tab, Tabs } from '@nextui-org/tabs';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { showcase_projects } from '@/data/projects';

import ProjectCard from '@/components/cards/project-card/ProjectCard';

export const WorkPage = () => {
  const limit = 6;

  const filtered_works = useMemo(
    () =>
      showcase_projects
        .filter((each) => !each.isFeaturedInHomePage)
        .slice(0, limit),
    [],
  );

  return (
    <main>
      <section>
        <div className='container pt-space-80 pb-space-140'>
          <h1 className='text-display-xl'>
            Creating Next Level
            <br />
            Digital Products
          </h1>
        </div>
      </section>
      <section className='pb-space-200'>
        <div className='container'>
          <div className='pb-10'>
            <div className='flex flex-wrap gap-4'>
              <Tabs
                key='light'
                variant='light'
                aria-label='Tabs variants'
                className='ctabs'
              >
                <Tab key='all' title='All' className='w-full'>
                  <TabContent category='all' />
                </Tab>
                <Tab key='web' title='Web' className='w-full'>
                  <TabContent category='web' />
                </Tab>
                <Tab key='mobile' title='Mobile' className='w-full'>
                  <TabContent category='mobile' />
                </Tab>
                <Tab key='playground' title='Playground' className='w-full'>
                  <TabContent category='playground' />
                </Tab>
              </Tabs>
            </div>
          </div>
          {/* <div className='grid grid-cols-2 gap-x-10 gap-y-space-80'>
            {filtered_works.map((each, i) => (
              <motion.div key={each.id}>
                <ProjectCard
                  featuredImageSrc={each.fullscreenFeaturedGif}
                  featuredGifSrc={each.fullscreenFeaturedGif}
                  useGif
                  description={
                    (each.description as string).substring(0, 80) + '...'
                  }
                  tags={each.highlightTags}
                  title={each.title}
                  variant='card'
                  ctaBtnText='See Project'
                  href=''
                />
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default WorkPage;

interface TabContentProps {
  category?: string;
  perPage?: number;
}
const TabContent = ({ category, perPage = 6 }: TabContentProps) => {
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
