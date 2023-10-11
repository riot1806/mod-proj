import styles from './styles.module.scss';

import Image from 'next/image';

const Services = () => {
  return (
    <section className={styles.services}>
      <ul>
        <li>
          <div className={styles.services__icon}>
            <Image src='/static/media/box2.svg' alt='' width={16} height={16} />
          </div>
          <p>100 000+ брендовых товаров</p>
        </li>
        <li>
          <div className={styles.services__icon}>
            <Image
              src='/static/media/truck.svg'
              alt=''
              width={16}
              height={16}
            />
          </div>
          <p>Доставка по Узбекистану </p>
        </li>
        <li>
          <div className={styles.services__icon}>
            <Image
              src='/static/media/award.svg'
              alt=''
              width={16}
              height={16}
            />
          </div>
          <p>10 000+ топовых мировых брендов</p>
        </li>
        <li>
          <div className={styles.services__icon}>
            <Image
              src='/static/media/credit-card.svg'
              alt=''
              width={16}
              height={16}
            />
          </div>
          <p>Удобные способы оплаты</p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
