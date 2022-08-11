import { useState } from "react";
import { clientApi } from "../redux/client/clientApi.js";
import {documentDefinitionApi} from "../redux/layout/documentDefinitionApi.js";

import Notification from "../views/Notification.js";
import Input from "../views/UI/Input.js";
import Button from "../views/UI/Button.js";

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
      onSendToNotification(e.message);
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
            <Input
              name={inputs[0].name}
              label={inputs[0].label}
              value={clientName}
              type={inputs[0].type}
              onChange={handleChange}
              maxLength={inputs[0].maxLength}
              />
            <Input
              name={inputs[1].name}
              label={inputs[1].label}
              value={clientAge}
              type={inputs[1].type}
              onChange={handleChange}
              />
          </>
        )}
        {layouts && (
          <Button 
          type="submit"
          name={layouts[0].type}
          label={layouts[0].label} 
          />
        )}
      </form>
    </>
  );
}