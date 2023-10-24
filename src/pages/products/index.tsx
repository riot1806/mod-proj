import styles from '@/styles/Products.module.scss';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

import {
  useGetCategoriesQuery,
  useGetCategoryProductsQuery,
  useGetCategoryQuery,
} from '@/redux/api/categoryApi';
import AccordionComponent from '@/components/accordion/Accordion';
import Filter from '@/components/filter/Filter';
import ProductItem from '@/components/product-item/ProductItem';

const Products = () => {
  const { query } = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('c');
  const catSearch = searchParams.get('h');

  const { data: categories } = useGetCategoriesQuery(null);

  const activeCategory = categories?.find(
    (c) => c.slug === (catSearch === 'women' ? 'zenshhiny' : 'muzciny')
  );

  const { data } = useGetCategoryQuery(activeCategory?.id);
  const { data: productsData, isFetching } = useGetCategoryProductsQuery({
    categoryId: Number(search),
    params: {
      brand: query.brand,
      color: query.color,
      size: query.size,
      care: query.care,
      composition: query.care,
      sort: query.sort,
    },
  });

  return (
    <section className={styles.products}>
      <div className={styles.products__left}>
        {categories?.map((category) => (
          <AccordionComponent key={category.id} category={category} />
        ))}
      </div>
      <div className={styles.products__right}>
        {!search && (
          <strong className={styles.products__nothing}>
            Выберите категорию слева
          </strong>
        )}
        <Filter
          categoryId={Number(search)}
          productsLength={productsData?.length!}
        />
        {isFetching ? (
          <div className='g__preloader'>
            <CircularProgress size={45} color='inherit' />
          </div>
        ) : (
          <div className={styles.products__wrapper}>
            {productsData?.map((product) => (
              <ProductItem key={product.id} item={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
