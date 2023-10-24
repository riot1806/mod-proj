import { rootApi } from './rootApi';
import { Order } from '@/interfaces/Order';

const orderApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], null>({
      query: () => ({
        url: '/customers/orders',
      }),
      transformResponse: (response: { data: Order[] }) => response.data,
    }),
    getOrder: builder.query<Order, number>({
      query: (orderId) => ({
        url: `customers/orders/${orderId}`,
      }),
      transformResponse: (response: { data: Order }) => response.data,
    }),
    createOrder: builder.mutation<
      any,
      {
        address_id: number;
        delivery: string;
        payment: string;
        provider?: string;
      }
    >({
      query: (payload) => ({
        url: '/orders',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderQuery, useCreateOrderMutation } =
  orderApi;
