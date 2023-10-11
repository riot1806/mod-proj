import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import Image from 'next/image';

import { useDrawerContext } from '@/hooks/useDrawerContext';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Props {
  title: string;
  setState?: Dispatch<SetStateAction<boolean>>;
}

const DrawerHead = ({ title, setState }: Props) => {
  const { setOpen } = useDrawerContext();
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (setState) setState(false);
    else setOpen(false);
  };

  return (
    <div className={styles.drawer__head}>
      <b>{title}</b>
      <button onClick={handleClick}>
        <Image
          src={isMobile ? '/static/media/back.svg' : '/static/media/x.svg'}
          alt=''
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default DrawerHead;
