import { rootApi } from './rootApi';
import { User } from '@/interfaces/User';
import { Card } from '@/interfaces/Card';

const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, null>({
      query: () => ({
        url: '/otp/customer',
      }),
      transformResponse: (response: { data: User }) => response.data,
    }),
    getUserCards: builder.query<Card[], null>({
      query: () => ({
        url: '/customers/cards',
      }),
      transformResponse: (response: { data: Card[] }) => response.data,
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: '/customers/profile',
        method: 'PATCH',
        body: payload,
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetUserCardsQuery, useUpdateUserMutation } =
  userApi;
