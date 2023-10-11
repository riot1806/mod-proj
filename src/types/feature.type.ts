type Value = {
  id: number;
  name: string;
};

export type Feature = {
  id: number;
  name: string;
  values: Value[];
};
