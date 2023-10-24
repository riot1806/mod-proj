import { CSSProperties } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { Item } from '@/interfaces/Item';
import { useGetImageSource } from '@/hooks/useGetImageSource';

const styles: CSSProperties = {
  textAlign: 'center',
  marginTop: '10px',
};

interface Props {
  item: Item;
}

const CategoryItem = ({ item }: Props) => {
  const imageSource = useGetImageSource(item.media!);
  const router = useRouter();

  return (
    <Link
      href={{ pathname: '/products', query: { ...router.query, c: item.id } }}
    >
      <Image src={imageSource} alt='' fill />
      <p style={styles}>{item.name}</p>
    </Link>
  );
};

export default CategoryItem;
