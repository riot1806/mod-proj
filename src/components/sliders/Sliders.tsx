import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { baseCarouselConfig } from '@/utils/carousel';
import { Slider } from '@/interfaces/Slider';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { usePlaceholder } from '@/hooks/usePlaceholder';
import Carousel from '../carousel/Carousel';

type SlidersProps = {
  title: string;
  items: Slider[];
};

const Sliders = ({ title, items }: SlidersProps) => {
  const placeholder = usePlaceholder(150, 150);
  const router = useRouter();

  return (
    <section className={styles.sliders}>
      {title && <h2>{title}</h2>}
      <Carousel {...baseCarouselConfig} className={styles.sliders__carousel}>
        {items.map((item) => {
          const imageSource = useGetImageSource(item.media);

          return (
            <div key={item.id}>
              <Link
                href={{
                  pathname: '/products',
                  query: { ...router.query, c: item.item_id },
                }}
              >
                <Image
                  src={imageSource}
                  alt=''
                  width={150}
                  height={150}
                  placeholder={placeholder}
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Sliders;
