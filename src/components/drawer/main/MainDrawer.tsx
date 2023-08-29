import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import { useGetLS } from '@/hooks/ls';
import Image from 'next/image';
import Link from 'next/link';

import Navigation from '@/components/navigation/Navigation';

const MainDrawer = () => {
  const [open, setOpen] = useState(false);
  const isAuth = useGetLS('token');
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [router]);

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
          <div className={styles.drawer__auth}>
            {isAuth ? (
              <Link href='/profile'>
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
                <Link href='/login'>
                  <Image
                    src='/static/media/lock.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  ВХОД
                </Link>
                <Link href='/reg'>
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
        </div>
      </Drawer>
    </>
  );
};

export default MainDrawer;
