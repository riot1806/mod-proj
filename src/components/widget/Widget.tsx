import { Widget } from '@/interfaces/Widget';
import Categories from '../categories/Categories';
import Products from '../products/Products';
import Banner from '../banner/Banner';
import Sliders from '../sliders/Sliders';
import Tags from '../tags/Tags';
import MinCategories from '../min-categories/MinCategories';
import Categories003 from '../categories-003/Categories003';

interface Props {
  widget: Widget;
}

const Widget = ({ widget }: Props) => {
  const title = widget.title!;
  const items = widget.items;

  switch (widget.kind) {
    case 'widget002':
      return <Categories title={title} items={items} />;
    case 'products':
      return <Products title={title} items={items} />;
    case 'banner':
      return <Banner title={title} items={items} />;
    case 'sliders':
      return <Sliders title={title} items={items} />;
    case 'tags':
      return <Tags title={title} items={items} />;
    case 'categories':
      return <MinCategories title={title} items={items} />;
    case 'widget003':
      return <Categories003 title={title} items={items} />;
    default:
      return null;
  }
};

export default Widget;
