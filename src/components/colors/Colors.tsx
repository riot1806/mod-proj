import styles from './styles.module.scss';

import { useRouter } from 'next/router';

import { Color } from '@/interfaces/Color';

interface Props {
  colors: Color[];
}

const Colors = ({ colors }: Props) => {
  const { query, push } = useRouter();

  const handleClick = (colorId: number) => {
    push(`/products/${colorId}`);
  };

  return (
    <div className={styles.colors}>
      <p>ЦВЕТ</p>
      <ul>
        {colors?.map((color) => (
          <li
            key={color.id}
            style={{
              backgroundColor: color.name,
              border:
                color.id === Number(query.item_id) ? '2px solid black' : 'none',
            }}
            onClick={() => handleClick(color.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
