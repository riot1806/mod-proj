import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import Image from 'next/image';

import { useDrawerContext } from '@/hooks/useDrawerContext';

interface Props {
  title: string;
  setState?: Dispatch<SetStateAction<boolean>>;
}

const DrawerHead = ({ title, setState }: Props) => {
  const { setOpen } = useDrawerContext();

  const handleClick = () => {
    if (setState) setState(false);
    else setOpen(false);
  };

  return (
    <div className={styles.drawer__head}>
      <b>{title}</b>
      <button onClick={handleClick}>
        <Image src='/static/media/x.svg' alt='' width={16} height={16} />
      </button>
    </div>
  );
};

export default DrawerHead;
