import styles from './styles.module.scss';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import {
  useGetHomeCategoriesQuery,
  useGetHomeQuery,
} from '@/redux/api/homeApi';

const CWidget = () => {
  const { data } = useGetHomeQuery(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('h');

  const activeCategory = data?.find((c) => c.slug === (search || 'men'));

  const { data: categoryData } = useGetHomeCategoriesQuery(activeCategory?.id!);

  return (
    <section className={styles.cwidget}>
      {categoryData?.map((category) => (
        <Accordion
          key={category.id}
          classes={{
            root: styles.accordion,
          }}
        >
          <AccordionSummary
            classes={{
              root: styles.accordion__summary,
              contentGutters: styles.accordion__gutters,
            }}
          >
            <div className={styles.accordion__summ}>
              <Image
                src='/static/media/star.svg'
                alt=''
                width={16}
                height={16}
              />
              <b>{category.name}</b>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {category.children?.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={{
                      pathname: '/products',
                      query: { ...router.query, c: cat.id },
                    }}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
};

export default CWidget;
