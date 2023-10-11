import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PAYCOM_API,
  headers: {
    'X-Auth': '5e730e8e0b852a417aa49ceb',
  },
});
