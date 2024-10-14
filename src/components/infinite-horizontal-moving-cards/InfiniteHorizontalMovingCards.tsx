'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { cn } from '@/lib/utils';

export enum CardTypesEnum {
  LOGO = 'Logo',
  PROJECT_CARD = 'Project Card',
  BLOG_CARD = 'Blog Card',
}

interface InfiniteHorizontalMovingCardsProps {
  items: any[];
  cardType: CardTypesEnum;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteHorizontalMovingCards = ({
  items,
  cardType,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: InfiniteHorizontalMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => addAnimation(), []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        // 'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0  gap-4  py-4 w-max flex-nowrap',
          cardType === CardTypesEnum.LOGO && 'gap-16',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((el, idx) => {
          if (cardType === CardTypesEnum.LOGO) {
            return <div key={idx}>{el.svgElement}</div>;
          } else if (cardType === CardTypesEnum.PROJECT_CARD) {
            return (
              <li
                key={idx}
                className={cn('max-w-full h-auto w-[480px] md:h-[340px]')}
              >
                <ProjectImageShot src={el.fullscreenFeaturedImage} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const ProjectImageShot = styled.div<{ src: string }>`
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
