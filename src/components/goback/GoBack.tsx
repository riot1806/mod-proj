import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

const GoBack = () => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <button className={styles.goback} onClick={handleClick}>
      <Image src='/static/media/back.svg' alt='' width={16} height={16} />
      НАЗАД
    </button>
  );
};

export default GoBack;
