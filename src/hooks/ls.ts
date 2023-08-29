import { useState, useEffect } from 'react';

export const useGetLS = (key: string) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const val = localStorage.getItem(key);
    setValue(val);
  }, []);

  return value;
};
