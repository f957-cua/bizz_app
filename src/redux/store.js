import { configureStore } from "@reduxjs/toolkit";
import { documentDefinitionApi } from "./layout/documentDefinitionApi";
import { clientApi } from "./client/clientApi.js"

export const store = configureStore({
  reducer: {
    [documentDefinitionApi.reducerPath]:
      documentDefinitionApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientApi.middleware).concat(documentDefinitionApi.middleware),
});