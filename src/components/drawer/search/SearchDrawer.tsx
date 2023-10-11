import { ChangeEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { Box, Drawer } from '@mui/material';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useLazySearchProductsQuery } from '@/redux/api/searchApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import DrawerHead from '../head/DrawerHead';
import CartItem from '@/components/cart-item/CartItem';
import Searchbar from '@/components/searchbar/Searchbar';
import SearchDropdown from '@/components/search-dropdown/SearchDropdown';

type Inputs = {
  query: string;
};

const SearchDrawer = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const [trigger, { data }] = useLazySearchProductsQuery();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<Inputs> = ({ query }) => {
    trigger(query);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) return setShow(false);

    setShow(true);
    trigger(value);
  };

  useEffect(() => {
    handleClose();
  }, [router]);

  return (
    <>
      {isMobile ? (
        <button onClick={handleOpen}>
          <Image
            src='/static/media/search_dark.svg'
            alt=''
            width={16}
            height={16}
          />
        </button>
      ) : (
        <>
          <form className={styles.searchbar}>
            <Image
              src='/static/media/search.svg'
              alt=''
              width={16}
              height={16}
            />
            <input
              type='text'
              placeholder='Цвет, бренд или цвет'
              onChange={handleChange}
            />
            <SearchDropdown styles={styles} show={show} data={data!} />
          </form>
        </>
      )}
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
            onChange={handleChange}
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
