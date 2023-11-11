import { useState } from 'react';
import styles from '@/styles/Support.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { useGetSupportsQuery } from '@/redux/api/supportApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import SecLayout from '@/components/layout/SecLayout';
import SupportDrawer from '@/components/drawer/support/SupportDrawer';

const Support = () => {
  const { data } = useGetSupportsQuery(null);
  const [state, setState] = useState({
    open: false,
    body: '',
  });
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
        <ul className={styles.support__bottom}>
          {data?.map((support) =>
            isMobile ? (
              <>
                <li
                  key={support.id}
                  onClick={() => setState({ open: true, body: support.body })}
                  style={{ cursor: 'pointer' }}
                >
                  <p>{support.title}</p>
                  <Image
                    src='/static/media/next.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </li>
                <SupportDrawer open={state.open} setOpen={setState}>
                  {state.body}
                </SupportDrawer>
              </>
            ) : (
              <li key={support.id}>
                <Link href={`/support/${support.id}`}>{support.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    </SecLayout>
  );
};

export default Support;
