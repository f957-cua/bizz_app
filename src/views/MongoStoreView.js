import ClientView from "./ClientView.js";
import Notification from "./Notification.js";

export default function MongoStoreView({
  clients, error, isLoading, refetch
}) {
  return (
    <>
      {isLoading && (
        <Notification message="Loading clients from DataBase..." />
      )}
      {error && (
        <Notification message="Error by loading clients from DataBase" />
      )}
      {!error && !isLoading && (
        <>
          {clients?.length !==0 && (
            <button
              className="block w-[150px] md:h-[35px] mx-auto my-2 box-border py-1 px-4 text-gray-800 hover:text-gray-500 font-bold bg-slate-500 hover:bg-slate-600 rounded-lg"
              onClick={() => refetch()}
            >
              refetch clients
            </button>
          )}
          <ul className="flex flex-wrap flex-col md:flex-row justify-start items-center md:items-start mx-auto md:w-[560px]">
            {clients &&
              clients.map(
                ({
                  name,
                  age,
                  _id,
                }) => (
                  <ClientView
                    key={_id}
                    id={_id}
                    name={name}
                    age={age}
                  />
                )
              )}
          </ul>
        </>
      )}
    </>
  );
}
