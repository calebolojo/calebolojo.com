import { motion } from 'framer-motion';
import React from 'react';

import styles from '../cta.module.scss';

import { cn } from '@/lib/utils';

import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';

const SeeMyWorksCta = () => {
  return (
    <motion.section className={cn(styles.seeMyWorksCta, 'section-margin ')}>
      <div
        className={cn(
          styles.seeMyWorksCta_container,
          'container bg-surface-brand-default rounded-lg px-0 lg:px-space-60 pt-space-60 lg:pt-space-80 pb-space-80 lg:pb-space-100 flex-column lg:flex-row justify-between items-center',
        )}
      >
        <div className='px-10 lg:px-0 pb-10 md:pb-0'>
          <h4 className='text-title-2xl font-[500] lg:text-headline-lg text-white'>
            See how I've turned
            <br /> ideas into reality
          </h4>
        </div>
        <div className='px-10 lg:px-0'>
          <ButtonArrowRight text='More Works' variant='outline' />
        </div>
      </div>
    </motion.section>
  );
};

export default SeeMyWorksCta;
