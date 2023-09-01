import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';

interface Props {
  itemId: number;
}

const Fav = ({ itemId }: Props) => {
  const str = useGetLS('favorites');

  const strId = itemId?.toString();

  const isExists = str?.includes(strId);

  const handleToggle = () => {
    if (!str) return localStorage.setItem('favorites', strId);
    else if (isExists)
      return localStorage.setItem(
        'favorites',
        str.replace(strId + ',' || ',' + strId, '')
      );

    const val = str.concat(',', strId);
    return localStorage.setItem('favorites', val);
  };

  return (
    <button onClick={handleToggle}>
      <Image
        src={isExists ? '/static/media/x.svg' : '/static/media/heart.svg'}
        alt=''
        width={16}
        height={16}
        data-x={isExists ? 'true' : 'false'}
      />
    </button>
  );
};

export default Fav;
