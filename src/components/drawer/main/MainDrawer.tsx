import { useState } from 'react';
import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import { Drawer } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { useGetHomeCategoriesQuery, useGetHomeQuery } from '@/redux/api/homeApi';
import { useGetLS } from '@/hooks/ls';
import Navigation from '@/components/navigation/Navigation';
import DrawerHead from '../head/DrawerHead';

const MainDrawer = () => {
  const { data } = useGetHomeQuery(null);
  const [open, setOpen] = useState(false);
  const isAuth = useGetLS('token');

  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: categoryData } = useGetHomeCategoriesQuery(activeCategory?.id!);

  return (
    <>
      <button onClick={handleOpen}>
        <Image src='/static/media/bars.svg' alt='' width={16} height={16} />
      </button>
      <Drawer
        anchor='left'
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { width: '100%' } }}
      >
        <div className={styles.drawer}>
          <DrawerHead title='' setState={setOpen} />
          <div className={styles.drawer__auth}>
            {isAuth ? (
              <Link href='/profile' onClick={handleClose}>
                <Image
                  src='/static/media/user.svg'
                  alt=''
                  width={16}
                  height={16}
                />
                ПРОФИЛЬ
              </Link>
            ) : (
              <>
                <Link href='/login' onClick={handleClose}>
                  <Image
                    src='/static/media/lock.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  ВХОД
                </Link>
                <Link href='/reg' onClick={handleClose}>
                  <Image
                    src='/static/media/pen.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  РЕГИСТРАЦИЯ
                </Link>
              </>
            )}
          </div>
          <div className={styles.drawer__nav}>
            <Navigation />
          </div>
          <ul className={styles.drawer__categories}>
            {categoryData?.map((c) => (
              <li key={c.id}>
                <Link
                  href={{ pathname: '/products', query: { c: c.id } }}
                  onClick={handleClose}
                >
                  {c.name}
                </Link>
                <Image
                  src='/static/media/next.svg'
                  alt=''
                  width={16}
                  height={16}
                />
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MainDrawer;
