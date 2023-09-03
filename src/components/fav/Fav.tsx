import { useLocalStorage } from 'usehooks-ts';
import Image from 'next/image';

interface Props {
  itemId: number;
}

const Fav = ({ itemId }: Props) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

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
