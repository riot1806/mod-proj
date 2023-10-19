import { useState, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

import { Box, Tab, Tabs, Typography } from '@mui/material';

import { Feature } from '@/types/feature.type';
import Sizes from '../sizes/Sizes';
import { Size } from '@/interfaces/Size';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
  description: string;
  features: Feature[];
  sizes: Size[];
  sizeId: number;
  setSizeId: Dispatch<SetStateAction<number>>;
}

const SingleProductTabs = ({
  description,
  features,
  sizes,
  sizeId,
  setSizeId,
}: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} textColor='inherit'>
        <Tab label='ОПИСАНИЕ' {...a11yProps(0)} />
        {/* <Tab label='РАЗМЕРЫ' {...a11yProps(1)} /> */}
        <Tab label='ДОСТАВКА' {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <div className={styles.tabs__description}>
          <p>{description}</p>
          {features?.map((feature) => (
            <ul key={feature.id}>
              <li className={styles.tabs__title}>{feature.name}</li>
              {feature.values.map((value) => (
                <li key={value.id}>{value.name}</li>
              ))}
            </ul>
          ))}
        </div>
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={1}>
        <Sizes sizes={sizes} sizeId={sizeId} setSizeId={setSizeId} />
      </CustomTabPanel> */}
      <CustomTabPanel value={value} index={2}>
        Доставка
      </CustomTabPanel>
    </>
  );
};

export default SingleProductTabs;
