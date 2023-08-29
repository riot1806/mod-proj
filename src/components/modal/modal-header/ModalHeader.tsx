import styles from './styles.module.scss';

import Image from 'next/image';

interface Props {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: Props) => {
  return (
    <div className={styles.modal__header}>
      <h4>{title}</h4>
      <button onClick={onClose}>
        <Image src='/static/media/x.svg' alt='' width={20} height={20} />
      </button>
    </div>
  );
};

export default ModalHeader;
