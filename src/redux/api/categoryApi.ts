import { rootApi } from './rootApi';
import { Filter } from '@/types/filter.type';
import { CartItem } from '@/interfaces/CartItem';
import { Pagination } from '@/types/pagination.type';
import { Category } from '@/interfaces/Category';

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
    getCategoryProducts: builder.query<
      CartItem[],
      { categoryId: number; params: any }
    >({
      query: ({ categoryId, params }) => ({
        url: `/categories/${categoryId}/products`,
        params: {
          ...params,
        },
      }),
      transformResponse: (response: {
        data: CartItem[];
        pagination: Pagination;
      }) => response.data,
    }),
    getCategory: builder.query<Category, number>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
      }),
      transformResponse: (response: { data: Category }) => response.data,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryFiltersQuery,
  useGetCategoryProductsQuery,
  useGetCategoryQuery,
} = categoryApi;
