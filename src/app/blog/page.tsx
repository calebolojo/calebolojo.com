'use client';

import { Tab, Tabs } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { cn } from '@/lib/utils';

import { posts } from '@/data/posts';

import BlogCard from '@/components/cards/blog-card/BlogCard';

export default function BlogPage() {
  const featuredDisplayBlogProps = useMemo(
    () => posts.filter((each) => each.isFeatured)[0],
    [],
  );

  const featuredListBlogProps = useMemo(
    () => posts.filter((each) => each.isFeatured).splice(1, 4),
    [],
  );

  const blogPosts = useMemo(() => posts.filter((each) => !each.isFeatured), []);

  return (
    <main>
      <motion.section className=''>
        <div className='container'>
          <div className='title'>
            <h1 className='text-title-xl pt-space-100 pb-space-40'>
              Insights from me
            </h1>
          </div>
        </div>
        <div className='container flex flex-col lg:flex-row justify-between gap-10'>
          <div className='sm:w-full lg:w-8/12'>
            <BlogCard
              {...featuredDisplayBlogProps}
              publishDate='August 20, 2024'
              variant='featured_display'
              featuredImage={
                featuredDisplayBlogProps?.featuredImage?.src as string
              }
            />
          </div>
          <div className='sm:w-full lg:w-4/12 flex flex-col gap-10'>
            {featuredListBlogProps.map((each, i) => (
              <BlogCard
                key={i}
                {...each}
                publishDate='August 20, 2024'
                variant='list'
                featuredImage={
                  featuredDisplayBlogProps.featuredImage?.src as string
                }
              />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className='pt-space-80 pb-space-140'>
        <div className='container'>
          <div className='pb-space-40 w-full'>
            <div className='flex flex-col justify-center flex-nowrap gap-4'>
              <Tabs
                key='light'
                variant='light'
                aria-label='Tabs variants'
                className='ctabs'
              >
                <Tab key='all' title='All'>
                  <BlogTabContent category={['all']} />
                </Tab>
                <Tab key='design' title='Design'>
                  <BlogTabContent category={['design']} />
                </Tab>
                <Tab key='development' title='Development'>
                  <BlogTabContent category={['development']} />
                </Tab>
                <Tab key='cybersecurity' title='Cybersecurity'>
                  <BlogTabContent category={['cybersecurity']} />
                </Tab>
              </Tabs>
            </div>
          </div>
          {/* <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
            )}
          >
            {blogPosts.map((each, i) => (
              <BlogCard
                key={i}
                {...each}
                publishDate='August 20, 2024'
                variant='card'
                featuredImage={each.featuredImage?.src as string}
              />
            ))}
          </div> */}
        </div>
      </motion.section>
    </main>
  );
}

interface BlogTabContentProps {
  category: string[];
  limit?: number;
}

const BlogTabContent = ({ category, limit }: BlogTabContentProps) => {
  const blogPosts = useMemo(() => posts.filter((each) => !each.isFeatured), []);
  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10')}
    >
      {blogPosts.map((each, i) => (
        <BlogCard
          key={i}
          {...each}
          publishDate='August 20, 2024'
          variant='card'
          featuredImage={each.featuredImage?.src as string}
        />
      ))}
    </div>
  );
};
