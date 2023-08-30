import styles from './styles.module.scss';

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

  return (
    <div className={styles.filter}>
      <div className={styles.filter__top}>
        {isMobile ? (
          <FilterMobile />
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
