import { NextUIProvider } from '@nextui-org/react';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/infinite-horizontal-scroll.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { cn } from '@/lib/utils';

import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
};

const neueMontreal = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/NeueMontreal-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/NeueMontreal-Bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-BoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-neueMontreal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='dark'>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </head>
      <body
        className={cn(
          'dark',
          'bg-surface-default text-text-icon-default',
          neueMontreal.className,
        )}
      >
        <link
          rel='stylesheet'
          href='https://unpkg.com/lenis@1.1.9/dist/lenis.css'
        />
        <NextUIProvider>
          <Nav />
          {children}
          <Footer />
        </NextUIProvider>
        <script
          src='https://unpkg.com/lenis@1.1.9/dist/lenis.min.js'
          defer
        ></script>
      </body>
    </html>
  );
}
