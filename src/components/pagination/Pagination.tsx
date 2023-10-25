import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import { styled } from '@mui/material';
import usePagination from '@mui/material/usePagination';
import Image from 'next/image';

import { Pagination } from '@/types/pagination.type';
import { useIsMobile } from '@/hooks/useIsMobile';

const List = styled('ul')({
  display: 'flex',
  gap: '20px',
});

type PaginationProps = {
  paginate: Pagination;
};

const Pagination = ({ paginate }: PaginationProps) => {
  const router = useRouter();

  const isMobile = useIsMobile();

  const { items } = usePagination({
    count: paginate?.last_page,
    boundaryCount: 1,
    onChange: (event: ChangeEvent, page: number) => {
      router.push({
        pathname: '/products',
        query: {
          ...router.query,
          page,
        },
      });
    },
  });

  return (
    <nav className={styles.pagination}>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type='button'
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children =
              type === 'previous' ? (
                <button
                  type='button'
                  {...item}
                  className={styles.pagination__prev}
                >
                  <Image
                    src='/static/media/arrow-left.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  {!isMobile && <span>ПРЕДЫДУЩАЯ</span>}
                </button>
              ) : (
                <button
                  type='button'
                  {...item}
                  className={styles.pagination__next}
                >
                  {!isMobile && <span>СЛЕДУЮЩАЯ</span>}
                  <Image
                    src='/static/media/arrow-right.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                </button>
              );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default Pagination;
