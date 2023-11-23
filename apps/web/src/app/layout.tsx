import '@mantine/core/styles.css';
import '../styles/globals.scss';
import { ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: '@arsams/color-shades',
  description: 'Color shades generator',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
