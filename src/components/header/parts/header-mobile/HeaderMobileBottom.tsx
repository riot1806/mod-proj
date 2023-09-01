import styles from './styles.module.scss';

import Navigation from '@/components/navigation/Navigation';

const HeaderMobileBottom = () => {
  return (
    <div className={styles.header__bottom}>
      <Navigation />
    </div>
  );
};

export default HeaderMobileBottom;
