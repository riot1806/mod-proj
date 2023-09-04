import Button from '../custom/button/Button';
import styles from './styles.module.scss';

const SingleProductMore = () => {
  return (
    <div className={styles.more}>
      <ul className={styles.more__top}>
        <li>
          <span>
            <b>СТАНДАРТНАЯ</b> ДОСТАВКА
          </span>
          <span>
            <strong>БЕСПЛАТНО</strong> 2-4 рабочих дня
          </span>
        </li>
        <li>
          <span>
            <b>ЭКСПРЕСС</b> ДОСТАВКА
          </span>
          <span>
            <strong>70000 UZS</strong> 1-2 рабочих дня
          </span>
        </li>
      </ul>
      <ul className={styles.more__middle}>
        <li>
          <span>ЦВЕТ</span>
          <span>Фиолетовый</span>
        </li>
        <li>
          <span>МАТЕРИАЛ</span>
          <span>Джерси</span>
        </li>
        <li>
          <span>СОСТАВ</span>
          <span>Полиэстер 100%</span>
        </li>
        <li>
          <span>УХОД</span>
          <span>Ручная стирка</span>
        </li>
        <li>
          <span>СТРАНА</span>
          <span>Италия</span>
        </li>
      </ul>
      {/* <div className={styles.more__questions}>
        <b>ОСТАЛИСЬ ВОПРОСЫ?</b>
        <Button>НАПИСАТЬ НАМ</Button>
      </div> */}
    </div>
  );
};

export default SingleProductMore;
