import { useRouter } from 'next/router';

import SecLayout from '@/components/layout/SecLayout';
import { useGetSupportQuery } from '@/redux/api/supportApi';

const SupportSingle = () => {
  const { query } = useRouter();
  const { data } = useGetSupportQuery(+query.id);

  return (
    <SecLayout title='ЦЕНТР ПОДДЕРЖКИ'>
      <div style={{ width: '100%', lineHeight: '25px' }}>{data?.body}</div>
    </SecLayout>
  );
};

export default SupportSingle;
