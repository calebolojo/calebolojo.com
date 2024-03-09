import Link from 'next/link';
import React from 'react';

import './Header.scss';

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
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>Resume</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
            <li>
              <Link href='/'>Projects</Link>
            </li>
            <li>
              <Link href='/'>Playground</Link>
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
