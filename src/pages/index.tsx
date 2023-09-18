import { useSearchParams } from 'next/navigation';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import Widget from '@/components/widget/Widget';
import Services from '@/components/services/Services';
import Recent from '@/components/recent/Recent';
import CWidget from '@/components/cwidget/CWidget';

export default function Home() {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  return (
    <>
      {/* <CWidget /> */}
      {activeCategory?.widgets?.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
      {isMobile && <Recent />}
      {isMobile && <Services />}
    </>
  );
}
