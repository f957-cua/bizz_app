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
      providesTags: (result) => [
        "Clients",
      ],
    }),
    createClient: build.mutation({
      query: (client) => ({
        url: "api/documents",
        method: "POST",
        body: client,
      }),
      invalidatesTags: ["Clients"],
    }),
    updateClient: build.mutation({
      query: (field) => ({
        url: `api/documents/${field.id}`,
        method: "PATCH",
        body: field.data,
      }),
      invalidatesTags: ["Clients"],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `api/documents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Clients"],
    }),
  }),
});