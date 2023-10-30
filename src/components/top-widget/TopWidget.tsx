import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

import { useLocalStorage } from 'usehooks-ts';
import Image from 'next/image';

import { useIsMobile } from '@/hooks/useIsMobile';

const TopWidget = () => {
  const [show, setShow] = useLocalStorage('topWidget', true);
  const isMobile = useIsMobile();

  const handleClick = () => {
    const isIOS = navigator.userAgent
      .toLowerCase()
      .includes('iphone' || 'mac' || 'ipad');

    window.location.href = isIOS
      ? 'https://apps.apple.com/us/app/mod/id1476161336'
      : 'https://play.google.com/store/apps/details?id=mod.client';
  };

  return (
    show &&
    isMobile &&
    createPortal(
      <div className={styles.top__widget}>
        <div className={styles.top__widget_left}>
          <button
            onClick={() => setShow(false)}
            className={styles.top__widget_close}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='white'
            >
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
            </svg>
          </button>
          <Image
            className={styles.top__widget_logo}
            src='/static/media/widget_logo.jpg'
            alt=''
            width={40}
            height={40}
          />
          <p>
            Скидка 10% <br /> На первый заказ в приложении
          </p>
        </div>
        <div className={styles.top__widget_right}>
          <button onClick={handleClick}>Установить</button>
        </div>
      </div>,
      document.getElementById('__next')!
    )
  );
};

export default TopWidget;
