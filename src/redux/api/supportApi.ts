import { rootApi } from './rootApi';
import { Support } from '@/interfaces/Support';

const supportApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupports: builder.query<Support[], null>({
      query: () => ({
        url: '/pages',
      }),
      transformResponse: (response: { data: Support[] }) => response.data,
    }),
    getSupport: builder.query<Support, number>({
      query: (supportId) => ({
        url: `/pages/${supportId}`,
      }),
      transformResponse: (response: { data: Support }) => response.data,
    }),
  }),
});

export const { useGetSupportsQuery, useGetSupportQuery } = supportApi;
