import styles from './styles.module.scss';

import { useIsMobile } from '@/hooks/useIsMobile';
import HeaderTop from './parts/HeaderTop';
import HeaderMiddle from './parts/HeaderMiddle';
import HeaderBottom from './parts/HeaderBottom';
import HeaderMobile from './parts/header-mobile/HeaderMobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className={styles.header}>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <div className={styles.header__wrapper}>
          <>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
          </>
        </div>
      )}
    </header>
  );
};

export default Header;
