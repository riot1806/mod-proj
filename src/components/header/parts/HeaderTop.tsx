import { useEffect, useState } from 'react';
import styles from '../styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';

const HeaderTop = () => {
  const isAuthLS = useGetLS('token');
  const [isAuth, setIsAuth] = useState(isAuthLS);

  useEffect(() => {
    const handleLS = () => {
      setIsAuth(localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleLS);

    return () => window.removeEventListener('storage', handleLS);
  }, []);

  return (
    <div className={styles.header__top}>
      <Link href='/support'>
        <Image src='/static/media/warn.svg' alt='' width={16} height={16} />
        Помощь и контакт
      </Link>
      {Boolean(isAuth || isAuthLS) ? (
        <Link href='/profile/orders'>Профиль</Link>
      ) : (
        <ul>
          <li>
            <Link href='/reg'>
              <Image
                src='/static/media/user.svg'
                alt=''
                width={16}
                height={16}
              />
              Регистрация
            </Link>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <Link href='/login'>
              <Image
                src='/static/media/login.svg'
                alt=''
                width={16}
                height={16}
              />
              Логин
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderTop;
