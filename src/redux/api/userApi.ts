import { rootApi } from './rootApi';
import { User } from '@/interfaces/User';
import { Card } from '@/interfaces/Card';
import { Address } from '@/interfaces/Address';

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
    getUserAddresses: builder.query<Address[], null>({
      query: () => ({
        url: '/customers/addresses',
      }),
      transformResponse: (response: { data: Address[] }) => response.data,
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

export const {
  useGetUserQuery,
  useGetUserCardsQuery,
  useGetUserAddressesQuery,
  useUpdateUserMutation,
} = userApi;
