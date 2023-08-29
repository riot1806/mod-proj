import { useSearchParams } from 'next/navigation';

import { useGetHomeQuery } from '@/redux/api/homeApi';
import Widget from '@/components/widget/Widget';

export default function Home() {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('c');

  const activeCategory =
    data?.find((c) => c.slug === search) || (data && data[1]);

  return (
    <>
      {activeCategory?.widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </>
  );
}
