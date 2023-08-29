import styles from './styles.module.scss';

import HeaderTop from './parts/HeaderTop';
import HeaderMiddle from './parts/HeaderMiddle';
import HeaderBottom from './parts/HeaderBottom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
