import { useState, SyntheticEvent } from 'react';
import styles from '../styles.module.scss';

import { E164Number } from 'libphonenumber-js/core';
import PhoneInput from 'react-phone-number-input';
import toast from 'react-hot-toast';

import { useLoginMutation } from '@/redux/api/authApi';
import { Callback } from '@/types/callback.type';
import Button from '@/components/custom/button/Button';

interface Props {
  callback?: Callback;
}

const Login = ({ callback }: Props) => {
  const [login, { isLoading }] = useLoginMutation();
  const [value, setValue] = useState<E164Number>();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    login({ phone: String(value) })
      .unwrap()
      .then(() => callback!({ state: true, data: value }))
      .catch((err) => toast.error(err.data.errors.phone));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <p>На введеный вами номер придет код</p>
      <Button dark type='submit' withLoading={isLoading}>
        ОТПРАВИТЬ
      </Button>
    </form>
  );
};

export default Login;
