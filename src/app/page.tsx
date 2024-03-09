'use client';

import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import '../styles/home.scss';

import Header from '../components/Header/Header';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className='home-hero'>
        <div className='home-hero-container container mx-auto'>
          <div className='home-hero-wrap'>
            <h1 className='font-primary pb-10 font-semibold text-white'>
              Crafting Robust Full Stack Web Applications and Managing Cloud
              Infrastructure.
            </h1>
            <p className='font-300 font-light text-white'>
              Hi! I'm Caleb, a full stack engineer proficient in designing and
              implementing scalable, secure, and high-performance applications
              on AWS Cloud Services. Proven expertise in collaborating with
              cross-functional teams to deliver innovative solutions aligned
              with business objectives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
