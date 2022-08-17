import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const documentDefinitionApi = createApi(
  {
    reducerPath:
      "documentDefinition/api",
    baseQuery: fetchBaseQuery({
      baseUrl:
        "https://bizz-backend.herokuapp.com/",
    }),
    endpoints: (build) => ({
      searchLayouts: build.query({
        query: () => ({
          url: 'api/layout/2',
        }),
        transformResponse: (res) =>
          res.header.rows[0].columns,
      }),
    }),
  }
);