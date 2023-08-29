import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import { Category } from '@/interfaces/Category';

interface Props {
  category: Category;
}

const AccordionComponent = ({ category }: Props) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography>{category.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {category.children?.map((cat) => (
          <Accordion key={cat.id}>
            <AccordionSummary>
              <Typography>{cat.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {cat.children?.map((c) => (
                <Link href={`/products/${c.id}`}>{c.name}</Link>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
