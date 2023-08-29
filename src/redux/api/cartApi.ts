import { rootApi } from './rootApi';
import { Cart } from '@/types/cart.type';

const cartApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    viewCart: builder.query<Cart, null>({
      query: () => ({
        url: '/cart',
      }),
      transformResponse: (response: { data: any }) => response.data,
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
    }),
    removeFromCart: builder.mutation<null, { id: number; optionId: number }>({
      query: ({ id, optionId }) => ({
        url: `/cart/products/${id}/${optionId}`,
        method: 'DELETE',
      }),
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
    }),
  }),
});

export const {
  useViewCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateQuantityMutation,
} = cartApi;
