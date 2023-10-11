import { FC, PropsWithChildren } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
