import { FormEventHandler } from 'react';
import styles from './styles.module.scss';

import { UseFormRegisterReturn } from 'react-hook-form';
import Image from 'next/image';

interface Props {
  placeholder: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  register?: UseFormRegisterReturn;
  [x: string]: any;
}

const Searchbar = ({ placeholder, onSubmit, register }: Props) => {
  return (
    <form className={styles.searchbar} onSubmit={onSubmit}>
      <Image src='/static/media/search.svg' alt='' width={16} height={16} />
      <input type='text' placeholder={placeholder} {...register} />
    </form>
  );
};

export default Searchbar;
