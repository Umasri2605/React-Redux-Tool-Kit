import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/api/leads'}),
  endpoints: (builder) => ({
    getAllLeads: builder.query({
      query: (name) => `/`,
    }),
    getLeadDetailsById: builder.query({
      query: (id ) => `/${id}`,
    }),
    addNewLead:builder.mutation({
     query:(lead)=>({
      url:"/",
      method:"POST",
      body: lead
     }) 
    }),
    deleteLead:builder.mutation({
      query:(id)=>({
        url:`/${id}`,
        method:"DELETE",
      })
    }),

  updatelead:builder.mutation({
    query:(lead)=>({
      url:`/${lead["_id"]}`,
      method:"PUT",
      body:lead,
    }),
  }), 
  }),
});


export const {
  useGetAllLeadsQuery,
  useAddNewLeadMutation,
  useDeleteLeadMutation, 
  useLazyGetAllLeadsQuery,
  useGetLeadDetailsByIdQuery,
  useLazyGetLeadDetailsByIdQuery ,
  useUpdateleadMutation
} = leadsApi;