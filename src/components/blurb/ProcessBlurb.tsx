import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

export interface ProcessBlurbType {
  id: number | string;
  title: string;
  iconSvg: ReactNode;
  copy: string;
  stepNumberLabel: string;
}

const ProcessBlurb = ({
  title,
  iconSvg,
  copy,
  stepNumberLabel,
}: ProcessBlurbType) => {
  return (
    // ease-in-out duration-200 group hover:border-border-brand-default hover:shadow-2xl hover:shadow-border-brand-default/50
    <motion.div className='process-blurb first:pl-0 px-10 bg-transparent w-full max-w-[400px] relative  cursor-pointer'>
      <motion.div className='xl-title text-grey-dark-600'>
        {stepNumberLabel}
      </motion.div>
      <motion.div className='border-t border-t-border-subtle mb-space-30 lg:mb-0 mt-space-30 lg:mt-space-60 pt-space-40 lg:pt-space-60'>
        <motion.div className='step-icon pb-8'>{iconSvg}</motion.div>
        <motion.div className='text'>
          <div className='title'>
            <h6 className='pb-6 text-title md:text-title-lg font-[400]'>
              {title}
            </h6>
          </div>
          <div className='copy'>
            <p className='text-grey-dark-200 text-body-xl font-[400] '>
              {copy}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessBlurb;
