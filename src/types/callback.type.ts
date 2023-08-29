import { Dispatch, SetStateAction } from 'react';

export type Callback = Dispatch<SetStateAction<{ state: boolean; data: any }>>;
