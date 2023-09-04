import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API!,
    prepareHeaders: (headers) => {
      headers.set('X-APP-UID', 'd586112b-3876-441c-9e83-c2271ef74fb2');
      localStorage.getItem('token') &&
        headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['Cart', 'Card'],
});
