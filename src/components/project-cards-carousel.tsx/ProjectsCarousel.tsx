import Image from 'next/image';
import React from 'react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProjectType } from '@/lib/types';

interface IProjectCarouselProps extends React.ComponentPropsWithRef<'div'> {
  title?: string;
  description?: string;
  projects: ProjectType[];
}

const ProjectCarousel = ({
  title,
  description,
  projects,
  ref,
  ...rest
}: IProjectCarouselProps) => {
  const settings1 = {
    freeMode: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    slidesPerView: 2.5,
    spaceBetween: 32,
    speed: 8000,
    modules: [Autoplay, Pagination, Navigation, Grid],
  };
  const settings2 = {
    freeMode: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    slidesPerView: 2.5,
    spaceBetween: 32,
    speed: 8000,
    modules: [Autoplay, Pagination, Navigation, Grid],
  };
  return (
    <div className='slider-container' ref={ref}>
      <div className='mb-8'>
        <Swiper className='caleb-projects-swiper' {...settings1}>
          {projects.map(({ cardFeaturedImage }, i) => (
            <SwiperSlide key={i}>
              <div className='rounded-md'>
                <Image
                  src={cardFeaturedImage?.src as string}
                  alt={cardFeaturedImage?.alt as string}
                  width={520}
                  height={396}
                  className='object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <Swiper className='caleb-projects-swiper' {...settings2}>
          {projects.map(({ cardFeaturedImage }, i) => (
            <SwiperSlide key={i}>
              <div className='rounded-md'>
                <Image
                  src={cardFeaturedImage?.src as string}
                  alt={cardFeaturedImage?.alt as string}
                  width={520}
                  height={396}
                  className='object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarousel;
