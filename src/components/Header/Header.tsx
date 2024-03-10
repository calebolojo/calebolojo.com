import Link from 'next/link';
import React from 'react';

import './Header.scss';

import { NavLink } from '../../app/components/NavLink/NavLink';

const Header = () => {
  return (
    <header className='header'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='header-logo'>
          <p className='text-white'>Caleb Olojo</p>
        </div>
        <nav className='header-nav'>
          <ul>
            <li>
              <NavLink exact={true} href='/'>Home</NavLink>
            </li>
            <li>
              <Link href='/'>Resume</Link>
            </li>
            <li>
              <NavLink exact={true} href='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink exact={true} href='/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink exact={true} href='/playground'>Playground</NavLink>
            </li>
            <li>
              <Link className='button btn-outline btn-outline-white' href='#'>
                Let's Connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
