import styles from '@/styles/Checkout.module.scss';

import { useSearchParams } from 'next/navigation';

import CheckoutLayout from '@/components/layout/CheckoutLayout';
import Confirm from '@/components/view/confirm/Confirm';

const CheckoutOtp = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('phone');

  return (
    <CheckoutLayout>
      <div className={styles.checkout__card}>
        <p>На ваш телефон отправлен код подтверждения</p>
      </div>
      <Confirm phone={search!} checkout />
    </CheckoutLayout>
  );
};

export default CheckoutOtp;
