import { rootApi } from './rootApi';
import { Address } from '@/interfaces/Address';

type AddressPayload = {
  first_name: string;
  last_name: string;
  street: string;
  building: string;
  flat: number;
  entrance?: number;
  intercom?: number;
  location_id: number;
  city: string;
};

const addressApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query<Address[], null>({
      query: () => ({
        url: '/customers/addresses',
      }),
      transformResponse: (response: { data: Address[] }) => response.data,
      providesTags: ['Address'],
    }),
    addAddress: builder.mutation<null, AddressPayload>({
      query: (payload) => ({
        url: '/customers/addresses',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Address'],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useAddAddressMutation,
  useLazyGetAddressesQuery,
} = addressApi;
