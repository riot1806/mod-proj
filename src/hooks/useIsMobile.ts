import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint: number = 768) => {
  const [width, setWidth] = useState<number>();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width! <= breakpoint;

  return isMobile;
};
