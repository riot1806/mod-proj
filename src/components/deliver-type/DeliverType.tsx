import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

interface Props {
  deliverType: string;
  setDeliverType: Dispatch<SetStateAction<'regular' | 'express'>>;
  styles: any;
}

const DeliverType = ({ deliverType, setDeliverType, styles }: Props) => {
  return (
    <ul className={styles.form__types}>
      <li onClick={() => setDeliverType('regular')}>
        <Image src='/static/media/box.svg' alt='' width={22} height={22} />
        <b>Обычная доставка</b>
        <p>от 2 до 7 рабочих дней</p>
        <strong>БЕСПЛАТНО</strong>
        <div className={styles.form__check}>
          {deliverType === 'regular' && (
            <Image
              src='/static/media/check.svg'
              alt=''
              width={22}
              height={22}
            />
          )}
        </div>
      </li>
      <li onClick={() => setDeliverType('express')}>
        <Image src='/static/media/time.svg' alt='' width={22} height={22} />
        <b>Экспресс доставка</b>
        <p>4 дня</p>
        <strong>35000 сум</strong>
        <div className={styles.form__check}>
          {deliverType === 'express' && (
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

export default DeliverType;
