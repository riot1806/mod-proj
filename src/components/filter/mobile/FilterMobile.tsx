import { useState } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Select, { ClassNamesConfig } from 'react-select';

import { Filter } from '@/types/filter.type';
import FilterDrawer from '@/components/drawer/filter/FilterDrawer';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';

interface Props {
  data: Filter[] | undefined;
}

const classNames: ClassNamesConfig = {
  container: () => styles.filter__select,
  control: (state) =>
    state.isFocused
      ? styles.filter__select__control_focused
      : styles.filter__select_control,
  indicatorSeparator: () => styles.filter__select_indicator,
  valueContainer: () => styles.filter__value_container,
};

const FilterMobile = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: categories } = useGetCategoriesQuery(null);
  const router = useRouter();

  const handleOpen = () => setOpen(true);

  const brands = data?.find((filter) => filter.slug === 'brand')?.values;

  const cs = categories?.map((c) => c.children);

  const handleChange = (id: number) => {
    router.push({
      pathname: '/products',
      query: { ...router.query, c: id },
    });
  };

  const handleNew = () => {
    if (router.query['sort']?.includes('new')) {
      router.push({
        pathname: '/products',
        query: {
          ...router.query,
          sort: router.query['sort']
            ?.toString()
            .split(',')
            .filter((val) => val !== 'new')
            .join(','),
        },
      });
    } else {
      router.push({
        pathname: '/products',
        query: { ...router.query, sort: 'new' },
      });
    }
  };

  const handleBrand = (brand: string) => {
    router.push({
      pathname: '/products',
      query: { ...router.query, brand },
    });
  };

  return (
    <div className={styles.filter__mobile}>
      <div className={styles.filter__buttons}>
        <button onClick={handleOpen}>
          Фильтры
          <Image src='/static/media/filter.svg' alt='' width={20} height={20} />
        </button>
        <button onClick={handleOpen}>
          Сортировка
          <Image src='/static/media/sort.svg' alt='' width={20} height={20} />
        </button>
      </div>
      <div className={styles.filter__brands}>
        <Select
          isSearchable={false}
          placeholder='КАТЕГОРИИ'
          classNames={classNames}
          options={
            cs &&
            cs[1]?.map((c) => ({
              label: c.name,
              value: c.id,
            }))
          }
          onChange={(newValue: any) => handleChange(newValue.value)}
          menuPortalTarget={document.body}
        />
        <button
          style={{
            backgroundColor: router.query['sort']?.includes('new')
              ? '#f6f6f6'
              : 'unset',
            padding: router.query['sort']?.includes('new') ? '0 10px' : '0',
          }}
          onClick={handleNew}
          className={styles.filter__btnnn}
        >
          НОВИНКИ
        </button>
        <Select
          isSearchable={false}
          placeholder='БРЕНДЫ'
          classNames={classNames}
          options={brands?.map((brand) => ({
            label: brand.name,
            value: brand.slug,
          }))}
          onChange={(newValue: any) => handleBrand(newValue.value)}
          menuPortalTarget={document.body}
        />
        <ul>
          {brands?.map((brand) => (
            <li key={brand.id}>
              <button
                onClick={() =>
                  router.push({
                    pathname: '/products',
                    query: { ...router.query, brand: brand.slug },
                  })
                }
              >
                {brand.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <FilterDrawer open={open} setOpen={setOpen} data={data} />
    </div>
  );
};

export default FilterMobile;
