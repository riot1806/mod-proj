import { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Drawer, Radio } from '@mui/material';
import Image from 'next/image';

import { Filter, FilterValue } from '@/types/filter.type';
import DrawerHead from '../head/DrawerHead';
import FilterValueDrawer from '../filter-value/FilterValueDrawer';

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

type State = {
  isOpen: boolean;
  title: string;
  slug: string;
  values: FilterValue[];
};

const FilterDrawer = ({ open, setOpen, data }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [state, setState] = useState<State>({
    isOpen: false,
    title: '',
    slug: '',
    values: [],
  });

  const search = searchParams.get('sort');

  const [selectedValue, setSelectedValue] = useState(search);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    router
      .push({
        pathname: '/products',
        query: { ...router.query, sort: value },
      })
      .then(() => setOpen(false));
  };

  return (
    <>
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
                  <li
                    key={filter.id}
                    onClick={() =>
                      setState({
                        isOpen: true,
                        title: filter.name,
                        values: filter.values,
                        slug: filter.slug,
                      })
                    }
                  >
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

      <FilterValueDrawer
        open={state.isOpen}
        setDefOpen={setOpen}
        setOpen={setState}
        title={state.title}
        values={state.values}
        slug={state.slug}
        data={data!}
      />
    </>
  );
};

export default FilterDrawer;
