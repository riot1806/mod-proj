import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';
import { useGetCardsQuery, useRemoveCardMutation } from '@/redux/api/cardApi';
import ProfileLayout from '@/components/layout/ProfileLayout';
import AddCardModal from '@/components/modal/add-cart/AddCardModal';

const ProfileCards = () => {
  const { data } = useGetCardsQuery(null);
  const [removeCard] = useRemoveCardMutation();
  const isAuth = useGetLS('token');

  const handleDelete = async (cardId: number) => {
    removeCard(cardId);
  };

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile__cards}>
        {data?.length ? (
          <>
            <h2 className={styles.profile__title}>МОИ КАРТЫ</h2>
            <ul>
              {data.map((card) => (
                <li key={card.id}>
                  <b>{card.number}</b>
                  <button onClick={() => handleDelete(card.id)}>
                    <Image
                      src='/static/media/trash.svg'
                      alt=''
                      width={20}
                      height={20}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <AddCardModal />
          </>
        ) : (
          <div className={styles.profile__nothing}>
            <Image src='/static/media/card.svg' alt='' width={60} height={60} />
            <p>У ВАС НЕТ КАРТ</p>
            <p>
              <small>Чтобы быстро оформлять заказы нужно добавить карту</small>
            </p>
            <AddCardModal />
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default ProfileCards;
