import styles from './styles.module.scss';

import Image from 'next/image';

interface Props {
  placeholder: string;
}

const Searchbar = ({ placeholder }: Props) => {
  return (
    <form className={styles.searchbar}>
      <Image src='/static/media/search.svg' alt='' width={16} height={16} />
      <input type='text' placeholder={placeholder} />
    </form>
  );
};

export default Searchbar;
