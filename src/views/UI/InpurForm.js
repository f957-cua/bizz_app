import Notification from "../Notification.js"
function isInvalid({
  valid,
  touched,
  shouldValidate,
}) {
  return (
    !valid && shouldValidate && touched
  );
}

export default function InputForm(props) {
  const inputType =
    props.type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <>
      <label
        className="mt-2 md:mt-0 md:pr-2 md:ml-8 text-base font-bold"
        htmlFor={htmlFor}
      >
        {props.label}
      </label>
      <input
        className="border h-[28px] w-[140px] md:w-1/6 text-base text-center shadow-md"
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <Notification 
        message={props.errorMessage || "Value have wrong format"} />
      ) : null}
    </>
  );
};