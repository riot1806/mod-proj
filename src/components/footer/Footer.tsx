import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__top}>
          <p>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
          <div>
            <p>ГОРЯЧАЯ ЛИНИЯ</p>
            <a href='tel:+998339999990'>+998 (33) 999-99-90</a>
            <p>Будни: с 9:00 до 19:00 (Ташкентское время)</p>
          </div>
        </div>
        <hr />
        <div className={styles.footer__bottom}>
          <div>
            <p>ИНТЕРНЕТ МАГАЗИН</p>
            <ul>
              <li>
                <Link href='/'>Центр поддержки Ason</Link>
              </li>
              <li>
                <Link href='/'>Статус заказа по номеру</Link>
              </li>
              <li>
                <Link href='/'>Оплата</Link>
              </li>
              <li>
                <Link href='/'>Условия возврата</Link>
              </li>
              <li>
                <Link href='/'>Условия доставки</Link>
              </li>
              <li>
                <Link href='/'>Как выбрать размер</Link>
              </li>
              <li>
                <Link href='/'>Как оформить заказ</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>МАГАЗИНЫ</p>
            <ul>
              <li>
                <Link href='/'>Центр поддержки Ason</Link>
              </li>
              <li>
                <Link href='/'>Статус заказа по номеру</Link>
              </li>
              <li>
                <Link href='/'>Оплата</Link>
              </li>
              <li>
                <Link href='/'>Условия возврата</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>МОЙ АККАУНТ</p>
            <ul>
              <li>
                <Link href='/'>Мои карты</Link>
              </li>
              <li>
                <Link href='/'>Мои заказы</Link>
              </li>
              <li>
                <Link href='/'>Мои адреса</Link>
              </li>
              <li>
                <Link href='/'>Избранные</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>УЗНАТЬ БОЛЬШЕ</p>
            <ul>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/twitter.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/facebook.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/google.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/instagram.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/vk.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <Image
                    src='/static/media/telegram.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
