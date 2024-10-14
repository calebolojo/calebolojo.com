'use client';

import React from 'react';
import styled from 'styled-components';

import { ProjectType } from '@/lib/types';

import { showcase_projects } from '@/data/projects';

import ButtonArrowRight from '@/components/buttons/ButtonArrowRight';
import ImagesShowcase from '@/components/images-showcase/ImagesShowcase';
import { LinkPreview } from '@/components/ui/link-preview';

export default function SingleWorkPage() {
  const work: ProjectType = {
    id: 1,
    title: 'Movieflix',
    slug: 'ovie-flix',
    description:
      'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur estat.',
    shortSummary:
      'Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis.',
    year: '2024',
    highlightTags: ['Finance', 'Visualization'],
    client: 'Netflix Inc',
    industry: 'Entertainment',
    role: 'Designer',
    sections: [
      {
        title: 'Background',
        bodyHtml:
          'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      },
      {
        title: 'Problem',
        bodyHtml:
          'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      },
      {
        title: 'Solution',
        bodyHtml:
          'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      },
    ],
    wireframeShots: [
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
    ],
    highFidelityShots: [
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
    ],
    systemDesignShots: [
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
    ],
    isFeaturedInHomePage: true,
    fullscreenFeaturedImage: '/images/macbook-mockup-demo.png',
    fullscreenFeaturedGif: '/images/macbook-mockup-demo.png',
    cardFeaturedImage: {
      src: '/images/macbook-mockup-demo.png',
      alt: '',
      caption: '',
    },
    cardFeaturedGif: {
      src: '/images/macbook-mockup-demo.png',
      alt: '',
      caption: '',
    },
    showcaseGallery: [
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
      {
        src: '/images/macbook-mockup-demo.png',
        alt: '',
        caption: '',
      },
    ],
    conclusion:
      'Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.',
    previewLink: '#',
    repoLink: '',
  };

  const BannerImage = styled.div<{ img: string }>`
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 540px;
  `;
  return (
    <main>
      <section>
        <div className='container'>
          <div className='flex flex-col lg:flex-row justify-between pt-space-80 pb-space-80'>
            <div className='w-full md:w-1/2'>
              <h1 className='text-headline lg:text-display-xl pb-8'>
                {work.title}
              </h1>
            </div>
            <div className='w-full lg:w-1/2 pl-space-0 lg:pl-space-140'>
              <p className='text-body-xl text-grey-light-200 pb-10'>
                {work.description}
              </p>
              <ButtonArrowRight text='Live Preview' href='#' />
            </div>
          </div>
        </div>
      </section>
      <section className='relative overflow-hidden'>
        <BannerImage img={work.fullscreenFeaturedImage} />
      </section>

      <section>
        <div className='container relative flex flex-col lg:flex-row gap-space-60 lg:gap-space-140 py-space-60 lg:py-space-120'>
          <article className='w-10/12'>
            {work.sections?.map((each, i) => (
              <div
                key={i}
                className='w-full flex flex-col lg:flex-row justify-start gap-space-30 lg:gap-space-140 pb-space-100 last:pb-0'
              >
                <div className='w-full lg:w-3/12'>
                  <h3 className='text-title-xl font-[500]'>{each.title}</h3>
                </div>
                <div
                  className='w-full lg:w-9/12 text-body-lg text-grey-light-200'
                  dangerouslySetInnerHTML={{ __html: each.bodyHtml }}
                />
              </div>
            ))}
          </article>
          <aside className='w-full lg:w-2/12 flex justify-start lg:justify-end'>
            <div className='grid grid-cols-2 gap-x-8 lg:gap-x-0 lg:block'>
              <div className='pb-3'>
                <p className='text-body-sm text-text-icon-secondary-subtle'>
                  Highlights
                </p>
                <p className='text-body pt-1'>
                  {work.highlightTags.join(', ')}
                </p>
              </div>
              <div className='pt-0 lg:py-3'>
                <p className='text-body-sm text-text-icon-secondary-subtle'>
                  Role
                </p>
                <p className='text-body pt-1'>{work.role}</p>
              </div>
              <div className='py-3'>
                <p className='text-body-sm text-text-icon-secondary-subtle'>
                  Industry
                </p>
                <p className='text-body pt-1'>{work.industry}</p>
              </div>
              <div className='pt-3 pb-10'>
                <p className='text-body-sm text-text-icon-secondary-subtle'>
                  Year
                </p>
                <p className='text-body pt-1'>{work.year}</p>
              </div>
              <div>
                <ButtonArrowRight text='Live Preview' />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className='pb-space-80'>
        <div className='container relative flex gap-space-140 pb-space-40'>
          <div className='w-full lg:w-10/12'>
            <div className='flex flex-col lg:flex-row w-full justify-start gap-space-30 lg:gap-space-140 pb-space-30 lg:pb-space-100 last:pb-0'>
              <div className='w-full lg:w-3/12'>
                <h3 className='text-title-xl font-[500]'>Wireframe</h3>
              </div>
              <div className='w-full lg:w-9/12 text-body-lg text-grey-light-200'>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Vestibulum id ligula porta felis
                  euismod semper. Curabitur blandit tempus porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className='w-2/12 hidden lg:block' />
        </div>
        <ImagesShowcase
          type='full-free-slider'
          withControls
          constrolsPosition='top-right'
        />
      </section>

      <section className='pb-space-80'>
        <div className='container relative flex gap-space-140 pb-space-40'>
          <div className='w-full lg:w-10/12'>
            <div className='flex flex-col lg:flex-row w-full justify-start gap-space-30 lg:gap-space-140 pb-space-30 lg:pb-space-100 last:pb-0'>
              <div className='w-full lg:w-3/12'>
                <h3 className='text-title-xl font-[500]'>System Design</h3>
              </div>
              <div className='w-full lg:w-9/12 text-body-lg text-grey-light-200'>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Vestibulum id ligula porta felis
                  euismod semper. Curabitur blandit tempus porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className='w-2/12 hidden lg:block' />
        </div>
        <ImagesShowcase
          type='full-free-slider'
          withControls
          constrolsPosition='top-right'
        />
      </section>

      <section className='pb-space-80'>
        <div className='container relative flex gap-space-140 pb-space-40'>
          <div className='w-full lg:w-10/12'>
            <div className='flex flex-col lg:flex-row w-full justify-start gap-space-30 lg:gap-space-140 pb-space-30 lg:pb-space-100 last:pb-0'>
              <div className='w-full lg:w-3/12'>
                <h3 className='text-title-xl font-[500]'>UI Design</h3>
              </div>
              <div className='w-full lg:w-9/12 text-body-lg text-grey-light-200'>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Vestibulum id ligula porta felis
                  euismod semper. Curabitur blandit tempus porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className='w-2/12 hidden lg:block' />
        </div>
        <ImagesShowcase
          type='full-free-slider'
          withControls
          constrolsPosition='top-right'
        />
      </section>

      <section className='pb-0'>
        <div className='container relative flex gap-space-140 pb-space-40'>
          <div className='w-full lg:w-10/12'>
            <div className='flex flex-col lg:flex-row w-full justify-start gap-space-30 lg:gap-space-140 pb-space-30 lg:pb-space-100 last:pb-0'>
              <div className='w-full lg:w-3/12'>
                <h3 className='text-title-xl font-[500]'>Conclusion</h3>
              </div>
              <div className='w-full lg:w-9/12 text-body-lg text-grey-light-200'>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Vestibulum id ligula porta felis
                  euismod semper. Curabitur blandit tempus porttitor.
                </p>
              </div>
            </div>
          </div>
          <div className='w-2/12 hidden lg:block' />
        </div>
        <ImagesShowcase
          type='full-static-gif'
          withControls
          constrolsPosition='top-right'
        />
      </section>

      <section className='bg-grey-dark-700 py-space-80 lg:py-space-140'>
        <div className='container flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-4/12'>
            <h3 className='text-title pb-10'>Next Case Study</h3>
          </div>
          <div className='w-full lg:w-8/12'>
            {showcase_projects.slice(0, 2).map((each, i) => (
              <LinkPreview
                key={i}
                url=''
                imageSrc={each.cardFeaturedImage?.src as string}
                isStatic={true}
              >
                <div className='border-b border-b-border-subtle py-space-40 lg:py-space-60 first:pt-0'>
                  <div className='pb-2'>
                    <p className='text-body text-text-icon-brand'>
                      {each.highlightTags.join(', ')}
                    </p>
                  </div>
                  <div>
                    <h3 className='text-title lg:text-title-xl'>
                      {each.title}&nbsp;—&nbsp;
                      <span className='text-text-icon-secondary'>
                        {each.shortSummary}
                      </span>
                    </h3>
                  </div>
                </div>
              </LinkPreview>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
