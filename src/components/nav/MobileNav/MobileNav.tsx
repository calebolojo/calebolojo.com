'use client';
import React from 'react';
import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';
import { NavLink } from '@/components/nav/NavLink/NavLink';
import Logo from '@/components/logo/Logo';
import { navMenuLinks } from '@/components/nav/Nav';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position?: 'right' | 'left';
}

const MobileNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  position,
}: MobileNavProps) => {
  const handleClose = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <section
      className={cn(
        [isMobileMenuOpen ? 'block z-[999]' : 'hidden z-[-999]'],
        'w-full h-full overflow-hidden bg-black bg-opacity-5 bg-backdrop-blur-lg flex justify-end items-start fixed top-0 ',
      )}
    >
      <nav className='w-full max-w-[762px] bg-surface-default relative h-full pl-space-100 pr-space-80 pt-space-40 pb-space-60 flex flex-col justify-between items-start'>
        <div className='head w-full flex justify-between items-center'>
          {/* <div className='nav-logo'><Logo /></div> */}
          {/* <div className='nav-cta'>
            <ButtonArrowRight text="Let's Connect" variant='primary-reverse' />
          </div> */}
          <div className='absolute top-8 right-space-60'>
            <button
              onClick={handleClose}
              className='appearance-none bg-surface-brand-default rounded-full p-4'
            >
              <IoCloseOutline size={40} />
            </button>
          </div>
        </div>
        <div className='body w-full'>
          <div className='mb-4'>
            <span className='lead lead-sm'>Navigation</span>
          </div>
          <div className='nav-links flex flex-col gap-space-30 pb-10'>
            {navMenuLinks.map(({ title, href }, index) => (
              <NavLink
                exact
                key={index}
                href={href}
                className='text-text-icon-secondary text-display font-[500] hover:text-text-icon-default transition-all ease-in-out duration-200'
              >
                {title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='foot w-full'>
          <div className='mb-4'>
            <span className='lead lead-sm'>Socials</span>
          </div>
          <div className=''>
            <ul className='inline-flex gap-5'>
              <li>
                <Link href='#' className='text-body-sm'>
                  Twitter(X)
                </Link>
              </li>
              <li>
                <Link href='#' className='text-body-sm'>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default MobileNav;
