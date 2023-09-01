import styles from './styles.module.scss';

import HeaderMobileTop from './HeaderMobileTop';
import HeaderMobileBottom from './HeaderMobileBottom';

const HeaderMobile = () => {
  return (
    <div className={styles.header__mobile}>
      <HeaderMobileTop />
      <HeaderMobileBottom />
    </div>
  );
};

export default HeaderMobile;
