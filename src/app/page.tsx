'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useMemo } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import styles from './index.module.scss';

import { CapababilityType } from '@/lib/types';

import { showcase_projects } from '@/data/projects';

import ProcessBlurb, {
  ProcessBlurbType,
} from '@/components/blurb/ProcessBlurb';
import ProjectCard from '@/components/cards/project-card/ProjectCard';
import SeeMyWorksCta from '@/components/cta/see-my-works-cta/SeeMyWorksCta';
import {
  CardTypesEnum,
  InfiniteHorizontalMovingCards,
} from '@/components/infinite-horizontal-moving-cards/InfiniteHorizontalMovingCards';
import {
  LeftArrowBtn,
  RightArrowBtn,
} from '@/components/slider-arrow-controls/SliderArrowControlButtons';

import { cn } from '@/utils/cn';

const defaultAccordionContent =
  'Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.';

const myProcessSliderSettings = {
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  prevArrow: <LeftArrowBtn />,
  nextArrow: <RightArrowBtn />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 984,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  // afterChange: current => {
  //   setProgress(100 / (data.length - slideToShow + 1) * (current + 1));
  //   console.log(slideToShow)
  // }
};

export default function HomePage() {
  const featuredProject = useMemo(() => {
    return showcase_projects.filter(
      (project) => project.isFeaturedInHomePage === true,
    )[0];
  }, []);

  const projects = useMemo(() => {
    return showcase_projects.filter(
      (project) => project.isFeaturedInHomePage === false,
    );
  }, []);

  const HomeHeroSection = styled.section`
    background-image: url('/images/abstract-liquid.png');
    background-position: center;
    background-size: cover;
    margin-top: -86px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        9deg,
        rgba(0, 0, 0, 100) 20%,
        rgba(0, 0, 0, 0) 70%
      );
      z-index: 9;
    }
  `;

  return (
    <main>
      <HomeHeroSection className='hero relative after:absolute after:w-full after:h-full after:'>
        <div className='container relative z-[99]'>
          <motion.div className='hero_wrap pt-space-140 md:pt-space-140'>
            <motion.div className='intro text-display md:text-display-lg lg:text-display-3xl xl:text-colossal pb-space-60 md:pb-space-100'>
              <h1 className='text-display md:text-display-lg lg:text-display-3xl xl:text-colossal'>
                I'm&nbsp;
                <span>Caleb</span>,
              </h1>
              <h1 className='text-display md:text-display-lg lg:text-display-3xl xl:text-colossal'>
                a fullstack developer based in&nbsp;
                <span className='relative'>
                  Atlanta
                  <svg
                    width='75'
                    height='75'
                    viewBox='0 0 75 75'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-flex ml-6'
                  >
                    <g clipPath='url(#clip0_1033_2038)'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 0H75V75H0V0Z'
                        fill='#FF6200'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.4127 66.9646C10.4822 67.4214 1.39179 63.7872 6.87994 53.677C6.87994 54.2544 8.32426 60.6099 15.5458 60.3212C19.1967 60.1745 22.4787 56.5657 24.2117 53.677C24.2117 53.0996 19.0123 55.121 17.2788 55.6992C18.4344 47.3216 27.6781 46.7438 28.8337 45.0112C36.3444 29.9898 45.0099 14.9689 60.0308 7.45825C58.8756 10.9247 56.5457 14.053 54.8314 17.2797C49.9206 26.5234 51.0766 28.2564 50.7875 40.9665C55.9811 39.8121 58.2982 38.3666 61.7642 29.7007C68.4045 38.6507 58.8756 44.1439 50.7875 46.166C51.3649 51.9432 54.2536 57.7209 59.453 61.1869C64.6525 61.7643 66.9637 55.9875 66.3859 51.3654C69.8519 54.8315 70.1406 59.1648 68.408 62.6316C64.0747 68.1198 60.8973 67.2529 57.4305 66.0977C51.0758 62.6316 48.4759 54.8315 47.3203 47.8994C47.3203 47.3212 32.8772 51.3654 32.8772 51.3654C27.6785 61.476 23.9234 66.3868 16.4127 66.9646Z'
                        fill='white'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M35.767 43.2775C38.6556 37.4999 43.5663 28.5453 47.6106 23.3455C46.1659 28.8336 46.0367 36.4139 45.0099 41.5437C40.9664 42.1215 37.5 43.2775 35.767 43.2775Z'
                        fill='#FF6200'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1033_2038'>
                        <rect width='75' height='75' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </h1>
            </motion.div>
            <motion.div className='about py-space-60 md:py-space-100 text-text-icon-secondary border-y-[1px] border-border-default'>
              <p className='lead lead-sm pb-4'>About Me</p>
              <p className='text-title md:text-title-xl text-text-icon-secondary-subtle font-[400]'>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </HomeHeroSection>

      <motion.section className='home-featured-work section-pad relative z-[100]'>
        <ProjectCard
          featuredImageSrc={featuredProject.fullscreenFeaturedImage}
          featuredGifSrc={featuredProject.fullscreenFeaturedGif}
          useGif
          description={
            (featuredProject.description as string).substring(0, 80) + '...'
          }
          tags={featuredProject.highlightTags}
          title={featuredProject.title}
          variant='fullscreen'
          ctaBtnText='See Project'
          href=''
        />
      </motion.section>

      <motion.section className='projects-card-section section-pad'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-12 gap-y-space-40 lg:gap-y-space-80'>
          {projects.map((project) => (
            <motion.div key={project.id}>
              <ProjectCard
                featuredImageSrc={project.fullscreenFeaturedGif}
                featuredGifSrc={project.fullscreenFeaturedGif}
                useGif
                description={
                  (featuredProject.description as string).substring(0, 80) +
                  '...'
                }
                tags={project.highlightTags}
                title={project.title}
                variant='card'
                ctaBtnText='See Project'
                href=''
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={cn(
          styles.calebHeadshotParallax,
          'relative section-margin h-[500px] lg:h-[740px]',
        )}
      >
        <Image
          src='/images/caleb-home-featured-headshot.png'
          alt=''
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='object-fill'
        />
      </motion.section>

      {/* <InfiniteMovingCards
        items={infiniteScrollItems}
        direction='right'
        speed='slow'
      /> */}
      <motion.section
        className={cn(styles.myprocess, 'my-process section-pad relative')}
      >
        <div className='container overflow-visible'>
          <div className='process-lef pb-space-60'>
            <h3 className='xl-title'>My Process</h3>
          </div>
          <motion.div
            className={cn(styles.myprocess_steps, 'relative slider-container')}
          >
            <Slider {...myProcessSliderSettings}>
              {myProcess.map((process) => (
                <ProcessBlurb
                  key={process.id}
                  title={process.title}
                  stepNumberLabel={process.stepNumberLabel}
                  iconSvg={process.iconSvg}
                  copy={process.copy}
                  id={process.id}
                />
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.section>

      <SeeMyWorksCta />

      <motion.section className={cn('capabilities section-pad')}>
        <div className='container'>
          <div className='head pb-5 lg:pb-space-60'>
            <h3 className='xl-title'>Capabilities</h3>
          </div>
          <Accordion className='capabilities-accordion'>
            {capabilities.map(({ id, label, title, content }) => (
              <AccordionItem
                key={id}
                aria-label={label}
                title={title}
                className='capabilities-accordion-item'
              >
                {content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      <section className='section-pad bg-surface-subtle overflow-hidden'>
        <div className='container'>
          <div className='head pb-space-60'>
            <h3 className='xl-title'>More Works</h3>
          </div>
        </div>
        <div className='pb-0'>
          <InfiniteHorizontalMovingCards
            items={projects}
            cardType={CardTypesEnum.PROJECT_CARD}
            direction='right'
            speed='slow'
          />
        </div>
        <div>
          <InfiniteHorizontalMovingCards
            items={projects}
            cardType={CardTypesEnum.PROJECT_CARD}
            direction='left'
            speed='slow'
          />
        </div>
      </section>
    </main>
  );
}

const capabilities: CapababilityType[] = [
  {
    id: 1,
    label: 'Front end development',
    title: 'Front end development',
    content: (
      <>
        <p>{defaultAccordionContent}</p>
      </>
    ),
  },
  {
    id: 2,
    label: 'Back End Development',
    title: 'Back End Development',
    content: (
      <>
        <p>{defaultAccordionContent}</p>
      </>
    ),
  },
  {
    id: 3,
    label: 'Mobile Development',
    title: 'Mobile Development',
    content: (
      <>
        <p>{defaultAccordionContent}</p>
      </>
    ),
  },
  {
    id: 4,
    label: 'Cloud Computing',
    title: 'Cloud Computing',
    content: (
      <>
        <p>{defaultAccordionContent}</p>
      </>
    ),
  },
  {
    id: 5,
    label: 'Cybersecurity',
    title: 'Cybersecurity',
    content: (
      <>
        <p>{defaultAccordionContent}</p>
      </>
    ),
  },
];

const myProcess: ProcessBlurbType[] = [
  {
    id: 1,
    stepNumberLabel: '01',
    title: 'Strategy & Wireframe',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M64 30.4532H35.7314L55.7199 10.4647L53.5313 8.28006L33.5468 28.2646V0H30.4532V28.2646L10.4647 8.28006L8.28006 10.4647L28.2646 30.4532H0V33.5468H28.2646L8.28006 53.5313L10.4647 55.7199L30.4532 35.7314V64H33.5468V35.7314L53.5313 55.7199L55.7199 53.5313L35.7314 33.5468H64V30.4532Z'
          fill='#FF6200'
        />
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    id: 2,
    stepNumberLabel: '02',
    title: 'System Design',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M40.608 6.10352e-05V20.3035H20.306V40.603H0V64H64.004V6.10352e-05H40.608ZM23.4 23.4051H40.608V40.611H23.4V23.4051ZM20.306 60.9145H3.09394V43.6966H20.306V60.9145ZM40.608 60.9145H23.4V43.6966H40.608V60.9145ZM60.91 60.9145H43.694V43.6966H60.9021L60.91 60.9145ZM60.91 40.611H43.694V23.4051H60.9021L60.91 40.611ZM43.694 20.3035V3.09362H60.9021V20.3035H43.694Z'
          fill='#FF6200'
        />
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    id: 3,
    stepNumberLabel: '03',
    title: 'API Development',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.7501 0.00012207H0V63.996H64.0239V0.00012207H33.7501ZM30.4732 3.09368V57.4502L3.29289 3.09368H30.4732ZM3.09356 60.8986V9.62759L28.7231 60.8906L3.09356 60.8986ZM33.5508 60.8986V6.54201L60.731 60.8986H33.5508ZM35.3009 3.09368H60.9104V54.3128L35.3009 3.09368Z'
          fill='#FF6200'
        />
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    id: 4,
    stepNumberLabel: '04',
    title: 'UI Design',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_1203_1828)'>
          <path
            d='M33.5508 0.035914C33.0405 0.0119947 32.5223 0 32.0041 0H0.000183105V64H32.0041C32.5223 64 33.0405 64 33.5508 63.9641C41.7663 63.5747 49.5164 60.0371 55.1928 54.0853C60.8692 48.1336 64.036 40.2247 64.036 32C64.036 23.7754 60.8692 15.8665 55.1928 9.91468C49.5164 3.9629 41.7663 0.425278 33.5508 0.035914ZM30.4573 3.09356V28.2686L5.29034 3.09356H30.4573ZM3.09365 5.28217L29.8035 31.992L3.09365 58.7019V5.28217ZM5.28236 60.9065L30.4573 35.7354V60.9065H5.28236ZM52.4431 52.439C47.4048 57.4882 40.6738 60.4908 33.5508 60.8666V3.13736C39.1283 3.4353 44.5001 5.34303 49.0162 8.62966C53.5323 11.9163 56.9993 16.4411 58.9979 21.6567C60.9966 26.8723 61.4411 32.5553 60.2778 38.0183C59.1145 43.4812 56.3932 48.4901 52.4431 52.439Z'
            fill='#FF6200'
          />
        </g>
        <defs>
          <clipPath id='clip0_1203_1828'>
            <rect width='64.004' height='64' fill='white' />
          </clipPath>
        </defs>
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    id: 5,
    stepNumberLabel: '05',
    title: 'Front end Development',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.10352e-05 0V64H64.0001V0H6.10352e-05ZM3.09362 60.9065V33.5906C10.2125 33.9788 16.9375 36.9811 21.9792 42.022C27.0209 47.063 30.0243 53.7876 30.4134 60.9065H3.09362ZM30.4134 30.4532H3.09362V3.13736C10.2125 3.52549 16.9375 6.52795 21.9792 11.5689C27.0209 16.6098 30.0243 23.3344 30.4134 30.4532ZM30.4532 33.5467V48.7355C27.2789 42.0828 21.9173 36.7211 15.2646 33.5467H30.4532ZM33.5468 60.9065V33.5906C40.6657 33.9788 47.3907 36.9811 52.4324 42.022C57.474 47.063 60.4775 53.7876 60.8666 60.9065H33.5468ZM33.5468 3.13736C40.6657 3.52549 47.3907 6.52795 52.4324 11.5689C57.474 16.6098 60.4775 23.3344 60.8666 30.4532H33.5588L33.5468 3.13736ZM30.4532 3.09356V18.2822C27.2789 11.6295 21.9173 6.26792 15.2646 3.09356H30.4532ZM45.7177 33.5467H60.9065V48.7355C57.7308 42.0837 52.3695 36.7224 45.7177 33.5467ZM45.7177 3.09356H60.9065V18.2822C57.7308 11.6304 52.3695 6.26926 45.7177 3.09356Z'
          fill='#FF6200'
        />
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    id: 6,
    stepNumberLabel: '06',
    title: 'Integration & Testing',
    iconSvg: (
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M63.9959 0H-0.00012207V63.996H63.9999L63.9959 0ZM60.9023 47.2725L53.8621 10.1497L16.7394 3.09356H60.9183L60.9023 47.2725ZM30.4532 33.5468L55.8275 57.6654L23.397 40.603L6.33455 8.16844L30.4532 33.5468ZM8.1723 6.33462L40.6029 23.3771L57.6653 55.8116L33.5308 30.4532L8.1723 6.33462ZM43.6964 20.2875L11.4374 4.95926L50.7526 13.2313L59.0447 52.5586L43.6964 20.2875ZM20.3034 43.7085L52.5585 59.0368L13.2433 50.7647L4.97119 11.4494L20.3034 43.7085ZM3.09344 16.7355L10.1497 53.8582L47.2764 60.9144H3.09344V16.7355Z'
          fill='#FF6200'
        />
      </motion.svg>
    ),
    copy: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
];
