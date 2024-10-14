import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { ImSpinner2 } from 'react-icons/im';

import { ButtonProps } from '@/lib/types/Buttons';
import { cn } from '@/lib/utils';

const ButtonArrowRight = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      // children,
      href,
      className,
      disabled,
      isLoading,
      variant = 'primary',
      size = 'normal',
      isDarkBg = false,
      isIconOnly,
      iconStyle,
      ...rest
    },
    ref,
  ) => {
    return (
      <>
        {!isIconOnly && (
          <button
            ref={ref}
            type='button'
            disabled={disabled}
            className={cn(
              'inline-flex items-center rounded-full font-medium',
              'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
              'shadow-sm transition-colors duration-75',
              'disabled:cursor-not-allowed',
              'bg-white blur-2 border border-white border-opacity-15 bg-opacity-10',
              [size === 'normal' && ['pl-5 py-2 pr-2']],
              [
                variant === 'primary' && [''],
                variant === 'primary-reverse' && [''],
              ],
              isLoading &&
                'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
              className,
            )}
            {...rest}
          >
            {isLoading && (
              <div
                className={cn(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                  {
                    'text-white': ['primary', 'dark'].includes(variant),
                    'text-black': ['light'].includes(variant),
                    'text-primary-500': ['outline', 'ghost'].includes(variant),
                  },
                )}
              >
                <ImSpinner2 className='animate-spin' />
              </div>
            )}
            {!isLoading && (
              <>
                <span
                  className={cn(
                    [size === 'normal' && ['text-body-lg']],
                    'mr-2',
                  )}
                >
                  {text}
                </span>
                <div
                  className={cn([
                    'bg-surface-brand-default rounded-full p-2',
                    size === 'normal' && 'ml-1',
                    size === 'small' && 'ml-1.5',
                  ])}
                >
                  <MdArrowOutward
                    size='20px'
                    color='#FFFF'
                    className={cn([
                      'text-text-icon-brand',
                      size === 'normal' && 'text-md md:text-md',
                      size === 'small' && 'md:text-md text-sm',
                      'text-color-primary',
                    ])}
                  />
                </div>
              </>
            )}
          </button>
        )}
        {isIconOnly && (
          <button
            ref={ref}
            type='button'
            disabled={disabled}
            className={cn(
              [size === 'normal' && ['']],
              [
                variant === 'primary' && [''],
                variant === 'primary-reverse' && [''],
              ],
              [
                'bg-surface-brand-default rounded-full ',
                size === 'normal' || (size === 'large' && 'p-4'),
                size === 'small' && 'p-2',
                size === 'large' && 'p-4',
                size === 'xlarge' && 'p-4',
              ],
              isLoading &&
                'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
              className,
            )}
            {...rest}
          >
            <MdArrowOutward
              size={
                size === 'small'
                  ? '20px'
                  : size === 'normal'
                    ? '24px'
                    : size === 'large'
                      ? '32px'
                      : size === 'xlarge'
                        ? '40px'
                        : '20px'
              }
              color='#FFFF'
            />
          </button>
        )}
      </>
    );
  },
);

export default ButtonArrowRight;
