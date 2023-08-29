import '@/styles/globals.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import { store } from '@/redux/store';
import { nprogressConfig } from '@/utils/nprogress';
import { DrawerContextProvider } from '@/context/DrawerContext';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DrawerContextProvider>
        <Layout>
          <NextNProgress {...nprogressConfig} />
          <Component {...pageProps} />
        </Layout>
      </DrawerContextProvider>
    </Provider>
  );
}
