import styles from './styles.module.scss';

import { Color } from '@/interfaces/Color';

interface Props {
  colors: Color[];
}

const Colors = ({ colors }: Props) => {
  return (
    <div className={styles.colors}>
      <p>ЦВЕТ</p>
      <ul>
        {colors?.map((color) => (
          <li key={color.id} style={{ backgroundColor: color.name }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
