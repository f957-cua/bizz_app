export default function Button({ type, name, label }) {
  return (
    <button
      type={type}
      name={name}
      className="w-[80px] md:h-[35px] mt-2 md:mt-0 md:ml-4 box-border py-1 px-4 text-gray-800 hover:text-gray-500 font-bold bg-slate-500 hover:bg-slate-700 rounded-lg"
    >
      {label}
    </button>
  );
}