import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './global.scss';
import StyledComponentsRegistry from 'src/lib/registry';

import { AppProvider } from '@providers/index';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Wefit',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/images/logoIcon.ico" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AppProvider>{children}</AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
