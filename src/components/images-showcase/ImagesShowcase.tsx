import Image from 'next/image';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { ImageType } from '@/lib/types';

import { demo_images } from '@/data/images';

import ShowcaseSlider, {
  SlideImage,
} from '@/components/sliders/showcase-full-slider/ShowcaseFullSlider/ShowcaseFullSlider';

export interface ShowcaseSliderProps extends React.ComponentProps<'div'> {
  withControls?: boolean;
  constrolsPosition?:
    | 'top-left'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center';
  images?: ImageType[];
  isFullscreen?: boolean;
  slidesPerView?: number;
}

interface ImageShowcaseProps extends ShowcaseSliderProps {
  type:
    | 'full-static-gif'
    | 'full-free-slider'
    | 'masonry'
    | 'horizontal-infinite-scroll'
    | 'horizontal-scroll-hijack';
  gutter?: number;
}

export default function ImagesShowcase({
  type,
  withControls,
  constrolsPosition,
  images = demo_images,
  slidesPerView = 1.15,
  isFullscreen = true,
  className,
  gutter = 16,
}: ImageShowcaseProps) {
  return (
    <section>
      <div>
        {type === 'masonry' && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter={`${gutter}px`}>
              {images?.map(({ src, alt }, i) => (
                <div
                  key={i}
                  className='relative overflow-hidden w-full h-[450px]'
                >
                  <Image
                    src={src as string}
                    alt={alt as string}
                    fill
                    objectFit='cover'
                    objectPosition='center'
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
        {type === 'full-free-slider' && (
          <ShowcaseSlider
            title='System Design'
            withControls
            constrolsPosition='top-right'
            className='py-space-140'
          />
        )}
        {type === 'full-static-gif' && (
          <SlideImage src={demo_images[0].src as string} />
        )}
      </div>
    </section>
  );
}
