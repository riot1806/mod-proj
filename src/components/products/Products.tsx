import styles from './styles.module.scss';

import { Product } from '@/interfaces/Product';
import { baseCarouselConfig } from '@/utils/carousel';
import Carousel from '../carousel/Carousel';
import ProductItem from '../product-item/ProductItem';

interface Props {
  title: string;
  items: Product[];
}

const Products = ({ title, items }: Props) => {
  return (
    <section className={styles.products}>
      {title && <h2>{title}</h2>}
      <Carousel {...baseCarouselConfig} className={styles.products__carousel}>
        {items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Products;
