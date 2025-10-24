import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const recipesApi = createApi({
  reducerPath:'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/recipes'}),
  endpoints: (builder) => ({
    getAllrecipes: builder.query({
      query: (name) => `/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllrecipesQuery} = recipesApi