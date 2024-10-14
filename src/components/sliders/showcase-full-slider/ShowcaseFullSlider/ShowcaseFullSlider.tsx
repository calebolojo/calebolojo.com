import React, { useRef } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import styled from 'styled-components';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { cn } from '@/lib/utils';

import { demo_images } from '@/data/images';

import { ShowcaseSliderProps } from '@/components/images-showcase/ImagesShowcase';

export const SlideImage = styled.div<{ src: string }>`
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 650px;
`;

const ShowcaseSlider = ({
  images = demo_images,
  slidesPerView = 1.15,
  isFullscreen = true,
  className,
}: ShowcaseSliderProps) => {
  // const swiper = useSwiper();
  const swiperRef = useRef();

  return (
    <div className={cn(!isFullscreen && 'container pt-space-0')}>
      <Swiper
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => {
          // @ts-ignore
          swiperRef.current = swiper;
        }}
        slidesPerView={slidesPerView}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper relative'
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <SlideImage src={img.src as string} />
          </SwiperSlide>
        ))}
        <div className='controls w-full px-10 absolute top-[50%] translate-y-[-50%] z-50 flex justify-between'>
          <button
            // @ts-ignore
            onClick={() => swiperRef.current.slidePrev()}
            className='w-space-60 h-space-60 rounded-full flex justify-center items-center border border-white border-opacity-30'
          >
            <GoArrowLeft size={24} />
          </button>
          <button
            // @ts-ignore
            onClick={() => swiperRef.current.slideNext()}
            className='w-space-60 h-space-60 rounded-full flex justify-center items-center border border-white border-opacity-30'
          >
            <GoArrowRight size={24} />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ShowcaseSlider;
