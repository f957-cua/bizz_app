export default function Notification({ message }) {
  return (
    <div className="absolute top-[140px] md:top-20 left-2 md:left-10">
      <p className="mx-auto my-7 box-border py-2 px-5 text-gray-800 font-bold bg-slate-200 rounded-lg">
        {message}
      </p>
    </div>
  );
}