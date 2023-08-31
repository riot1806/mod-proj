import { useState } from 'react';
import styles from './styles.module.scss';

import { Box, Modal, Checkbox } from '@mui/material';

import { modalSx } from '@/utils/modal';
import Button from '@/components/custom/button/Button';
import ModalHeader from '../modal-header/ModalHeader';

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button dark onClick={handleOpen}>
        ДОБАВИТЬ АДРЕС
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalSx}>
          <ModalHeader title='ДОБАВИТЬ АДРЕС' onClose={handleClose} />
          <div className={styles.modal__body}>
            <form>
              <label htmlFor='receiver'>
                ИМЯ ПОЛУЧАТЕЛЯ
                <input type='text' id='receiver' required />
              </label>
              <label htmlFor='country'>
                СТРАНА
                <input type='text' id='country' required />
              </label>
              <label htmlFor='address'>
                УЛИЦА, ДОМ, КВАРТИРА
                <input type='text' id='address' required />
              </label>
              <label htmlFor='area'>
                КРАЙ, ОБЛАСТЬ, РЕГИОН
                <input type='text' id='area' required />
              </label>
              <label htmlFor='city'>
                ГОРОД
                <input type='text' id='city' required />
              </label>
              <label htmlFor='postal'>
                ПОЧТОВЫЙ ИНДЕКС
                <input type='number' id='postal' required />
              </label>
              <div className={styles.modal__flex}>
                <Checkbox
                  sx={{
                    color: '#222222',
                    '&.Mui-checked': { color: '#222222' },
                  }}
                />
                <p>
                  <small>В моем адресе нет почтового кода</small>
                </p>
              </div>
              <label htmlFor='phone'>
                ТЕЛЕФОН
                <input type='text' id='phone' required />
              </label>
              <div className={styles.modal__flex}>
                <Checkbox />
                <p>
                  <small>Установить по умолчанию</small>
                </p>
              </div>
              <Button dark type='submit'>
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
