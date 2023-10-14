import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Select, { ClassNamesConfig } from 'react-select';
import { Checkbox } from '@mui/material';

import { useGetCategoryFiltersQuery } from '@/redux/api/categoryApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import FilterMobile from './mobile/FilterMobile';

interface Props {
  categoryId: number;
  productsLength: number;
}

const sorts = [
  { id: 1, name: 'ПО ПОПУЛЯРНОСТИ', slug: 'popular' },
  { id: 2, name: 'ПО ВОЗРАСТАНИЮ ЦЕНЫ', slug: 'price_asc' },
  { id: 3, name: 'ПО УБЫВАНИЮ ЦЕНЫ', slug: 'price_desc' },
  { id: 4, name: 'ПО НОВИЗНЕ', slug: 'new' },
];

const classNames: ClassNamesConfig = {
  container: () => styles.filter__select,
  control: (state) =>
    state.isFocused
      ? styles.filter__select__control_focused
      : styles.filter__select_control,
  menuList: () => styles.filter__select_list,
  indicatorSeparator: () => styles.filter__select_indicator,
  placeholder: () => styles.filter__select_placeholder,
  option: (state) =>
    state.isFocused || state.isSelected ? styles.filter__select_option : '',
  input: () => styles.filter__select_input,
  singleValue: () => styles.filter__select_value,
};

const Filter = ({ categoryId, productsLength }: Props) => {
  const { data } = useGetCategoryFiltersQuery(categoryId);
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleChange = (value: string, slug: string) => {
    data?.forEach((filter) => {
      if (filter.slug === slug) {
        router.query[filter.slug] = value;
      }

      return;
    });

    router.push({
      pathname: '/products',
      query: {
        ...router.query,
      },
    });
  };

  const handleSortChange = (value: string) => {
    if (router.query['sort']?.includes(value)) return;

    router.push({
      pathname: '/products',
      query: {
        ...router.query,
        sort: router.query['sort']?.includes('new')
          ? router.query['sort']?.concat(',', value)
          : value,
      },
    });
  };

  const handleNew = (state: boolean) => {
    if (state) {
      router.push({
        pathname: '/products',
        query: {
          ...router.query,
          sort: router.query['sort']
            ? router.query['sort']?.concat(',', 'new')
            : 'new',
        },
      });
    } else {
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
    }
  };

  if (!categoryId) return null;

  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        {isMobile ? (
          <FilterMobile data={data} />
        ) : (
          data?.map((filter) => (
            <Select
              key={filter.id}
              placeholder={filter.name}
              options={filter.values.map((value) => ({
                value: value.slug,
                label: value.name,
              }))}
              classNames={classNames}
              // @ts-ignore
              onChange={(newValue) => handleChange(newValue.value, filter.slug)}
            />
          ))
        )}
      </div>
      {!isMobile && (
        <div className={styles.filter__bottom}>
          <div className={styles.filter__left}>
            {/* <label htmlFor='discount'>
              <Checkbox
                color='default'
                style={{ color: '#222222' }}
                id='discount'
                // onChange={(event: any) => handleDiscount(event.target.checked)}
              />
              СКИДКИ
            </label> */}
            <label htmlFor='new'>
              <Checkbox
                color='default'
                style={{ color: '#222222' }}
                id='new'
                onChange={(event: any) => handleNew(event.target.checked)}
                checked={router.query['sort']?.includes('new')}
              />
              НОВИНКИ
            </label>
          </div>
          <div className={styles.filter__right}>
            <p>
              <small>КОЛ-ВО ТОВАРОВ: {productsLength}</small>
            </p>
            <div className={styles.filter__divider}></div>
            <Select
              placeholder='СОРТИРОВАТЬ'
              classNames={classNames}
              options={sorts.map((sort) => ({
                value: sort.slug,
                label: sort.name,
              }))}
              // @ts-ignore
              onChange={(newValue) => handleSortChange(newValue.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
