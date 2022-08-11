import shortid from "shortid";

export default function Input({
  name,
  label,
  value,
  onChange,
  type,
  maxLength
}) {
  const id = shortid.generate();

  let pattern ="";
  
  if (name === "name") {
    pattern =
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  }

  return (
    <>
      <label
        htmlFor={id}
        name={name}
        className="mt-2 md:mt-0 md:pr-2 md:ml-8 text-base font-bold"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={name}
        pattern={pattern}
        maxLength={maxLength}
        name={name}
        onChange={onChange}
        value={value}
        className="border h-[28px] w-[140px] md:w-1/6 text-base text-center shadow-md"
      />
    </>
  );
}
