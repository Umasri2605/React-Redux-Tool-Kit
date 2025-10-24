 // Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'products Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products'}),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: (name) => `/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllproductsQuery} = productsApi