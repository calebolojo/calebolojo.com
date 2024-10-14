'use client';
import React, { useState } from 'react';

import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';
import { NavLink } from '@/components/nav/NavLink/NavLink';
import Logo from '@/components/logo/Logo';
import MobileNav from '@/components/nav/MobileNav/MobileNav';
import { RiMenu4Fill } from 'react-icons/ri';

export const navMenuLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Works',
    href: '/works',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Resume',
    href: '/resume',
  },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='flex justify-between items-center px-6 py-4 relative z-[99] '>
        <div className='nav-logo'>
          <Logo />
        </div>
        <div className='nav-links gap-6 hidden md:flex'>
          {navMenuLinks.map(({ title, href }, index) => (
            <NavLink
              exact
              key={index}
              href={href}
              className='px-2 text-text-icon-secondary text-body leading-[18px] hover:text-text-icon-default transition-all ease-in-out duration-200'
            >
              {title}
            </NavLink>
          ))}
        </div>
        <div className='nav-cta flex items-center'>
          <ButtonArrowRight
            className='hidden md:flex'
            text="Let's Connect"
            variant='primary-reverse'
          />
          <button
            onClick={handleOpenMenu}
            className='md:hidden border-none appearance-none p-0 m-0'
          >
            <RiMenu4Fill
              size={40}
              color='#FFF'
              className='pointer-events-none'
            />
          </button>
        </div>
      </nav>

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
};

export default Nav;
