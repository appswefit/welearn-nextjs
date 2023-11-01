'use client';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ClientErrorComponent } from '@components/client/ClientErrorComponent';

import './global.scss';

export const metadata: Metadata = {
  title: 'Blog Wefit',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/images/logoIcon.ico" />
      </head>
      <body className={inter.className}>
        <ClientErrorComponent error={error} reset={reset} />
      </body>
    </html>
  );
}
