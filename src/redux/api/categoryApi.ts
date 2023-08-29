import { rootApi } from './rootApi';

const categoryApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<any[], null>({
      query: () => ({
        url: '/categories',
      }),
      transformResponse: (response: { data: any[] }) => response.data,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
