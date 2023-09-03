import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { nprogressConfig } from '@/utils/nprogress';
import { DrawerContextProvider } from '@/context/DrawerContext';
import Layout from '@/components/layout/Layout';
import PreLoader from '@/components/pre-loader/PreLoader';
import withReduxProvider from '@/hoc/withReduxProvider';

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <DrawerContextProvider>
      <Layout>
        <NextNProgress {...nprogressConfig} />
        {isLoading && <PreLoader />}
        <Component {...pageProps} />
      </Layout>
    </DrawerContextProvider>
  );
}

export default withReduxProvider(App);
