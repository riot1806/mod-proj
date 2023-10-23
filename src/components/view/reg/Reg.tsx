import { useState } from 'react';
import styles from '../styles.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { E164Number } from 'libphonenumber-js/core';
import PhoneInput from 'react-phone-number-input';

import { useRegMutation } from '@/redux/api/authApi';
import { Callback } from '@/types/callback.type';
import Button from '../../custom/button/Button';

interface Props {
  callback?: Callback;
  checkout?: boolean;
}

type Inputs = {
  phone: string;
  first_name: string;
  last_name: string;
};

const Reg = ({ callback, checkout }: Props) => {
  const [value, setValue] = useState<E164Number>();
  const [reg, { isLoading }] = useRegMutation();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reg({ ...data, phone: value?.toString()! })
      .unwrap()
      .then(() => callback!({ state: true, data: value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='phone'>
        Телефон
        <PhoneInput
          id='phone'
          placeholder='998 (XX) XXX XX XX'
          defaultCountry='UZ'
          value={value}
          onChange={(value) => setValue(value)}
          required
        />
      </label>
      <label htmlFor='first_name'>
        Имя
        <input
          type='text'
          id='first_name'
          {...register('first_name')}
          required
        />
      </label>
      <label htmlFor='last_name'>
        Фамилия
        <input type='text' id='last_name' {...register('last_name')} required />
      </label>
      <Button dark type='submit' withLoading={isLoading}>
        {checkout ? 'ДАЛЕЕ' : 'ОТПРАВИТЬ'}
      </Button>
    </form>
  );
};

export default Reg;
