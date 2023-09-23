import styles from './styles.module.scss';

import { useRouter } from 'next/router';

import Navigation from '@/components/navigation/Navigation';

const HeaderMobileBottom = () => {
  const router = useRouter();

  if (router.pathname === '/products/[item_id]') return null;

  return (
    <div className={styles.header__bottom}>
      <Navigation />
    </div>
  );
};

export default HeaderMobileBottom;
