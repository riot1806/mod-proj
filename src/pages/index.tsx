import { useSearchParams } from 'next/navigation';
import { CircularProgress } from '@mui/material';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import Widget from '@/components/widget/Widget';
import Services from '@/components/services/Services';
import Recent from '@/components/recent/Recent';

export default function Home() {
  const { data, isLoading } = useGetHomeQuery(null);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  return (
    <>
      {isLoading ? (
        <div className='g__preloader'>
          <CircularProgress size={45} color='inherit' />
        </div>
      ) : (
        activeCategory?.widgets?.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))
      )}
      {isMobile && <Recent />}
      {isMobile && <Services />}
    </>
  );
}
