import { useState } from 'react';

import { Box, Drawer } from '@mui/material';
import Image from 'next/image';

import DrawerHead from '../head/DrawerHead';
import Searchbar from '@/components/searchbar/Searchbar';

const SearchDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>
        <Image
          src='/static/media/search_dark.svg'
          alt=''
          width={16}
          height={16}
        />
      </button>
      <Drawer
        anchor='right'
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { width: '100%' } }}
      >
        <Box sx={{ padding: '10px' }}>
          <DrawerHead title='ПОИСК' setState={setOpen} />
          <Searchbar placeholder='Товар, бренд или цвет' />
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
