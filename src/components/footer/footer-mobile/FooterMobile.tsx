import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

const FooterMobile = () => {
  return (
    <footer className={styles.footer__mobile}>
      <ul className={styles.footer__links}>
        <li>
          <Link href='/'>ПРИЛОЖЕНИЕ MOD</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>СПОСОБ ОПЛАТЫ</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>ВЫБОР MOD</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>ГЛАВНЫЕ НОВИНКИ СЕЗОНА</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>ПОДПИШИТЕСЬ НА MOD</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
        <li>
          <Link href='/'>О MOD</Link>
          <Image src='/static/media/next.svg' alt='' width={16} height={16} />
        </li>
      </ul>
      <p>
        Официальный сайт MOD. ‘MOD’ и логотип ‘MOD’ являются торговыми марками
        Farfetch UK Limited и зарегистрированы в многочисленных юрисдикционных
        системах по всему миру. © Copyright 2020 MOD UK Limited. Все права
        защищены.
      </p>
    </footer>
  );
};

export default FooterMobile;
