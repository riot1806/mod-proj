import { ReactNode } from 'react';

import { Drawer } from '@mui/material';

import DrawerHead from '../head/DrawerHead';

type SupportDrawerProps = {
  open: boolean;
  setOpen: any;
  children: ReactNode;
};

const SupportDrawer = ({ open, setOpen, children }: SupportDrawerProps) => {
  return (
    <Drawer
      open={open}
      anchor='right'
      PaperProps={{ style: { width: '100%' } }}
    >
      <DrawerHead title='ЦЕНТР ПОДДЕРЖКИ' setState={setOpen} />
      <div style={{ padding: '10px', lineHeight: '25px' }}>{children}</div>
    </Drawer>
  );
};

export default SupportDrawer;
