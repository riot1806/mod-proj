import styles from './styles.module.scss';

import { Address } from '@/interfaces/Address';

interface Props {
  className?: string;
  address: Address;
  checkout?: boolean;
  [x: string]: any;
}

const AddressItem = ({ className, address, checkout, ...props }: Props) => {
  return (
    <div className={`${styles.item} ${className}`} {...props}>
      <b>
        {address.street}, дом {address.building}, кв {address.flat},{' '}
        {address.location.name}
      </b>
      {/* {!checkout && (
        <div className={styles.item__flex}>
          {address.is_default && <span>ПО УМОЛЧАНИЮ</span>}
          <button>РЕДАКТИРОВАТЬ</button>
        </div>
      )} */}
    </div>
  );
};

export default AddressItem;
