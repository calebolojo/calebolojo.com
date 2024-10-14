// import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import styles from './footer.module.scss';

import { cn } from '@/lib/utils';

import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';

import { currentYear } from '@/utils/date-utils';

const Footer = () => {
  return (
    <footer
      className={cn(
        styles.footer,
        'section-pad pb-space-60 border-t-border-subtle border-t-[1px] overflow-hidden',
      )}
    >
      <div className='flex justify-between items-center gap-space-80 pb-space-60'>
        <div className='pb-0 lg:pb-space-60 '>
          <h2 className='font-[500] text-display-lg md:text-[100px] lg:text-[140px] text-nowrap'>
            Let's Connect
          </h2>
        </div>
        <ButtonArrowRight isIconOnly size='xlarge' />
        <div className='pb-0 lg:pb-space-60'>
          <h2 className='font-[500] text-display-lg md:text-[100px] lg:text-[140px] text-nowrap'>
            Let's Connect
          </h2>
        </div>
      </div>
      <div className='container'>
        <div className='footer_foot pt-10 lg:pt-space-80 pb-space-100 lg:pb-space-140 flex flex-col lg:flex-row gap-space-60 lg:gap-[260px] relative'>
          <div className='left'>
            <h4 className='text-title-xl lg:text-title-2xl mb-5 lg:mb-space-40'>
              <span className='text-text-icon-secondary block'>
                Ready to create something
              </span>
              <span className='block'>awesome together?</span>
            </h4>
            <ButtonArrowRight text={`Let's Connect`} size='normal' />
          </div>
          <div
            className={cn(
              styles.footerMenu,
              'right flex flex-col lg:flex-row gap-5 lg:gap-space-140',
            )}
          >
            <div>
              <h5 className='text-body-lg text-text-icon-brand'>Quick Links</h5>
              <ul>
                <li className='mb-2'>
                  <Link
                    href='/'
                    className='text-body-lg lg:text-title text-grey-light-400 py-2'
                  >
                    Home
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    href='/work'
                    className='text-body-lg lg:text-title  text-grey-light-400 py-2'
                  >
                    Work
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    href='/about'
                    className='text-body-lg lg:text-title  text-grey-light-400 py-2'
                  >
                    About
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    href='/contact'
                    className='text-body-lg lg:text-title  text-grey-light-400 py-2'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-body-lg text-text-icon-brand'>Socials</h5>
              <ul>
                <li>
                  <Link
                    href='#'
                    className='text-body-lg lg:text-title text-grey-light-400 py-2'
                  >
                    Twitter(X)
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-body-lg lg:text-title text-grey-light-400'
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-body-lg lg:text-title text-grey-light-400'
                  >
                    LinkTree
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright flex-col lg:flex-row justify-between'>
          <div>
            <p className='text-body-sm text-text-icon-secondary-subtle'>
              Designed and developed by{' '}
              <span className='text-white'>Caleb Olojo</span>
            </p>
          </div>
          <div>
            <p className='text-body-sm text-text-icon-secondary-subtle'>
              © {currentYear}. Caleb Olojo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
