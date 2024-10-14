'use client';

import { Linkedin, X } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { HiEnvelope } from 'react-icons/hi2';
import styled from 'styled-components';

import { cn } from '@/lib/utils';

import { posts } from '@/data/posts';

import BlogCard from '@/components/cards/blog-card/BlogCard';

export default function SingleBlogPage() {
  const post = {
    id: 12,
    isFeatured: false,
    title:
      'Understanding color theory: the color wheel and finding complementary colors',
    slug: 'understanding-color-theory-the-color-wheel-and-finding-complementary-colors',
    tags: ['colors', 'design'],
    category: ['UI Design'],
    featuredImage: {
      alt: '',
      caption: '',
      src: '/images/macbook-mockup-demo.png',
    },
    publishDate: 'August 01, 2023',
    author: 'Caleb Olojo',
    sections: [
      {
        title: 'Any mechanical keyboard enthusiasts in design?',
        anchorId: '#mechanical-keyboard',
        bodyHtml: `
        <div class="content-block">
            <div class="content-body">
              <div>
                <h2>Any mechanical keyboard enthusiasts in design?</h2>
              </div>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p>
            </div>
            <div class="content-media">
              <img src="http://via.placeholder.com/700x300" width="700" height="300" alt="" />
              <p class="caption">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor <span class="source">Source: Unsplash</span></p>
            </div>
            <div class="content-body">
              <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.
              </p>
              <div class="pt-6">
                <h3 class="pb-4">Venenatis dapibus posuere velit aliquet</h3>
                <ul>
                  <li>Ante venenatis dapibus posuere velit aliquet</li>
                  <li>Ante venenatis dapibus posuere velit aliquet</li>
                  <li>Ante venenatis dapibus posuere velit aliquet</li>
                  <li>Ante venenatis dapibus posuere velit aliquet</li>
                </ul>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: 'Any mechanical keyboard enthusiasts in design?',
        anchorId: '#mechanical-keyboard',
        bodyHtml: `
          <div class="content-block">
            <div class="content-body">
              <div>
                <h2>Any mechanical keyboard enthusiasts in design?</h2>
              </div>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p>
            </div>
            <div class="content-media">
              <img src="http://via.placeholder.com/700x300" width="700" height="300" alt="" />
              <p class="caption">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor <span>Source: Unsplash</span></p>
            </div>
            <div class="content-body">
              <p>Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a <a href="#" class="underline">ante venenatis dapibus posuere</a> velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.
              </p>
            </div>
          </div>
        `,
      },
    ],
    intro: `
    <div>
      <h3>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla</h3>
      <p class="highlightp">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor.</p>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </div>
    `,
    conclusion: {
      title: 'Any mechanical keyboard enthusiasts in design?',
      bodyHtml: `
        <div>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
      `,
    },
  };
  const related_posts = useMemo(
    () => posts.filter((each) => !each.isFeatured).slice(0, 3),
    [],
  );

  const PostImage = styled.div<{ postFeaturedImage: string }>`
    background: url(${(props) => props.postFeaturedImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 450px;
  `;

  return (
    <>
      <main>
        <section>
          <div className='container post-header flex justify-center'>
            <div className='w-full max-w-[800px]'>
              <div className='w-full pt-space-60 pb-space-30'>
                <p className='lead lead-lg pb-2'>Cybersecurity</p>
                <h1 className='text-title-2xl lg:text-headline-lg font-[500]'>
                  {post.title}
                </h1>
              </div>
              <div className='flex items-center justify-between border-t border-t-white border-opacity-25 pt-space-20 pb-space-20'>
                <div className='author flex items-center'>
                  {/* <div className='author_avi w-8 h-8 rounded-lg overflow-hidden'>
                    <Image
                      width={32}
                      height={32}
                      src='http://via.placeholder.com/32x32'
                      alt=''
                      objectFit='cover'
                    />
                  </div> */}
                  <p className='text-body-xs lg:text-body-sm text-text-icon-secondary '>
                    By &nbsp;
                    <span className='text-white'>{post.author}</span>
                  </p>
                </div>
                <div>
                  <p className='text-body-xs text-body-sm text-text-icon-secondary'>
                    {post.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PostImage postFeaturedImage={post.featuredImage.src} />
        <section className='relative pt-space-80'>
          <div className={cn('container')}>
            <aside className='w-full fixed top-0 left-0 lg:max-w-[268px] lg:absolute lg:top-space-80 lg:left-space-60'>
              <div className='hidden lg:flex gap-2 pb-10'>
                {post.tags.map((each, i) => (
                  <span key={i} className='tag'>
                    {each}
                  </span>
                ))}
              </div>
              <div className='bg-surface-default lg:bg-transparent table_of_content px-4 py-4 lg:px-0 lg:py-[30px] border-y border-y-border-default'>
                <p className='lead lead-sm pb-2 lg:pb-4'>In this article</p>
                <div>
                  <ul>
                    {post.sections.map((each, i) => (
                      <li
                        key={each.anchorId}
                        className='mb-1 lg:mb-3 last:mb-0'
                      >
                        <a
                          href={`#${each.anchorId}`}
                          className='text-body-xs lg:text-body'
                        >
                          {each.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='socials hidden lg:inline-flex items-center gap-3 pt-10'>
                <Link href='#'>
                  <Linkedin size={20} />
                </Link>
                <Link href='#'>
                  <X />
                </Link>
                <Link href='#'>
                  <HiEnvelope />
                </Link>
              </div>
            </aside>
            <div className={cn('post-body max-w-autofill flex justify-center')}>
              <article className='article w-full max-w-[800px]'>
                <div className='article-block inner w-full'>
                  <div className='content-block'>
                    <div
                      className='content-body'
                      dangerouslySetInnerHTML={{ __html: post.intro }}
                    />
                  </div>
                  {post.sections.map((each, i) => (
                    <div
                      key={i}
                      className=''
                      dangerouslySetInnerHTML={{ __html: each.bodyHtml }}
                    />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className='py-space-140'>
          <div className='container '>
            <h3 className='text-display pb-space-60'>Related</h3>
          </div>
          <div
            className={cn('container grid grid-cols-1 lg:grid-cols-3 gap-10')}
          >
            {related_posts.map((each, i) => (
              <BlogCard
                key={i}
                {...each}
                publishDate='August 20, 2024'
                variant='card'
                featuredImage={each.featuredImage?.src as string}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
