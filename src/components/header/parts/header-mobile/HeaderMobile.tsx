import styles from './styles.module.scss';

import { useReadLocalStorage } from 'usehooks-ts';

import HeaderMobileTop from './HeaderMobileTop';
import HeaderMobileBottom from './HeaderMobileBottom';

const HeaderMobile = () => {
  const isShow = useReadLocalStorage('topWidget');

  return (
    <div
      className={styles.header__mobile}
      style={{ marginTop: isShow ? '60px' : 'unset' }}
    >
      <HeaderMobileTop />
      <HeaderMobileBottom />
    </div>
  );
};

export default HeaderMobile;
