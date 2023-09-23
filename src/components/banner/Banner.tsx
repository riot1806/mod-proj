import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Item } from '@/interfaces/Item';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import CWidget from '../cwidget/CWidget';

const styles = {
  maxHeight: '400px',
  objectPosition: 'top',
  borderRadius: '5px',
  marginTop: '20px',
};

interface Props {
  title: string;
  items: Item[];
}

const Banner = ({ title, items }: Props) => {
  const imageSource = useGetImageSource(items[0]?.media!);
  const ref = useRef<HTMLDivElement>(null);
  const [isFirstBanner, setIsFirstBanner] = useState<boolean>();

  const val = ref.current?.dataset.fstb === 'true';

  useEffect(() => {
    setIsFirstBanner(val);
  }, [val]);

  return (
    <>
      <section data-fstb={false} ref={ref}>
        {title && <h2>{title}</h2>}
        <Link href={{ pathname: '/products', query: { c: items[0]?.id } }}>
          <Image src={imageSource} alt='' fill style={styles} />
        </Link>
      </section>
      {isFirstBanner && <CWidget />}
    </>
  );
};

export default Banner;
