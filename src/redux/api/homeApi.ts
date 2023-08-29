import { rootApi } from './rootApi';
import { Category } from '@/interfaces/Category';

const homeApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query<Category[], null>({
      query: () => ({
        url: '/home',
      }),
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
  }),
});

export const { useGetHomeQuery } = homeApi;
