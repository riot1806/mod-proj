import { useState } from 'react';
import styles from './styles.module.scss';

import { Box, Modal } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { modalSx } from '@/utils/modal';
import { useAddCardMutation } from '@/redux/api/cardApi';
import { paycomService } from '@/services/paycom.service';
import Button from '@/components/custom/button/Button';
import ModalHeader from '../modal-header/ModalHeader';

type Inputs = {
  number: number;
  expire: {
    month: number;
    year: number;
  };
};

const AddCardModal = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  const [addCard, { isLoading }] = useAddCardMutation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const exp = data.expire.month + data.expire.year;

    const response = await paycomService.create({
      number: data.number.toString(),
      expire: exp.toString(),
    });

    const result = response.result.card;

    addCard({
      number: result.number,
      expire: result.expire,
      token: result.token,
    })
      .unwrap()
      .then(() => handleClose());
  };

  return (
    <>
      <Button dark onClick={handleOpen}>
        ДОБАВИТЬ КАРТУ
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalSx}>
          <ModalHeader title='ДОБАВИТЬ КАРТУ' onClose={handleClose} />
          <div className={styles.modal__body}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='number'>
                НОМЕР КАРТЫ
                <input
                  type='number'
                  id='number'
                  placeholder='XXXX XXXX XXXX XXXX'
                  {...register('number')}
                  required
                />
              </label>
              <div className={styles.modal__flex}>
                <label htmlFor='month'>
                  ММ
                  <input
                    type='number'
                    id='month'
                    placeholder='XX'
                    {...register('expire.month')}
                    required
                  />
                </label>
                <label htmlFor='year'>
                  ГГ
                  <input
                    type='number'
                    id='year'
                    placeholder='XX'
                    {...register('expire.year')}
                    required
                  />
                </label>
              </div>
              <p>
                <small>
                  Нажимая на кнопку «Добавить», вы соглашаетесь с условиями
                  добавления карты
                </small>
              </p>
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

export default AddCardModal;
