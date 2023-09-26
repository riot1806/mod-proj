import styles from '@/styles/Support.module.scss';

import Image from 'next/image';

import { useGetSupportsQuery } from '@/redux/api/supportApi';
import SecLayout from '@/components/layout/SecLayout';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

const Support = () => {
  const { data } = useGetSupportsQuery(null);
  const isMobile = useIsMobile();

  return (
    <SecLayout title='ЦЕНТР ПОДДЕРЖКИ'>
      <div className={styles.support}>
        <ul className={styles.support__top}>
          <li>
            <div className={styles.support__pic}>
              <Image
                src='/static/media/map.svg'
                alt=''
                width={30}
                height={30}
              />
            </div>
            <p>Узнать где мой заказ</p>
          </li>
          <li>
            <div className={styles.support__pic}>
              <Image
                src='/static/media/history.svg'
                alt=''
                width={30}
                height={30}
              />
            </div>
            <p>Узнать сроки условия</p>
          </li>
          <li>
            <div className={styles.support__pic}>
              <Image
                src='/static/media/meter.svg'
                alt=''
                width={30}
                height={30}
              />
            </div>
            <p>Выбрать размер</p>
          </li>
        </ul>
        <form className={styles.support__middle}>
          <Image src='/static/media/search.svg' alt='' width={16} height={16} />
          <input type='text' placeholder='Поиск' />
        </form>
        <ul className={styles.support__bottom}>
          {data?.map(
            (support) => (
              <li key={support.id}>
                <Link href={`/support/${support.body}`}>{support.title}</Link>
              </li>
            )
            // isMobile ? (
            //   <li key={support.id}>{support.title}</li>
            // ) : (
            //   <li key={support.id}>
            //     <Link href={`/support/${support.body}`}>{support.title}</Link>
            //   </li>
            // )
          )}
        </ul>
      </div>
    </SecLayout>
  );
};

export default Support;
