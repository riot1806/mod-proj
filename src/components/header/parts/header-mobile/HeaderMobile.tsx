import styles from './styles.module.scss';

import HeaderMobileTop from './HeaderMobileTop';
import HeaderMobileMiddle from './HeaderMobileMiddle';
import HeaderMobileBottom from './HeaderMobileBottom';

const HeaderMobile = () => {
  return (
    <div className={styles.header__mobile}>
      <HeaderMobileTop />
      <HeaderMobileMiddle />
      <HeaderMobileBottom />
    </div>
  );
};

export default HeaderMobile;
