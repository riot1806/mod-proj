import { ReactNode } from 'react';

import dynamic from 'next/dynamic';

const ReactOwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

interface Props {
  children: ReactNode;
  [x: string]: any;
}

const Carousel = ({ children, ...props }: Props) => {
  return <ReactOwlCarousel {...props}>{children}</ReactOwlCarousel>;
};

export default Carousel;
