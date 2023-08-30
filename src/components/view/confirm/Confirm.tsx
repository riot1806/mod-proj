import styles from '../styles.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useConfirmMutation } from '@/redux/api/authApi';
import Button from '../../custom/button/Button';

interface Props {
  phone: string;
  checkout?: boolean;
}

type Inputs = {
  code: number;
};

const Confirm = ({ phone, checkout }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [confirm, { isLoading }] = useConfirmMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = ({ code }) => {
    confirm({ phone, code })
      .unwrap()
      .then(({ token }) => {
        localStorage.setItem('token', token);
        checkout
          ? router.push('/checkout/otp/end')
          : (window.location.href = '/');
      })
      .catch((err) => alert(err.data.message));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='code'>
        Код
        <input type='number' id='code' {...register('code')} required />
      </label>
      <p>На введеный вами номер придет код</p>
      <Button dark type='submit' withLoading={isLoading}>
        {checkout ? 'ДАЛЕЕ' : 'ВОЙТИ'}
      </Button>
    </form>
  );
};

export default Confirm;
