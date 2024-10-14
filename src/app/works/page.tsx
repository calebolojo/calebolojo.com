'use client';
import { Tab, Tabs } from '@nextui-org/tabs';
import React from 'react';

import { TabContent } from '@/components/work-page-components/work-tab-content';

export default function WorkPage() {
  const limit = 6;

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
}
