export type FilterValue = {
  id: number;
  name: string;
  slug: string;
};

export type Filter = {
  id: number;
  name: string;
  slug: string;
  values: FilterValue[];
};
