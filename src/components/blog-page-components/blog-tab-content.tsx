import React, { useMemo } from 'react';

import { cn } from '@/lib/utils';

import { posts } from '@/data/posts';

import BlogCard from '@/components/cards/blog-card/BlogCard';

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

export default BlogTabContent;
