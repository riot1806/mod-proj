import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { Box, Drawer } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useLazySearchProductsQuery } from '@/redux/api/searchApi';
import DrawerHead from '../head/DrawerHead';
import CartItem from '@/components/cart-item/CartItem';
import Searchbar from '@/components/searchbar/Searchbar';
import Link from 'next/link';

type Inputs = {
  query: string;
};

const SearchDrawer = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const [trigger, { data }] = useLazySearchProductsQuery();
  const router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<Inputs> = ({ query }) => {
    trigger(query);
  };

  useEffect(() => {
    handleClose();
  }, [router]);

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
          <Searchbar
            placeholder='Товар, бренд или цвет'
            onSubmit={handleSubmit(onSubmit)}
            register={register('query')}
          />
          <div className={styles.drawer__wrapper}>
            {data?.map((product) => (
              <Link
                href={`/products/${product.item_id || product.id}`}
                key={product.id}
              >
                <CartItem item={product} search />
              </Link>
            ))}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
