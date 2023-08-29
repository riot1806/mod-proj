import { Item } from './Item';

export interface Product extends Item {
  price: number;
  old_price: number;
  category: {
    id: number;
    name: string;
  };
  brand: {
    id: number;
    name: string;
  };
}
