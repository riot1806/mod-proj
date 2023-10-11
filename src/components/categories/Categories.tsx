import { Item } from '@/interfaces/Item';
import { baseCarouselConfig } from '@/utils/carousel';
import CategoryItem from './CategoryItem';
import Carousel from '../carousel/Carousel';

interface Props {
  title: string;
  items: Item[];
}

const Categories = ({ title, items }: Props) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <Carousel {...baseCarouselConfig}>
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Categories;
