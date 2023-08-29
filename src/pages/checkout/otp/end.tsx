import { useState } from 'react';

import CheckoutLayout from '@/components/layout/CheckoutLayout';
import Order from '@/components/view/order/Order';

const CheckoutEnd = () => {
  return (
    <CheckoutLayout>
      <Order />
    </CheckoutLayout>
  );
};

export default CheckoutEnd;
