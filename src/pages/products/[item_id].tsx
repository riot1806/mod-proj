import { useState, useEffect } from 'react';
import styles from '@/styles/SingleProduct.module.scss';

import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useGetProductQuery } from '@/redux/api/productApi';
import { useGetImageSource } from '@/hooks/useGetImageSource';
import { Media } from '@/interfaces/Media';
import { useAddToCartMutation } from '@/redux/api/cartApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import GoBack from '@/components/goback/GoBack';
import Sizes from '@/components/sizes/Sizes';
import Colors from '@/components/colors/Colors';
import Button from '@/components/custom/button/Button';
import SingleProductMobile from '@/components/single-product-mobile/SingleProductMobile';
import SingleProductMore from '@/components/single-product-more/SingleProductMore';

const SingleProductTabs = dynamic(
  () => import('@/components/single-product-tabs/SingleProductTabs'),
  { ssr: false }
);

const SingleProduct = () => {
  const { query } = useRouter();
  const { data, isSuccess } = useGetProductQuery(Number(query.item_id));
  const [sizeId, setSizeId] = useState<number>();
  const [activeImage, setActiveImage] = useState('');
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const isMobile = useIsMobile(1000);

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

  if (isMobile)
    return (
      <SingleProductMobile
        product={data}
        sizeId={sizeId!}
        // @ts-ignore
        setSizeId={setSizeId}
        handleAddToCart={handleAddToCart}
        isLoading={isLoading}
      />
    );

  return (
    <section>
      <GoBack />
      <div className={styles.product}>
        <div className={styles.product__top}>
          <ul className={styles.product__pics}>
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
            <b className={styles.product__b}>{data?.name}</b>
            <strong className={styles.product__s}>{data?.price} UZS</strong>
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
            <SingleProductMore />
          </div>
        </div>
        <div className={styles.product__bottom}>
          <SingleProductTabs
            description={data?.description}
            features={data?.features}
            sizes={data?.options}
            sizeId={sizeId!}
            // @ts-ignore
            setSizeId={setSizeId}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
