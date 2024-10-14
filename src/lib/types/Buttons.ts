import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons';

export const ButtonVariant = [
  'primary',
  'primary-reverse',
  'outline',
  'ghost',
  'blurred',
] as const;

export const ButtonSize = ['small', 'normal', 'large', 'xlarge'] as const;

export type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  href?: string;
  isIconOnly?: boolean;
  leftIcon?: IconType | LucideIcon;
  rightIcon?: IconType | LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
  iconStyle?: boolean;
  text?: string;
} & React.ComponentPropsWithRef<'button'>;
