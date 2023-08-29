import styles from '@/styles/Products.module.scss';

import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import AccordionComponent from '@/components/accordion/Accordion';

const Products = () => {
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.products}>
      <div className={styles.products__left}>
        {data?.map((category) => (
          <AccordionComponent key={category.id} category={category} />
        ))}
      </div>
      <div className={styles.products__right}></div>
    </section>
  );
};

export default Products;
