import { ReactNode } from 'react';
import styles from './styles.module.scss';

import { useRouter } from 'next/router';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';

import { Category } from '@/interfaces/Category';

interface Props {
  category: Category;
}

interface CustomProps {
  title: string;
  categoryId: number;
  children: ReactNode;
}

const CustomAccordion = ({ title, categoryId, children }: CustomProps) => {
  const router = useRouter();

  const handleChange = () => {
    router.push({ pathname: '/products', query: { c: categoryId } });
  };

  return (
    <Accordion classes={{ root: styles.accordion }} onChange={handleChange}>
      <AccordionSummary
        classes={{
          root: styles.accordion__summary,
          contentGutters: styles.accordion__gutters,
        }}
      >
        <b>{title}</b>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const AccordionComponent = ({ category }: Props) => {
  return (
    <CustomAccordion title={category.name} categoryId={category.id}>
      {category.children?.map((cat) => (
        <CustomAccordion key={cat.id} title={cat.name} categoryId={cat.id}>
          <ul className={styles.accordion__list}>
            {cat.children?.map((c) => (
              <li key={c.id}>
                <Link href={{ pathname: `/products`, query: { c: c.id } }}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </CustomAccordion>
      ))}
    </CustomAccordion>
  );
};

export default AccordionComponent;
