import { useEffect } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import { Drawer } from '@mui/material';
import Image from 'next/image';

import { Filter, FilterValue } from '@/types/filter.type';
import DrawerHead from '../head/DrawerHead';
import Button from '@/components/custom/button/Button';

type FilterValueDrawerProps = {
  title: string;
  slug: string;
  open: boolean;
  setOpen: any;
  setDefOpen: any;
  values: FilterValue[];
  data: Filter[];
};

const FilterValueDrawer = ({
  title,
  slug,
  open,
  setOpen,
  values,
  data,
  setDefOpen,
}: FilterValueDrawerProps) => {
  const router = useRouter();

  const handleFilter = (value: string) => {
    data.forEach((filter) => {
      if (filter.slug === slug) {
        router.query[slug] = Boolean(router.query[slug])
          ? router.query[slug]?.concat(',', value)
          : value;
      }
      return;
    });

    router.push({
      pathname: '/products',
      query: { ...router.query },
    });
  };

  return (
    <Drawer
      anchor='right'
      open={open}
      PaperProps={{ style: { width: '100%' } }}
    >
      <div className={styles.drawer}>
        <DrawerHead title={title} setState={setOpen} />
        <div className={styles.drawer__body}>
          <ul>
            {values?.map((value) => (
              <li key={value.id} onClick={() => handleFilter(value.slug)}>
                <b>{value.name}</b>
                {router.query[slug]?.includes(value.slug) && (
                  <Image
                    src='/static/media/check.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.drawer__footer}>
          <Button
            dark
            onClick={() => {
              setOpen(false);
              setDefOpen(false);
            }}
          >
            ПРИМЕНИТЬ
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterValueDrawer;
