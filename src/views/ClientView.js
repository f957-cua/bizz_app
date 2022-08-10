export default function ClientView({ name, age, id }) {
  return (
    <li
      key={id}
      className="flex justify-between mt-2 md:mt-0 flex-col w-[140px] h-[60px] border"
    >
      <p className="text-base text-center shadow-md">
        name:
        <span className="pl-2 text-bold">
          {name}
        </span>
      </p>
      <p className="text-base text-center shadow-md">
        age:
        <span className="pl-2">
          {age}
        </span>
      </p>
    </li>
  );
}