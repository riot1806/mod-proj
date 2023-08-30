export type Filter = {
  id: number;
  name: string;
  slug: string;
  values: { id: number; name: string; slug: string }[];
};
