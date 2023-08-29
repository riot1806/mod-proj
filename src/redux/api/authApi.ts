import { rootApi } from './rootApi';

const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<null, { phone: string }>({
      query: (payload) => ({
        url: '/otp/login',
        method: 'POST',
        body: payload,
      }),
    }),
    reg: builder.mutation<
      null,
      { phone: string; first_name: string; last_name: string }
    >({
      query: (payload) => ({
        url: '/otp/register',
        method: 'POST',
        body: payload,
      }),
    }),
    confirm: builder.mutation<
      { token: string },
      { phone: string; code: number }
    >({
      query: (payload) => ({
        url: '/otp/confirm',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegMutation, useConfirmMutation } = authApi;
