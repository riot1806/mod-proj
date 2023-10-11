import { rootApi } from './rootApi';
import { Cart } from '@/types/cart.type';

const cartApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    viewCart: builder.query<Cart, null>({
      query: () => ({
        url: '/cart',
      }),
      transformResponse: (response: { data: any }) => response.data,
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation<
      {},
      { product_id: number; quantity: number; option_id: number }
    >({
      query: (payload) => ({
        url: '/cart/products',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeFromCart: builder.mutation<null, { id: number; optionId: number }>({
      query: ({ id, optionId }) => ({
        url: `/cart/products/${id}/${optionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    updateQuantity: builder.mutation<
      null,
      { id: number; optionId: number; quantity: number }
    >({
      query: ({ id, optionId, quantity }) => ({
        url: `/cart/products/${id}/${optionId}`,
        method: 'PATCH',
        body: {
          quantity,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useViewCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} = cartApi;
