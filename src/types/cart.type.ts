import { CartItem } from '@/interfaces/CartItem';

export type Cart = {
  delivery: string;
  id: number | string;
  products: CartItem[];
  total_amount: number;
  total_delivery: number;
  total_products: number;
};
