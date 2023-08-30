import { Dispatch, SetStateAction, useState, MouseEvent } from 'react';
import styles from './styles.module.scss';

import { Drawer, Radio } from '@mui/material';
import Image from 'next/image';

import { Filter } from '@/types/filter.type';
import DrawerHead from '../head/DrawerHead';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Filter[] | undefined;
}

const sorts = [
  { id: 1, name: 'ПО ПОПУЛЯРНОСТИ', slug: 'popular' },
  { id: 2, name: 'ПО ВОЗРАСТАНИЮ ЦЕНЫ', slug: 'price_asc' },
  { id: 3, name: 'ПО УБЫВАНИЮ ЦЕНЫ', slug: 'price_desc' },
  { id: 4, name: 'ПО НОВИЗНЕ', slug: 'new' },
];

const FilterDrawer = ({ open, setOpen, data }: Props) => {
  const [selectedValue, setSelectedValue] = useState('popular');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Drawer
      anchor='right'
      open={open}
      PaperProps={{ style: { width: '100%' } }}
    >
      <div className={styles.drawer}>
        <DrawerHead title='ФИЛЬТРЫ' setState={setOpen} />
        <div className={styles.drawer__body}>
          <div className={styles.drawer__filter}>
            <h3>ФИЛЬТРОВАТЬ</h3>
            <ul>
              {data?.map((filter) => (
                <li key={filter.id}>
                  <b>{filter.name}</b>
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
          <div className={styles.drawer__sort}>
            <h3>СОРТИРОВАТЬ</h3>
            <ul>
              {sorts?.map((sort) => (
                <li key={sort.id} onClick={() => handleChange(sort.slug)}>
                  <b>{sort.name}</b>
                  <Radio
                    checked={selectedValue === sort.slug}
                    value={sort.slug}
                    sx={{
                      color: '#222222',
                      '&.Mui-checked': { color: '#222222' },
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
