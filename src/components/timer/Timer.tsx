import React from 'react';
import styles from './styles.module.scss';

import { useLoginMutation } from '@/redux/api/authApi';
import Button from '../custom/button/Button';

const Timer = ({ hours = 0, minutes = 0, seconds = 0, phone = '' }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  const [login] = useLoginMutation();

  const tick = () => {
    if (paused || over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([
      parseInt(hours.toString()),
      parseInt(minutes.toString()),
      parseInt(seconds.toString()),
    ]);
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className={styles.timer}>
      {over ? (
        <Button
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            login({ phone }).unwrap().then(() => reset());
          }}
        >
          ОПРАВИТЬ ЕЩЕ РАЗ
        </Button>
      ) : (
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
      )}
    </div>
  );
};

export default Timer;
