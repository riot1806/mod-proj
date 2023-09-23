import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import { useIsMobile } from '@/hooks/useIsMobile';
import Widget from '@/components/widget/Widget';
import Services from '@/components/services/Services';
import Recent from '@/components/recent/Recent';

export default function Home() {
  const { data, isLoading } = useGetHomeQuery(null);
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();
  const router = useRouter();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const sectionsArr = Array.from(sections);
    const banner = sectionsArr.find((section) => section.dataset.fstb);

    banner?.setAttribute('data-fstb', 'true');
  }, [data, router]);

  return (
    <>
      {activeCategory?.widgets?.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
      {isMobile && <Recent />}
      {isMobile && <Services />}
    </>
  );
}

