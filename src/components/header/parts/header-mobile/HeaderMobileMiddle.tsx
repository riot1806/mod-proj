import Searchbar from '@/components/searchbar/Searchbar';
import styles from './styles.module.scss';

const HeaderMobileMiddle = () => {
  return (
    <div className={styles.header__middle}>
      <Searchbar placeholder='Товар, бренд или цвет' />
    </div>
  );
};

export default HeaderMobileMiddle;
