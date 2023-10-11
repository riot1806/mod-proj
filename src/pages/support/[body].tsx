import { useRouter } from 'next/router';

import SecLayout from '@/components/layout/SecLayout';

const SupportSingle = () => {
  const { query } = useRouter();

  const body = query.body;

  return (
    <SecLayout title='ЦЕНТР ПОДДЕРЖКИ'>
      <div style={{ width: '100%' }}>{body}</div>
    </SecLayout>
  );
};

export default SupportSingle;
