import { useState } from 'react';
import styles from './styles.module.scss';

import Image from 'next/image';

import { useGetSupportsQuery } from '@/redux/api/supportApi';
import SupportDrawer from '@/components/drawer/support/SupportDrawer';

const FooterMobile = () => {
  const { data } = useGetSupportsQuery(null);
  const [state, setState] = useState({
    open: false,
    body: '',
  });

  return (
    <footer className={styles.footer__mobile}>
      <div className={styles.footer__top}>
        <p>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</p>
        <div>
          <p>ГОРЯЧАЯ ЛИНИЯ</p>
          <a href='tel:+998339999990'>+998 (33) 999-99-90</a>
          <p>Будни: с 9:00 до 19:00 (Ташкентское время)</p>
        </div>
      </div>
      <ul className={styles.footer__links}>
        {data?.map((sp) => (
          <>
            <li
              key={sp.id}
              onClick={() => setState({ open: true, body: sp.body })}
            >
              <b>{sp.title}</b>
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
        ))}
      </ul>
    </footer>
  );
};

export default FooterMobile;
