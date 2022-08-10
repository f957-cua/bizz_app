import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const clientApi = createApi({
  reducerPath: "layout/api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://bizz-backend.herokuapp.com/",
  }),
  tagTypes: ["Clients"],
  endpoints: (build) => ({
    getAllClients: build.query({
      query: () => ({
        url: "api/documents",
      }),
      providesTags: result => ["Clients"]
    }),
    createClient: build.mutation({
      query: (client) => ({
        url: "api/documents",
        method: "POST",
        body: client
      }),
      invalidatesTags: ["Clients"]
    }),
  }),
});