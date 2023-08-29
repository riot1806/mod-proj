export interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  birthday: string | null;
  gender: string | null;
  notifications: boolean | null;
  newsletter: boolean | null;
}
