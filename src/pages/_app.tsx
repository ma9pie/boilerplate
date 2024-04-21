import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import seoConfig from '../../next-seo.config';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // Remove console if not localhost
  useEffect(() => {
    const { location } = window;
    const { hostname } = location;
    if (hostname !== 'localhost') {
      console.log = () => {};
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <DefaultSeo {...seoConfig}></DefaultSeo>
        <Component {...pageProps} />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
