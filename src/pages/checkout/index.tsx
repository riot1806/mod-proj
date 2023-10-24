import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useViewCartQuery } from '@/redux/api/cartApi';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import Reg from '@/components/view/reg/Reg';
import CheckoutLayout from '@/components/layout/CheckoutLayout';

const Checkout = () => {
  const { data } = useViewCartQuery(null);
  const [callback, setCallback] = useState({
    state: false,
    data: '',
  });
  const router = useRouter();

  useEffect(() => {
    if (!data?.products.length) router.push('/cart');
  }, []);

  useDidMountEffect(() => {
    if (callback.data)
      router.push({
        pathname: '/checkout/otp',
        query: { ...router.query, phone: callback.data },
      });
  }, [callback]);

  return (
    <CheckoutLayout>
      <Reg callback={setCallback} checkout />
    </CheckoutLayout>
  );
};

export default Checkout;
