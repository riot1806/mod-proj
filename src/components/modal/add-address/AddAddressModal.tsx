import { useState } from 'react';
import styles from './styles.module.scss';

import { Box, Modal, Checkbox } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { modalSx } from '@/utils/modal';
import Button from '@/components/custom/button/Button';
import ModalHeader from '../modal-header/ModalHeader';
import { useGetUserQuery } from '@/redux/api/userApi';
import { useAddAddressMutation } from '@/redux/api/addressApi';

type Inputs = {
  first_name: string;
  last_name: string;
  street: string;
  building: string;
  flat: number;
  location_id: number;
  city: string;
};

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetUserQuery(null);
  const { register, handleSubmit } = useForm<Inputs>();
  const [addAddress, { isLoading }] = useAddAddressMutation();

  const handleOpen = (event: MouseEvent) => {
    event.preventDefault();

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addAddress({
      first_name: data?.first_name!,
      last_name: data?.last_name!,
      street: data.street,
      building: data.building,
      flat: data.flat,
      location_id: 1,
      city: data.city,
    })
      .unwrap()
      .then(() => handleClose());
  };

  return (
    <>
      <Button dark onClick={handleOpen}>
        ДОБАВИТЬ АДРЕС
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...modalSx, overflowY: 'scroll' }}>
          <ModalHeader title='ДОБАВИТЬ АДРЕС' onClose={handleClose} />
          <div className={styles.modal__body}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='first_name'>
                Имя получателя
                <input
                  type='text'
                  id='first_name'
                  defaultValue={data?.first_name}
                  {...register('first_name')}
                  required
                />
              </label>
              <label htmlFor='last_name'>
                Фамилия получателя
                <input
                  type='text'
                  id='last_name'
                  defaultValue={data?.last_name}
                  {...register('last_name')}
                  required
                />
              </label>
              <label htmlFor='street'>
                Адрес
                <input
                  type='text'
                  id='street'
                  {...register('street')}
                  minLength={5}
                  required
                />
              </label>
              <label htmlFor='building'>
                Дом
                <input
                  type='text'
                  id='building'
                  {...register('building')}
                  required
                />
              </label>
              <label htmlFor='flat'>
                Квартира
                <input type='number' id='flat' {...register('flat')} required />
              </label>
              <label htmlFor='city'>
                Город
                <input type='text' id='city' {...register('city')} required />
              </label>
              <Button dark type='submit' withLoading={isLoading}>
                ДОБАВИТЬ
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddAddressModal;
