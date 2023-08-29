import { useState } from 'react';

import { Modal, Box } from '@mui/material';

import { modalSx } from '@/utils/modal';
import Button from '@/components/custom/button/Button';
import ModalHeader from '../modal-header/ModalHeader';
import Reg from '@/components/view/reg/Reg';
import Confirm from '@/components/view/confirm/Confirm';

const RegModal = () => {
  const [open, setOpen] = useState(false);
  const [callback, setCallback] = useState({
    state: false,
    data: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button dark onClick={handleOpen}>
        ЗАРЕГИСТРИРОВАТЬСЯ
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalSx}>
          <ModalHeader title='РЕГИСТРАЦИЯ' onClose={handleClose} />
          <div>
            {callback.state ? (
              <Confirm phone={callback.data} />
            ) : (
              <Reg callback={setCallback} />
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default RegModal;
