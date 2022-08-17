import { clientApi } from "../redux/client/clientApi";
import MongoStoreView from "../views/MongoStoreView";

export default function MongoStore() {
  const { error, isLoading, data, refetch } =
    clientApi.useGetAllClientsQuery();
  
  const [removeClient, {}] =
    clientApi.useDeleteClientMutation();

  return (
    <>
      <MongoStoreView
        clients={data}
        error={error}
        isLoading={isLoading}
        refetch={refetch}
        remove={removeClient}
      />
    </>
  )
}