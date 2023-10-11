import { AXIOS } from '@/utils/axios';

type Payload = {
  number: string;
  expire: string;
};

export const paycomService = {
  create: async (payload: Payload) => {
    const response = await AXIOS.post('/api', {
      method: 'cards.create',
      params: {
        card: payload,
        save: true,
      },
    });

    return response.data;
  },

  // remove: async (cardToken: string) => {
  //   const response = await AXIOS.post('/api', {
  //     method: 'cards.remove',
  //     params: {
  //       token: cardToken,
  //     },
  //   });

  //   return response.data;
  // },
};
