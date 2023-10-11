import { rootApi } from './rootApi';

const productApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<any, number>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      transformResponse: (response: { data: any[] }) => response.data,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
