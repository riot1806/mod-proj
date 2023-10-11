import styles from '@/styles/Profile.module.scss';

import Image from 'next/image';

import { useGetLS } from '@/hooks/ls';
import ProfileLayout from '@/components/layout/ProfileLayout';
import AddressItem from '@/components/address-item/AddressItem';
import AddAddressModal from '@/components/modal/add-address/AddAddressModal';
import { useGetAddressesQuery } from '@/redux/api/addressApi';

const ProfileAddresses = () => {
  const { data } = useGetAddressesQuery(null);
  const isAuth = useGetLS('token');

  if (!Boolean(isAuth)) return null;

  return (
    <ProfileLayout>
      <div className={styles.profile__addresses}>
        {data?.length ? (
          <>
            <h2 className={styles.profile__title}>МОИ АДРЕСА</h2>
            <div className={styles.profile__wrapper}>
              {data.map((address) => (
                <AddressItem key={address.id} address={address} />
              ))}
            </div>
            <AddAddressModal />
          </>
        ) : (
          <div className={styles.profile__nothing}>
            <Image
              src='/static/media/location.svg'
              alt=''
              width={60}
              height={60}
            />
            <p>У ВАС НЕТ АДРЕСОВ</p>
            <AddAddressModal />
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default ProfileAddresses;
