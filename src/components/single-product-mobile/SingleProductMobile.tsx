import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { useGetImageSource } from '@/hooks/useGetImageSource';
import { Media } from '@/interfaces/Media';
import { singleProductCarouselConfig } from '@/utils/carousel';
import Carousel from '../carousel/Carousel';
import Fav from '../fav/Fav';
import Sizes from '../sizes/Sizes';
import Colors from '../colors/Colors';
import Button from '../custom/button/Button';
import SingleProductMore from '../single-product-more/SingleProductMore';
import SingleProductTabs from '../single-product-tabs/SingleProductTabs';
import CurrencyFormat from 'react-currency-format';

interface Props {
  product: any;
  sizeId: number;
  setSizeId: Dispatch<SetStateAction<number>>;
  handleAddToCart: () => void;
  isLoading: boolean;
}

const SingleProductMobile = ({
  product,
  sizeId,
  setSizeId,
  handleAddToCart,
  isLoading,
}: Props) => {
  const router = useRouter();

  return (
    <section className={styles.single__product}>
      <Carousel className='owl-theme' {...singleProductCarouselConfig}>
        {product?.media.map((media: Media) => {
          const imageSource = useGetImageSource(media);

          return (
            <div key={media.id} className={styles.single__product_slide}>
              <Image src={imageSource} alt='' fill />
              <div className={styles.single__product_over}>
                <button onClick={() => router.back()}>
                  <Image
                    src='/static/media/back.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </button>
                <Fav itemId={product.id} />
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className={styles.single__product_info}>
        <b className={styles.single__product_b}>{product?.brand.name}</b>
        <p style={{ fontFamily: 'Helvetica Neue Bold, sans-serif' }}>
          {product?.name}
        </p>
        <CurrencyFormat
          value={1200000}
          displayType='text'
          thousandSeparator
          renderText={(value) => (
            <strong className={styles.single__product_s}>{value} UZS</strong>
          )}
          format='### ###'
        />
        <Sizes sizes={product?.options} sizeId={sizeId} setSizeId={setSizeId} />
        <Colors colors={product?.colors} />
        <Button
          dark
          className={styles.product__add}
          onClick={handleAddToCart}
          withLoading={isLoading}
        >
          <Image
            src='/static/media/bag_white.svg'
            alt=''
            width={16}
            height={16}
          />
          <span>ДОБАВИТЬ В КОРЗИНУ</span>
        </Button>
        <SingleProductMore />
        <SingleProductTabs
          description={product?.description}
          features={product?.features}
          sizes={product?.options}
          sizeId={sizeId}
          setSizeId={setSizeId}
        />
      </div>
    </section>
  );
};

export default SingleProductMobile;
