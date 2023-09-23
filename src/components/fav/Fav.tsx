import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';
import Image from 'next/image';

import { useViewFavoritesQuery } from '@/redux/api/favoritesApi';

interface Props {
  itemId: number;
}

const Fav = ({ itemId }: Props) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const { refetch } = useViewFavoritesQuery('favorites');

  const strId = itemId?.toString();

  const isExists = favorites?.find((id) => id === strId);

  const handleToggle = (event: any) => {
    event.preventDefault();

    if (isExists) {
      const newArr = favorites.filter((id) => id !== strId);
      return setFavorites(newArr);
    }

    setFavorites([...favorites, strId]);
  };

  useEffect(() => {
    refetch();
  }, [favorites]);

  return (
    <button onClick={handleToggle}>
      <Image
        src={
          isExists ? '/static/media/heart-fill.svg' : '/static/media/heart.svg'
        }
        alt=''
        width={0}
        height={0}
        data-x={isExists ? 'true' : 'false'}
        style={{ width: '20px', height: '20px' }}
      />
    </button>
  );
};

export default Fav;
