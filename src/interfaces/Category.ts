import { Widget } from './Widget';

export interface Category {
  id: number;
  name: string;
  slug: string;
  widgets?: Widget[];
  children?: Category[];
}
