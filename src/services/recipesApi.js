import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const recipesApi = createApi({
  reducerPath:'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/recipes'}),
  endpoints: (builder) => ({
    getAllrecipes: builder.query({
      query: (name) => `/`,
    }),
  }),
})


export const {useGetAllrecipesQuery} = recipesApi