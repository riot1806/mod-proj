export interface Address {
  id: number;
  location: {
    id: number;
    type: string;
    name: string;
  };
  street: string;
  building: string;
  flat: number;
  entrance: number | null;
  intercom: number | null;
  is_default: boolean;
}
