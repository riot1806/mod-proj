import { rootApi } from './rootApi';
import { Product } from '@/interfaces/Product';

const favoritesApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    viewFavorites: builder.query<Product[], null>({
      query: () => ({
        url: '/favorites',
        params: {
          ids: localStorage.getItem('favorites'),
        },
      }),
      transformResponse: (response: { data: Product[] }) => response.data,
    }),
  }),
});

export const { useViewFavoritesQuery } = favoritesApi;
