import { useState, useEffect } from 'react';
import styles from '../styles.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useGetUserQuery } from '@/redux/api/userApi';
import {
  useAddAddressMutation,
  useGetAddressesQuery,
  useLazyGetAddressesQuery,
} from '@/redux/api/addressApi';
import { useCreateOrderMutation } from '@/redux/api/orderApi';
import { useGetLS } from '@/hooks/ls';
import Button from '@/components/custom/button/Button';
import DeliverType from '@/components/deliver-type/DeliverType';
import PaymentMethod from '@/components/payment-method/PaymentMethod';
import AddressItem from '@/components/address-item/AddressItem';
import AddAddressModal from '@/components/modal/add-address/AddAddressModal';

type DeliverType = 'regular' | 'express';
type PaymentMethodType = 'cash' | 'card';

type Inputs = {
  address: string;
  city: string;
  building: string;
  flat: number;
  entrance?: number;
  intercom?: number;
  location_id: number;
};

const Order = () => {
  const [deliverType, setDeliverType] = useState<DeliverType>('regular');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('cash');
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const { data: userData } = useGetUserQuery(null);
  const { data: addresses, isSuccess } = useGetAddressesQuery(null);
  const [addAddress] = useAddAddressMutation();
  const [createOrder] = useCreateOrderMutation();
  const [trigger] = useLazyGetAddressesQuery();
  const router = useRouter();
  const isAuth = useGetLS('token');

  const [addressId, setAddressId] = useState<number>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    if (isAuth) {
      if (!addressId) return alert('Выберите адрес');

      createOrder({
        address_id: addressId!,
        delivery: deliverType,
        payment: paymentMethod,
        provider: paymentMethod === 'card' ? 'paycom' : '',
      })
        .unwrap()
        .then((response) => {
          alert(`Ваш заказ №${response.data.reference} оформлен`);
          return router.push('/');
        })
        .finally(() => setIsLoading(false));

      return;
    }

    await addAddress({
      first_name: userData?.first_name!,
      last_name: userData?.last_name!,
      street: data.address,
      building: data.building,
      flat: data.flat,
      location_id: 1,
      city: data.city,
    })
      .unwrap()
      .then(() =>
        trigger(null)
          .unwrap()
          .then((res) =>
            createOrder({
              address_id: res[res.length - 1].id,
              delivery: deliverType,
              payment: paymentMethod,
              provider: paymentMethod === 'card' ? 'paycom' : '',
            })
              .unwrap()
              .then((response) => {
                alert(`Ваш заказ №${response.data.reference} оформлен`);
                return router.push('/');
              })
              .finally(() => setIsLoading(false))
          )
      );
  };

  useEffect(() => {
    const defaultAddress = addresses?.find(
      (address) => address.is_default === true
    )?.id;

    setAddressId(defaultAddress!);
  }, [isSuccess]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>АДРЕС ДОСТАВКИ</h3>
      {Boolean(isAuth) ? (
        <div className={styles.form__addresses}>
          {addresses?.length ? (
            addresses?.map((address) => (
              <AddressItem
                key={address.id}
                address={address}
                checkout
                className={addressId === address.id ? styles.form__active : ''}
                onClick={() => setAddressId(address.id)}
              />
            ))
          ) : (
            <AddAddressModal />
          )}
        </div>
      ) : (
        <>
          <label htmlFor='address'>
            АДРЕС
            <input type='text' id='address' required {...register('address')} />
          </label>
          <label htmlFor='city'>
            ГОРОД
            <input type='text' id='city' required {...register('city')} />
          </label>
          <div className={styles.form__flex}>
            <label htmlFor='building'>
              ДОМ
              <input
                type='text'
                id='building'
                required
                {...register('building')}
                maxLength={8}
              />
            </label>
            <label htmlFor='flat'>
              КВ
              <input type='text' id='flat' required {...register('flat')} />
            </label>
          </div>
          <label htmlFor='comment'>
            КОММЕНТАРИЙ
            <textarea id='comment' cols={30} rows={10}></textarea>
          </label>
        </>
      )}
      <h3>ТИП ДОСТАВКИ</h3>
      <DeliverType
        deliverType={deliverType}
        setDeliverType={setDeliverType}
        styles={styles}
      />
      <h3>СПОСОБ ОПЛАТЫ</h3>
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        styles={styles}
      />
      <Button dark type='submit' withLoading={isLoading}>
        ДАЛЕЕ
      </Button>
    </form>
  );
};

export default Order;
