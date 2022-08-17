import { useState } from "react";
import { clientApi } from "../redux/client/clientApi";
import InputView from "../views/UI/InputView.js"

export default function Input({
  id,
  name,
  type,
  onStatusChange,
}) {
  const [value, setValue] =
    useState("");

  let pattern = "";
  let ageInput = "";

  if (name === "name") {
    pattern =
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  } else {
    ageInput = "top-[32px]";
  }

  const [update, { isLoading, error }] =
    clientApi.useUpdateClientMutation();

  const onDataSend = () => {
    if (name === "name") {
      update({
        data: { name: value },
        id: id,
      });
      onStatusChange(name);
    } else {
      update({
        data: { age: value },
        id: id,
      });
      onStatusChange(name);
    }
  };

  return (
    <InputView
      ageInput={ageInput}
      onDataSend={onDataSend}
      type={type}
      pattern={pattern}
      value={value}
      setValue={setValue}
    />
  );
}