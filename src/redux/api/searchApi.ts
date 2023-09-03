import { rootApi } from './rootApi';
import { CartItem } from '@/interfaces/CartItem';

const searchApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    searchProducts: builder.query<CartItem[], string>({
      query: (query) => ({
        url: '/search/product',
        params: {
          q: query,
        },
      }),
      transformResponse: (response: { data: CartItem[] }) => response.data,
    }),
  }),
});

export const { useLazySearchProductsQuery } = searchApi;
