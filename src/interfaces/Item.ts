import { Media } from './Media';

export interface Item {
  id: number;
  item_id?: number;
  name?: string;
  media: Media | null;
}
