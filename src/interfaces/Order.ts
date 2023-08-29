import { Address } from './Address';
import { Cart } from '@/types/cart.type';

export interface Order {
  id: number;
  state: string;
  payment: string;
  delivery: string;
  reference: number;
  address: Address;
  cart: Cart;
}
