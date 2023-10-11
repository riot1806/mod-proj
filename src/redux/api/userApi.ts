import { rootApi } from './rootApi';
import { User } from '@/interfaces/User';
import { Address } from '@/interfaces/Address';

const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, null>({
      query: () => ({
        url: '/otp/customer',
      }),
      transformResponse: (response: { data: User }) => response.data,
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
  useUpdateUserMutation,
} = userApi;
