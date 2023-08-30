import { rootApi } from './rootApi';
import { Filter } from '@/types/filter.type';
import { CartItem } from '@/interfaces/CartItem';
import { Pagination } from '@/types/pagination.type';

const categoryApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<any[], null>({
      query: () => ({
        url: '/categories',
      }),
      transformResponse: (response: { data: any[] }) => response.data,
    }),
    getCategoryFilters: builder.query<Filter[], number>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}/filters`,
      }),
      transformResponse: (response: { data: Filter[] }) => response.data,
    }),
    getCategoryProducts: builder.query<CartItem[], number>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}/products`,
      }),
      transformResponse: (response: {
        data: CartItem[];
        pagination: Pagination;
      }) => response.data,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryFiltersQuery,
  useGetCategoryProductsQuery,
} = categoryApi;
