import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Select, { ClassNamesConfig } from 'react-select';

import { useGetCategoryFiltersQuery } from '@/redux/api/categoryApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import FilterMobile from './mobile/FilterMobile';

interface Props {
  categoryId: number;
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

const Filter = ({ categoryId }: Props) => {
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
    router.push({
      pathname: '/products',
      query: { ...router.query, sort: value },
    });
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
          <p>
            <small>{19} ТОВАРОВ</small>
          </p>
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
      )}
    </div>
  );
};

export default Filter;
