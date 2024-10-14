import clsx from 'clsx';
import React from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import { cn } from '@/lib/utils';

const common_btn_styles =
  'w-space-60 h-space-60 rounded-full flex justify-center items-center border border-white border-opacity-30';

export const LeftArrowBtn = ({ onClick, className }: any) => {
  return (
    <div
      className={cn(
        'w-space-60 h-space-60 flex justify-center items-center',
        className,
      )}
    >
      <button onClick={onClick} className={clsx(common_btn_styles)}>
        <GoArrowLeft size={24} color='#FFF' />
      </button>
    </div>
  );
};

export const RightArrowBtn = ({ onClick, className }: any) => {
  return (
    <div
      className={cn(
        'w-space-60 h-space-60 flex  justify-center items-center',
        className,
      )}
    >
      <button onClick={onClick} className={clsx(common_btn_styles)}>
        <GoArrowRight size={24} color='#FFF' />
      </button>
    </div>
  );
};

// <div
// className={cn('controls w-full z-50 flex justify-end gap-4', className)}
// >
// <button
//   onClick={onPrevClick}
//   className='w-space-60 h-space-60 rounded-full flex justify-center items-center border border-white border-opacity-30'
// >
//   <GoArrowLeft size={24} />
// </button>
// </div>
