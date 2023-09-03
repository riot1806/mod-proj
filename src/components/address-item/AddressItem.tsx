import styles from './styles.module.scss';

import { Address } from '@/interfaces/Address';

interface Props {
  address: Address;
}

const AddressItem = ({ address }: Props) => {
  return (
    <div className={styles.item}>
      <b>
        {address.street}, дом {address.building}, кв {address.flat},{' '}
        {address.location.name}
      </b>
      <div className={styles.item__flex}>
        {address.is_default && <span>ПО УМОЛЧАНИЮ</span>}
        <button>РЕДАКТИРОВАТЬ</button>
      </div>
    </div>
  );
};

export default AddressItem;
