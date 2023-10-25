import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/useIsMobile';
import { useGetLS } from '@/hooks/ls';
import { useGetSupportsQuery } from '@/redux/api/supportApi';
import FooterMobile from './footer-mobile/FooterMobile';

const Footer = () => {
  const isMobile = useIsMobile();
  const isAuth = useGetLS('token');
  const { data } = useGetSupportsQuery(null);

  if (isMobile) return <FooterMobile />;

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
            <p>ЦЕНТР ПОДДЕРЖКИ</p>
            <ul>
              {data?.map((sprt) => (
                <li>
                  <Link href={`/support/${sprt.id}`}>{sprt.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {Boolean(isAuth) && (
            <div>
              <p>МОЙ АККАУНТ</p>
              <ul>
                <li>
                  <Link href='/profile/cards'>Мои карты</Link>
                </li>
                <li>
                  <Link href='/profile/orders'>Мои заказы</Link>
                </li>
                <li>
                  <Link href='/profile/addresses'>Мои адреса</Link>
                </li>
                <li>
                  <Link href='/profile/favorites'>Избранные</Link>
                </li>
              </ul>
            </div>
          )}
          <div>
            <p>УЗНАТЬ БОЛЬШЕ</p>
            <ul>
              {/* <li>
                <a href=''>
                  <Image
                    src='/static/media/twitter.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li> */}
              {/* <li>
                <a href=''>
                  <Image
                    src='/static/media/facebook.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li> */}
              {/* <li>
                <a href=''>
                  <Image
                    src='/static/media/google.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li> */}
              <li>
                <a href='https://www.instagram.com/mod.uz/' target='_blank'>
                  <Image
                    src='/static/media/instagram.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li>
              {/* <li>
                <a href=''>
                  <Image
                    src='/static/media/vk.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </a>
              </li> */}
              <li>
                <a href='https://t.me/mod_uzbekistan' target='_blank'>
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
