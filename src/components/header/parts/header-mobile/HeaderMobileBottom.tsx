import styles from './styles.module.scss';

import { useRouter } from 'next/router';

import Navigation from '@/components/navigation/Navigation';

const HeaderMobileBottom = () => {
  const { pathname } = useRouter();

  const isIncludes = (path: string) => pathname.includes(path);

  if (isIncludes('products')) return null;
  else if (isIncludes('profile')) return null;
  else if (isIncludes('checkout')) return null;
  else if (isIncludes('cart')) return null;
  else if (isIncludes('order')) return null;

  return (
    <div className={styles.header__bottom}>
      <Navigation />
    </div>
  );
};

export default HeaderMobileBottom;
