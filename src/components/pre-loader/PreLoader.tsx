import { useEffect } from 'react';
import styles from './styles.module.scss';

const PreLoader = () => {
  useEffect(() => {
    const body = document.body;

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'unset';
      body.style.overflowX = 'hidden';
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <h1>MOD</h1>
    </div>
  );
};

export default PreLoader;
