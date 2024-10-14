'use client';
import Image from 'next/image';
import React from 'react';

import styles from './blog-card.module.scss';

import { cn } from '@/lib/utils';

interface BlogCardProps {
  variant: 'featured_display' | 'card' | 'list';
  category: string[];
  publishDate: string;
  title: string;
  featuredImage: string;
  tags: string[];
}

const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  (
    { variant = 'card', category, publishDate, title, featuredImage, tags },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.blogCard,
          [
            (variant === 'card' || variant === 'list') && [
              'bg-transparent',
              // 'bg-surface-subtle rounded-md',
            ],
          ],
          variant == 'featured_display' && [
            styles.featuredDisplay,
            'rounded-none bg-transparent',
          ],
          variant == 'card' && styles.card,
          variant == 'list' && styles.list,
        )}
      >
        <div className={cn(styles.featuredImage, 'w-full')}>
          <Image
            src={featuredImage}
            alt=''
            width={405}
            height={250}
            objectFit='cover'
          />
        </div>
        <div className={cn(styles.body, '')}>
          <div className={cn(styles.title_block)}>
            <div className='flex items-center pb-2'>
              <p className='flex text-text-icon-default text-body-sm'>
                {category?.slice(0, 1).map((each, i) => (
                  <span className='text-body-sm text-text-icon-brand' key={i}>
                    {each}
                  </span>
                ))}
              </p>
              <span className='inline-block mx-3 text-body-sm text-text-icon-secondary'>
                |
              </span>
              <span className='text-body-sm text-text-icon-secondary'>
                {publishDate}
              </span>
            </div>
            <h4>{title}</h4>
          </div>
          <div className={cn(styles.tags, 'flex gap-2')}>
            {tags?.slice(0, 3).map((each, i) => (
              <div className='tag' key={i}>
                {each}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default BlogCard;
