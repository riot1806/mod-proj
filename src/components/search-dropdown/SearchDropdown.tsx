import Link from 'next/link';
import Image from 'next/image';

import { CartItem as CartItemType } from '@/interfaces/CartItem';
import CartItem from '../cart-item/CartItem';
import { useGetImageSource } from '@/hooks/useGetImageSource';

type SearchDropdownProps = {
  styles: any;
  show: boolean;
  data: CartItemType[];
};

const SearchDropdown = ({ styles, show, data }: SearchDropdownProps) => {
  return (
    <div
      className={styles.search__dropdown}
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className={styles.search__dropdown_wrapper}>
        {data?.map((product) => {
          const imageSource = useGetImageSource(product.media!);

          return (
            <Link
              href={`/products/${product.item_id || product.id}`}
              key={product.id}
            >
              <div className={styles.search__dropdown_item}>
                <Image src={imageSource} alt='' width={100} height={100} />
                <div className={styles.search__dropdown_info}>
                  <b>{product.brand.name}</b>
                  <p>{product.name}</p>
                  <strong>{product.price} so'm</strong>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchDropdown;
