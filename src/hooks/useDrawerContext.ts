import { useContext } from 'react';

import { DrawerContext } from '@/context/DrawerContext';

export const useDrawerContext = () => useContext(DrawerContext);
