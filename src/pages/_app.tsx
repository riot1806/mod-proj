import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-phone-number-input/style.css';

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import dynamic from 'next/dynamic';

import { nprogressConfig } from '@/utils/nprogress';
import { DrawerContextProvider } from '@/context/DrawerContext';
import Layout from '@/components/layout/Layout';
import withReduxProvider from '@/hoc/withReduxProvider';

const TopWidget = dynamic(() => import('@/components/top-widget/TopWidget'), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Layout>
        <NextNProgress {...nprogressConfig} />
        <TopWidget />
        <Toaster position='top-center' />
        <Component {...pageProps} />
      </Layout>
    </DrawerContextProvider>
  );
}

export default withReduxProvider(App);
