import { useState, useEffect } from 'react';
import styles from '@/styles/SingleProduct.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { useGetProductQuery } from '@/redux/api/productApi';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { Media } from '@/interfaces/Media';
import { useAddToCartMutation } from '@/redux/api/cartApi';
import GoBack from '@/components/goback/GoBack';
import Sizes from '@/components/sizes/Sizes';
import Colors from '@/components/colors/Colors';
import Button from '@/components/custom/button/Button';

const SingleProduct = () => {
  const { query } = useRouter();
  const { data, isSuccess } = useGetProductQuery(Number(query.item_id));
  const [sizeId, setSizeId] = useState<number>();
  const [activeImage, setActiveImage] = useState('');
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = () => {
    if (!sizeId) return alert('Выберите размер!');

    addToCart({
      product_id: data?.id,
      quantity: 1,
      option_id: sizeId!,
    })
      .unwrap()
      .then(() => alert('Товар добавлен в корзину'));
  };

  useEffect(() => {
    setActiveImage(useGetImageSource(data?.media[0]));
  }, [isSuccess]);

  return (
    <section>
      <GoBack />
      <div className={styles.product}>
        <div className={styles.product__top}>
          <ul>
            {data?.media.map((media: Media) => {
              const imageSource = useGetImageSource(media);

              return (
                <li key={media.id} onClick={() => setActiveImage(imageSource)}>
                  <Image src={imageSource} alt='' width={60} height={60} />
                </li>
              );
            })}
          </ul>
          {isSuccess && (
            <Image
              src={activeImage}
              alt=''
              fill
              className={styles.product__image}
            />
          )}
          <div className={styles.product__info}>
            <p>{data?.brand.name}</p>
            <b>{data?.name}</b>
            <strong>{data?.price} UZS</strong>
            <Sizes
              sizes={data?.options}
              sizeId={sizeId!}
              // @ts-ignore
              setSizeId={setSizeId}
            />
            <Colors colors={data?.colors} />
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
          </div>
        </div>
        <div className={styles.product__bottom}></div>
      </div>
    </section>
  );
};

export default SingleProduct;
