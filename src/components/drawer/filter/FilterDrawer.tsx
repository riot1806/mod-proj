import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import { Drawer } from '@mui/material';
import DrawerHead from '../head/DrawerHead';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const FilterDrawer = ({ open, setOpen }: Props) => {
  return (
    <Drawer
      anchor='right'
      open={open}
      PaperProps={{ style: { width: '100%' } }}
    >
      <div className={styles.drawer}>
        <DrawerHead title='ПРОФИЛЬ' setState={setOpen} />
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
