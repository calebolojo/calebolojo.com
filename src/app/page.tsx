'use client';

import * as React from 'react';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
import { HiChevronDown } from 'react-icons/hi2';
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

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className='home-hero'>
        <div className='home-hero-container container relative mx-auto'>
          <div className='home-hero-wrap'>
            <p className='intro font-bold uppercase text-white'>
              Hello. I'm Caleb Olojo
            </p>
            <h1 className='font-primary pb-6 font-semibold text-white'>
              I Craft Robust Full Stack <br />
              Applications and Orchestrate
              <br />
              Cloud Infrastructure.
            </h1>
            <p className='copy font-300 font-light text-white'>
              A Senior Software Engineer proficient in designing and
              implementing scalable, secure, and high-performance applications
              on AWS Cloud Services. Proven expertise in collaborating with
              cross-functional teams to deliver innovative solutions.
            </p>
          </div>
          <div>
            <button>
              <ul>
                <li>
                  <HiChevronDown />
                </li>
                <li>
                  <HiChevronDown />
                </li>
                <li>
                  <HiChevronDown />
                </li>
              </ul>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
