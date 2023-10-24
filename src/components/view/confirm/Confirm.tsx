import { FormEvent, useState } from 'react';
import styles from '../styles.module.scss';

import { useRouter } from 'next/router';
import OTPInput from 'react-otp-input';
import toast from 'react-hot-toast';

import { useConfirmMutation } from '@/redux/api/authApi';
import Button from '../../custom/button/Button';
import Timer from '@/components/timer/Timer';

interface Props {
  phone: string;
  checkout?: boolean;
}

const st = {
  width: '40px',
  height: '50px',
  margin: '0 1rem',
  fontSize: '2rem',
  border: '2px solid black',
};

const Confirm = ({ phone, checkout }: Props) => {
  const [otp, setOtp] = useState('');
  const [confirm, { isLoading }] = useConfirmMutation();
  const router = useRouter();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    confirm({ phone, code: Number(otp) })
      .unwrap()
      .then(({ token }) => {
        localStorage.setItem('token', token);
        window.dispatchEvent(new Event('storage'));
        checkout
          ? router.push('/checkout/otp/end')
          : (window.location.href = '/');
      })
      .catch((err) => toast.error(err.data.message));
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Timer minutes={5} phone={phone} />
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} />}
        inputType='number'
        containerStyle={{ display: 'flex', justifyContent: 'center' }}
        inputStyle={st}
      />
      <Button dark type='submit' withLoading={isLoading} className={styles.form__sbmt}>
        {checkout ? 'ДАЛЕЕ' : 'ВОЙТИ'}
      </Button>
    </form>
  );
};

export default Confirm;
