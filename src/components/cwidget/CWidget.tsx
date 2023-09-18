import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';

import {
  useGetHomeCategoriesQuery,
  useGetHomeQuery,
} from '@/redux/api/homeApi';
import AccordionComponent from '../accordion/Accordion';

const CWidget = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  const { data: categoryData } = useGetHomeCategoriesQuery(activeCategory?.id!);

  return (
    <section className={styles.cwidget}>
      {categoryData?.map((category) => (
        <AccordionComponent key={category.id} category={category} />
      ))}
    </section>
  );
};

export default CWidget;
