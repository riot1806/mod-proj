import { ReactNode } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  title: string;
}

const SecLayout = ({ children, title }: Props) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <section className={styles.layout}>
      <div className={styles.layout__top}>
        <button onClick={goBack}>
          <Image src='/static/media/back.svg' alt='' width={16} height={16} />
          НАЗАД
        </button>
      </div>
      <h1 className={styles.layout__title}>{title}</h1>
      <div className={styles.layout__bottom}>{children}</div>
    </section>
  );
};

export default SecLayout;
