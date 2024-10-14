import Image from 'next/image';
import React from 'react';

import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';

import { cn } from '@/utils/cn';

export interface ProjectCardProps {
  featuredImageSrc: string;
  featuredGifSrc: string;
  useGif: boolean;
  description: string;
  category?: string[];
  tags: string[];
  title: string;
  variant: 'card' | 'fullscreen';
  ctaBtnText: string;
  href: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      featuredImageSrc,
      featuredGifSrc,
      useGif,
      tags,
      title,
      description,
      variant,
      ctaBtnText,
      href,
      ...rest
    },
    ref,
  ) => {
    return (
      <>
        {variant === 'card' ? (
          <div
            ref={ref}
            className={cn('project-card card', 'relative')}
            {...rest}
          >
            <div
              className={cn(
                'featured-img relative flex justify-center items-center',
              )}
            >
              <div className='image-wrap overflow-hidden w-full h-full z-10'>
                <Image
                  alt=''
                  src={useGif ? featuredGifSrc : featuredImageSrc}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='object-fill'
                />
              </div>
              <div className='overlay bg-black opacity-45 w-full h-full absolute top-0 left-0 z-40' />
              <div className='container absolute h-full z-50'>
                <div className='flex gap-2 z-50 absolute top-space-30 left-space-30'>
                  {tags.slice(0, 1).map((tag, i) => (
                    <>
                      <span className='resource-tag' key={i + Math.random()}>
                        {tag}
                      </span>
                    </>
                  ))}
                </div>
                <div className='z-50'>
                  <ButtonArrowRight
                    variant='outline'
                    text={ctaBtnText}
                    href={href}
                    isIconOnly
                    size='large'
                    className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'
                  />
                </div>
                <div className='left-space-30 absolute bottom-space-30'>
                  <p className='text-title-xl p-0 m-0 '>{title}</p>
                </div>
              </div>
            </div>
          </div>
        ) : variant === 'fullscreen' ? (
          <section
            ref={ref}
            className={cn('w-full project-card mega relative card-glow')}
            {...rest}
          >
            <div
              className={cn(
                'featured-img relative flex justify-center items-center',
              )}
            >
              <div className='image-wrap overflow-hidden w-full h-full z-10'>
                <Image
                  alt=''
                  src={useGif ? featuredGifSrc : featuredImageSrc}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='object-fill'
                />
              </div>
              <div className='overlay bg-black opacity-45 w-full h-full absolute top-0 left-0 z-40' />
              <div className='container absolute h-full z-50'>
                <div className='flex gap-2 z-50 absolute top-space-60 left-0'>
                  {tags.slice(0, 1).map((tag, i) => (
                    <>
                      <span className='resource-tag' key={i + Math.random()}>
                        {tag}
                      </span>
                    </>
                  ))}
                </div>
                <div className='z-50'>
                  <ButtonArrowRight
                    variant='outline'
                    href={href}
                    size='large'
                    className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'
                    isIconOnly
                  />
                </div>
                <div className='p-0 m-0 absolute left-0 bottom-space-60'>
                  <p className='text-headline-lg '>{title}</p>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </>
    );
  },
);

export default ProjectCard;
