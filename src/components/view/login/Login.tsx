import styles from '../styles.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useLoginMutation } from '@/redux/api/authApi';
import { Callback } from '@/types/callback.type';
import Button from '@/components/custom/button/Button';

interface Props {
  callback?: Callback;
}

type Inputs = {
  phone: string;
};

const Login = ({ callback }: Props) => {
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ phone }) => {
    login({ phone })
      .unwrap()
      .then(() => callback!({ state: true, data: phone }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='phone'>
        Телефон
        <input
          type='text'
          id='phone'
          placeholder='+998 (XX) XXX XX XX'
          {...register('phone')}
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
