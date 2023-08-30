import { ReactNode } from 'react';
import styles from './styles.module.scss';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';

import { Category } from '@/interfaces/Category';

interface Props {
  category: Category;
}

interface CustomProps {
  title: string;
  children: ReactNode;
}

const CustomAccordion = ({ title, children }: CustomProps) => {
  return (
    <Accordion classes={{ root: styles.accordion }}>
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
    <CustomAccordion title={category.name}>
      {category.children?.map((cat) => (
        <CustomAccordion key={cat.id} title={cat.name}>
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
