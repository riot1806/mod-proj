import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';

interface Props {
  itemId: number;
}

const Fav = ({ itemId }: Props) => {
  const strArr = useGetLS('favorites');
  const stringArray: string[] = JSON.parse(strArr!);

  const strId = itemId?.toString();

  const isExists = stringArray?.find((id) => id === strId);

  const handleToggle = () => {
    if (!strArr)
      return localStorage.setItem('favorites', JSON.stringify([strId]));

    const filtered = stringArray.filter((id) => id !== strId);
    localStorage.setItem('favorites', JSON.stringify(filtered));
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
