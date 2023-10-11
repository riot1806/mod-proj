import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

interface Props {
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<'cash' | 'card'>>;
  styles: any;
}

const PaymentMethod = ({ paymentMethod, setPaymentMethod, styles }: Props) => {
  return (
    <ul className={styles.form__types}>
      <li onClick={() => setPaymentMethod('cash')}>
        <Image src='/static/media/nal.svg' alt='' width={22} height={22} />
        <b>Оплата при получении</b>
        <div className={styles.form__check}>
          {paymentMethod === 'cash' && (
            <Image
              src='/static/media/check.svg'
              alt=''
              width={22}
              height={22}
            />
          )}
        </div>
      </li>
      <li onClick={() => setPaymentMethod('card')}>
        <Image src='/static/media/card.svg' alt='' width={22} height={22} />
        <b>Оплата картой</b>
        <div className={styles.form__check}>
          {paymentMethod === 'card' && (
            <Image
              src='/static/media/check.svg'
              alt=''
              width={22}
              height={22}
            />
          )}
        </div>
      </li>
    </ul>
  );
};

export default PaymentMethod;
