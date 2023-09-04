import { rootApi } from './rootApi';
import { Card } from '@/interfaces/Card';

type Payload = {
  number: string;
  expire: string;
  token: string;
};

const cardApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], null>({
      query: () => ({
        url: '/customers/cards',
      }),
      transformResponse: (response: { data: Card[] }) => response.data,
      providesTags: ['Card'],
    }),
    addCard: builder.mutation<null, Payload>({
      query: (payload) => ({
        url: '/customers/cards',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Card'],
    }),
    removeCard: builder.mutation<null, number>({
      query: (cardId) => ({
        url: `/customers/cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
    }),
  }),
});

export const { useGetCardsQuery, useAddCardMutation, useRemoveCardMutation } =
  cardApi;
