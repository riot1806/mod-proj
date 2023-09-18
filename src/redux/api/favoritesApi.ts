import { rootApi } from './rootApi';
import { Product } from '@/interfaces/Product';

const favoritesApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    viewFavorites: builder.query<Product[], string>({
      query: (key = 'favorites') => ({
        url: '/favorites',
        params: {
          ids: JSON.parse(localStorage.getItem(key)!)
            .map((id: string) => id)
            .join(','),
        },
      }),
      transformResponse: (response: { data: Product[] }) => response.data,
    }),
  }),
});

export const { useViewFavoritesQuery } = favoritesApi;
