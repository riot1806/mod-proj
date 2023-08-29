import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import { Size } from '@/interfaces/Size';

interface Props {
  sizes: Size[];
  sizeId: number;
  setSizeId: Dispatch<SetStateAction<number>>;
}

const Sizes = ({ sizes, sizeId, setSizeId }: Props) => {
  return (
    <div className={styles.sizes}>
      <p>РАЗМЕРЫ</p>
      <ul>
        {sizes?.map((size) => (
          <li
            key={size.id}
            className={sizeId === size.id ? styles.sizes__active : ''}
            onClick={() => setSizeId(size.id)}
          >
            {size.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sizes;
