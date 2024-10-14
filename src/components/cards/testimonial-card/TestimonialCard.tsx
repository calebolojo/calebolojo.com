import React from 'react';

// import { RiDoubleQuotesL } from 'react-icons/ri';
import { cn } from '@/lib/utils';

export interface TestimonialCardProps {
  id: string | number;
  copy: string;
  authorName: string;
  authorTitle: string;
}

export const TestimonialCard = ({
  copy,
  authorName,
  authorTitle,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'bg-transparent p-0 flex flex-col justify-between rounded-[20px]',
        'min-w-full w-full h-auto lg:min-w-[500px] lg:w-[500px] lg:h-[260px]',
        'px-5 lg:px-0',
      )}
    >
      <p className='text-body-xl leading-[26px] lg:text-title text-white lg:leading-[30px] font-normal'>
        {copy}
      </p>
      <div className='pt-10 lg:pt-0'>
        <p className='text-body-lg font-[500]'>{authorName}</p>
        <p className='text-body text-text-icon-secondary-subtle relative pl-5 before:absolute before:contents-[""] before:block before:top-[6px] before:left-0 before:w-2 before:h-2 before:bg-surface-brand-default before:rounded-full'>
          {authorTitle}
        </p>
      </div>
    </div>
  );
};
