import { useState } from 'react';
import styles from './styles.module.scss';

import Image from 'next/image';

import { Filter } from '@/types/filter.type';
import FilterDrawer from '@/components/drawer/filter/FilterDrawer';

interface Props {
  data: Filter[] | undefined;
}

const FilterMobile = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.filter__mobile}>
      <div className={styles.filter__buttons}>
        <button onClick={handleOpen}>
          Фильтр
          <Image src='/static/media/filter.svg' alt='' width={20} height={20} />
        </button>
        <button onClick={handleOpen}>
          Сортировка
          <Image src='/static/media/sort.svg' alt='' width={20} height={20} />
        </button>
      </div>
      <FilterDrawer open={open} setOpen={setOpen} data={data} />
    </div>
  );
};

export default FilterMobile;
