import Link from 'next/link';

import { useGetHomeCategoriesQuery } from '@/redux/api/homeApi';

type DropdownProps = {
  id: number;
  styles: any;
};

const Dropdown = ({ id, styles }: DropdownProps) => {
  const { data } = useGetHomeCategoriesQuery(id);

  return (
    <div className={styles.dropdown}>
      {data?.map((category) => (
        <ul key={category.id}>
          <li>
            <Link
              href={{ pathname: '/products', query: { c: category.id } }}
              className={styles.dropdown__bold}
            >
              {category.name}
            </Link>
          </li>
          {category.children?.map((cat) => (
            <li key={cat.id}>
              <Link href={{ pathname: '/products', query: { c: cat.id } }}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Dropdown;
