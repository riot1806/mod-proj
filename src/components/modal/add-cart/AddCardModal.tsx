import { useState } from 'react';
import styles from './styles.module.scss';

import { Box, Modal } from '@mui/material';

import { modalSx } from '@/utils/modal';
import Button from '@/components/custom/button/Button';
import ModalHeader from '../modal-header/ModalHeader';

const AddCardModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button dark onClick={handleOpen}>
        ДОБАВИТЬ КАРТУ
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalSx}>
          <ModalHeader title='ДОБАВИТЬ КАРТУ' onClose={handleClose} />
          <div className={styles.modal__body}>
            <form>
              <label htmlFor='number'>
                НОМЕР КАРТЫ
                <input type='number' id='number' required />
              </label>
              <div className={styles.modal__flex}>
                <label htmlFor='month'>
                  ММ
                  <input type='number' id='month' required />
                </label>
                <label htmlFor='year'>
                  ГГ
                  <input type='number' id='year' required />
                </label>
              </div>
              <p>
                <small>
                  Нажимая на кнопку «Добавить», вы соглашаетесь с условиями
                  добавления карты
                </small>
              </p>
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

export default AddCardModal;
