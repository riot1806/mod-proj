import { Widget } from '@/interfaces/Widget';
import Categories from '../categories/Categories';
import Products from '../products/Products';
import Banner from '../banner/Banner';

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
    default:
      return null;
  }
};

export default Widget;
