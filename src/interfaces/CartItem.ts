import { Product } from './Product';
import { Color } from './Color';
import { Size } from './Size';

export interface CartItem extends Product {
  color: Color;
  option: Size;
  quantity: number;
}
