import Image from 'next/image';

import { Item } from '@/interfaces/Item';
import { useGetImageSource } from '@/hooks/useGetImageSource';

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
  const imageSource = useGetImageSource(items[0].media!);

  return (
    <section>
      {title && <h2>{title}</h2>}
      <Image src={imageSource} alt='' fill style={styles} />
    </section>
  );
};

export default Banner;
