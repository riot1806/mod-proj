import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-phone-number-input/style.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { nprogressConfig } from '@/utils/nprogress';
import { DrawerContextProvider } from '@/context/DrawerContext';
import Layout from '@/components/layout/Layout';
import withReduxProvider from '@/hoc/withReduxProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Layout>
        <NextNProgress {...nprogressConfig} />
        <Component {...pageProps} />
      </Layout>
    </DrawerContextProvider>
  );
}

export default withReduxProvider(App);
