import styles from './styles.module.scss';

import Image from 'next/image';

import { useDrawerContext } from '@/hooks/useDrawerContext';

interface Props {
  title: string;
}

const DrawerHead = ({ title }: Props) => {
  const { setOpen } = useDrawerContext();

  return (
    <div className={styles.drawer__head}>
      <b>{title}</b>
      <button onClick={() => setOpen(false)}>
        <Image src='/static/media/x.svg' alt='' width={16} height={16} />
      </button>
    </div>
  );
};

export default DrawerHead;
