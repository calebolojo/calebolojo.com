import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
const { nextui } = require('@nextui-org/react');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '984px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          lg: '32px',
          xl: '32px',
          '2xl': '32px',
        },
      },
      spacing: {
        'space-200': '200px',
        'space-140': '140px',
        'space-120': '120px',
        'space-100': '100px',
        'space-80': '80px',
        'space-60': '60px',
        'space-30': '30px',
        'space-40': '40px',
        'space-20': '20px',
        'space-10': '10px',
      },
      fontFamily: {
        primary: ['var(--font-neueMontreal)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'body-2xs': ['10px', { lineHeight: '14px', letterSpacing: '0.3px' }],
        'body-xs': ['12px', { lineHeight: '16px', letterSpacing: '0.36px' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '0.42px' }],
        body: ['16px', { lineHeight: '27px', letterSpacing: '0.8px' }],
        'body-lg': ['18px', { lineHeight: '33px', letterSpacing: '0.85px' }],
        'body-xl': ['20px', { lineHeight: '33px', letterSpacing: '0.65px' }],
        title: ['24px', { lineHeight: '32px', letterSpacing: '0.72px' }],
        'title-lg': ['28px', { lineHeight: '36px', letterSpacing: '0.84px' }],
        'title-xl': ['34px', { lineHeight: '44px', letterSpacing: '0.85px' }],
        'title-2xl': ['40px', { lineHeight: '44px', letterSpacing: '1px' }],
        headline: ['44px', { lineHeight: '48px', letterSpacing: '0.90px' }],
        'headline-lg': [
          '48px',
          { lineHeight: '52px', letterSpacing: '0.90px' },
        ],
        display: ['60px', { lineHeight: '64px', letterSpacing: '0.9px' }],
        'display-lg': ['70px', { lineHeight: '76px', letterSpacing: '0.84px' }],
        'display-xl': ['80px', { lineHeight: '86px', letterSpacing: '1.2px' }],
        'display-2xl': [
          '90px',
          { lineHeight: '94px', letterSpacing: '1.35px' },
        ],
        'display-3xl': ['100px', { lineHeight: '104px', letterSpacing: '1px' }],
        colossal: ['140px', '136px'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-orange-base) / <alpha-value>)',
          light: {
            '100': 'rgb(var(--color-orange-light-100) / <alpha-value>)',
            '200': 'rgb(var(--color-orange-light-200) / <alpha-value>)',
            '300': 'rgb(var(--color-orange-light-300) / <alpha-value>)',
            '400': 'rgb(var(--color-orange-light-400) / <alpha-value>)',
            '500': 'rgb(var(--color-orange-light-500) / <alpha-value>)',
          },
          dark: {
            '200': 'rgb(var(--color-orange-dark-100) / <alpha-value>)',
            '300': 'rgb(var(--color-orange-dark-200) / <alpha-value>)',
            '400': 'rgb(var(--color-orange-dark-300) / <alpha-value>)',
            '500': 'rgb(var(--color-orange-dark-400) / <alpha-value>)',
          },
        },
        grey: {
          DEFAULT: 'rgb(var(--color-grey-base) / <alpha-value>)',
          light: {
            100: 'rgb(var(--color-grey-light-100) / <alpha-value>)',
            200: 'rgb(var(--color-grey-light-200) / <alpha-value>)',
            300: 'rgb(var(--color-grey-light-300) / <alpha-value>)',
            400: 'rgb(var(--color-grey-light-400) / <alpha-value>)',
            500: 'rgb(var(--color-grey-light-500) / <alpha-value>)',
            600: 'rgb(var(--color-grey-light-600) / <alpha-value>)',
            700: 'rgb(var(--color-grey-light-700) / <alpha-value>)',
          },
          dark: {
            100: 'rgb(var(--color-grey-dark-100) / <alpha-value>)',
            200: 'rgb(var(--color-grey-dark-200) / <alpha-value>)',
            300: 'rgb(var(--color-grey-dark-300) / <alpha-value>)',
            400: 'rgb(var(--color-grey-dark-400) / <alpha-value>)',
            500: 'rgb(var(--color-grey-dark-500) / <alpha-value>)',
            600: 'rgb(var(--color-grey-dark-600) / <alpha-value>)',
            700: 'rgb(var(--color-grey-dark-700) / <alpha-value>)',
          },
        },
        surface: {
          default: 'rgb(var(--surface-default) / <alpha-value>)',
          subtle: 'rgb(var(--surface-subtle) / <alpha-value>)',
          'subtle-light': 'rgb(var(--surface-subtle-light) / <alpha-value>)',
          /* BRAND */
          'brand-default': 'rgb(var(--brand-surface-default) / <alpha-value>)',
          'brand-light': 'rgb(var(--brand-surface-light) / <alpha-value>)',
          'brand-subtle': 'rgb(var(--brand-surface-subtle) / <alpha-value>)',
          'brand-dark': 'rgb(var(--brand-surface-dark) / <alpha-value>)',
        },
        border: {
          default: 'rgb(var(--border-default) / <alpha-value>)',
          subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
          'brand-default': 'rgb(var(--brand-surface-default) / <alpha-value>)',
          'brand-light': 'rgb(var(--brand-surface-light) / <alpha-value>)',
          'brand-subtle': 'rgb(var(--brand-surface-subtle) / <alpha-value>)',
          'brand-dark': 'rgb(var(--brand-surface-dark) / <alpha-value>)',
        },
        'text-icon': {
          default: 'rgb(var(--text-icon-default) / <alpha-value>)',
          secondary: 'rgb(var(--text-icon-secondary) / <alpha-value>)',
          'secondary-light':
            'rgb(var(--text-icon-secondary-light) / <alpha-value>)',
          'secondary-subtle':
            'rgb(var(--text-icon-secondary-subtle) / <alpha-value>)',
          brand: 'rgb(var(--brand-text-icon) / <alpha-value>)',
        },
      },
      boxShadow: {
        xs: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
        sm: '0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 16px 32px -4px rgba(0, 0, 0, 0.1)',
        md: '0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 24px 48px -8px rgba(0, 0, 0, 0.12)',
        lg: '0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 40px 80px -16px rgba(0, 0, 0, 0.16)',
        xl: '0px 2px 4px 0px rgba(0, 0, 0, 0.04),0px 56px 112px -20px rgba(0, 0, 0, 0.18)',
      },
      blur: {
        sm: '8px',
        md: '32px',
        lg: '64px',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), nextui(), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
