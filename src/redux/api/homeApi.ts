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
    getHomeCategories: builder.query<Category[], number>({
      query: (id) => ({
        url: `/home/${id}/categories`,
      }),
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
  }),
});

export const { useGetHomeQuery, useGetHomeCategoriesQuery } = homeApi;
