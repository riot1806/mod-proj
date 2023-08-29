import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';

interface Props {
  itemId: number;
}

const Fav = ({ itemId }: Props) => {
  return (
    <button>
      <Image src='/static/media/heart.svg' alt='' width={16} height={16} />
    </button>
  );
};

export default Fav;
