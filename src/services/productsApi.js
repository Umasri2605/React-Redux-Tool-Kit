import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  reducerPath: 'products Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products'}),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: (name) => `/`,
    }),
  }),
})


export const {useGetAllproductsQuery} = productsApi