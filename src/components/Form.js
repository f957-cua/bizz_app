import { useState } from "react";
import is from "is_js";
import { clientApi } from "../redux/client/clientApi.js";

import Notification from "../views/Notification.js";
import InputForm from "../views/UI/InpurForm.js";
import Button from "../views/UI/Button.js";

export default function Form() {
  const [
    formControls,
    setFormControls,
  ] = useState({
    form: {
      clientName: {
        value: "",
        type: "text",
        label: "clientName",
        errorMessage:
          "Please type correct name",
        valid: false,
        touched: false,
        validation: {
          required: true,
          alphaNumeric: true,
          minLength: 3,
        },
      },
      clientAge: {
        value: "",
        type: "number",
        label: "clientAge",
        errorMessage:
          "Please type correct age",
        valid: false,
        touched: false,
        validation: {
          required: true,
          maxLength: 3,
        },
      },
    },
  });

  const [
    showNotification,
    setShowNotification,
  ] = useState(false);
  const [
    notificationText,
    setNotificationText,
  ] = useState("");

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

  // validate control
  const validateControl = (
    value,
    validation
  ) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid =
        value.trim() !== "" && isValid;
    }

    if (validation.alphaNumeric) {
      isValid =
        is.alphaNumeric(value) &&
        isValid;
    }

    if (validation.minLength) {
      isValid =
        value.length >=
          validation.minLength &&
        isValid;
    }

    if (validation.maxLength) {
      isValid =
        value.length <=
          validation.maxLength &&
        isValid;
    }

    return isValid;
  };

  // set inputs
  const onChangeHandler = (
    e,
    controlName
  ) => {
    const newFormControls = {
      ...formControls,
    };
    const control = {
      ...formControls.form[controlName],
    };

    control.value = e.target.value;
    control.touched = true;
    control.valid = validateControl(
      control.value,
      control.validation
    );

    newFormControls.form[controlName] =
      control;

    setFormControls(newFormControls);
  };

  // reset inputs
  const resetInputs = () => {
    const newFormControls = {
      ...formControls,
    };

    newFormControls.form.clientName.value =
      "";
    newFormControls.form.clientAge.value =
      "";

    setFormControls(newFormControls);
  };

  // form submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const clientAge =
        formControls.form.clientAge
          .value;
      const clientName =
        formControls.form.clientName
          .value;
      // check empty fields
      if (
        clientName.length === 0 ||
        clientAge.length === 0
      ) {
        resetInputs();
        throw new Error(
          "One or both fields are empty"
        );
      }

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
  
  function renderInputs() {
    return Object.keys(
      formControls.form
    ).map((controlName, index) => {
      const control =
        formControls.form[controlName];
      return (
        <InputForm
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={
            !!control.validation
          }
          errorMessage={
            control.errorMessage
          }
          onChange={(event) =>
            onChangeHandler(
              event,
              controlName
            )
          }
        />
      );
    });
  }

  return (
    <>
      {isLoading && (
        <Notification message="Loading document definition" />
      )}
      {isError && (
        <Notification message="Document didn't create in DB, try one more time" />
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
        {renderInputs()}
        
        <Button
          type="submit"
          label="Save"
        />
        
      </form>
    </>
  );
}