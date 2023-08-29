import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

import { Drawer } from '@mui/material';

import { useDrawerContext } from '@/hooks/useDrawerContext';
import DrawerHead from '../head/DrawerHead';

const ProfileDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { open } = useDrawerContext();

  return (
    <Drawer
      anchor='right'
      open={open}
      PaperProps={{ style: { width: '100%' } }}
    >
      <div className={styles.drawer}>
        <DrawerHead title='ПРОФИЛЬ' />
        <div className={styles.drawer__body}>{children}</div>
      </div>
    </Drawer>
  );
};

export default ProfileDrawer;
