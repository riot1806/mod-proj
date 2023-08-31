import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Select, { ClassNamesConfig } from 'react-select';

import { useGetCategoryFiltersQuery } from '@/redux/api/categoryApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import FilterMobile from './mobile/FilterMobile';

interface Props {
  categoryId: number;
}

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
    </div>
  );
};

export default Filter;
