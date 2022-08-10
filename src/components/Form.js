import { useState } from "react";
import { clientApi } from "../redux/client/clientApi.js";
import {documentDefinitionApi} from "../redux/layout/documentDefinitionApi.js";

import shortid from "shortid";
import Notification from "../views/Notification.js";

export default function Form() {
  const [clientName, setClientName] =
    useState("");
  const [clientAge, setClientAge] =
    useState("");
  const [
    showNotification,
    setShowNotification,
  ] = useState(false);
  const [
    notificationText,
    setNotificationText,
  ] = useState("");

  // ids for inputs
  const nameInputId =
    shortid.generate();
  const ageInputId = shortid.generate();

  // for validation input "name"
  const namePattern =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  
  // set inputs
  const handleChange = (e) => {
    const { name, value } =
      e.currentTarget;

    switch (name) {
      case "name":
        setClientName(value);
        break;

      case "age":
        setClientAge(value);
        break;

      default:
        alert(
          `Field ${name} types are not processed `
        );
    }
  };

  // reset inputs
  const resetInputs = () => {
    setClientName("");
    setClientAge("");
  };

  // query data for "button" from redux use RTKQuery (JSON => layouts DB)
  const { data: layouts } =
    documentDefinitionApi.useSearchLayoutsQuery();

  // query data for "inputs" from redux use RTKQuery (JSON => documentDefinition DB)
  const {
    isLoading: loadingDocument,
    isError: errorDocument,
    data: inputs,
  } = documentDefinitionApi.useSearchDocumentDefinitionQuery();

  // mutation f() and query data for "POST" from redux use RTKQuery (JSON => new document to DB)
  const [
    createClient,
    { isLoading, isError },
  ] =
    clientApi.useCreateClientMutation();

  // on-off notification
  const onSendToNotification = (
    data
  ) => {
    setShowNotification(true);
    setNotificationText(
      JSON.stringify(data)
    );

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // form submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // client validation
      if (clientAge >= 150) {
        resetInputs();
        throw new Error(
          "You are very old client for our DB"
        );
      }

      // create new document in db
      const res = await createClient({
        name: clientName,
        age: clientAge,
      });

      onSendToNotification(res);

      // clear state
      resetInputs();
    } catch (e) {
      onSendToNotification(e.message.error.data.message);
    }
  };

  return (
    <>
      {(loadingDocument ||
        isLoading) && (
        <Notification message="Loading document definition" />
      )}
      { isError && (
        <Notification message="Document didn't create in DB, try one more time" />
      )}
      { errorDocument && (
        <Notification message="Error in document definition" />
      )}
      {showNotification && (
        <Notification
          message={notificationText}
        />
      )}
      <form
        className="flex flex-col md:flex-row justify-center items-center md:h-[150px]"
        onSubmit={handleSubmit}
      >
        {inputs && (
          <>
            <label
              htmlFor={nameInputId}
              name={inputs[0].name}
              className="mt-2 md:mt-0 md:pr-2 md:ml-8 text-base font-bold"
            >
              {inputs[0].label}
            </label>
            <input
              id={nameInputId}
              type="text"
              placeholder={
                inputs[0].name
              }
              name={inputs[0].name}
              pattern={namePattern}
              onChange={handleChange}
              value={clientName}
              className="border h-[28px] w-[140px] md:w-1/6 text-base text-center shadow-md"
            />
            <label
              htmlFor={ageInputId}
              name="age"
              className="mt-2 md:mt-0 md:pr-2 md:ml-8 text-base font-bold"
            >
              {inputs[1].label}
            </label>
            <input
              id={ageInputId}
              type="number"
              placeholder={
                inputs[1].name
              }
              name={inputs[1].name}
              onChange={handleChange}
              value={clientAge}
              className="border h-[28px] w-[140px] md:w-1/6 text-base text-center shadow-md"
            />
          </>
        )}
        {layouts && (
          <button
            type="submit"
            name={layouts[0].type}
            className="w-[80px] md:h-[35px] mt-2 md:mt-0 md:ml-4 box-border py-1 px-4 text-gray-800 hover:text-gray-500 font-bold bg-slate-500 hover:bg-slate-700 rounded-lg"
          >
            {layouts[0].label}
          </button>
        )}
      </form>
    </>
  );
}