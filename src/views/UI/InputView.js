export default function InputView({
  ageInput,
  onDataSend,
  type,
  pattern,
  value,
  setValue
}) {
  return (
    <div
      className={`absolute left-[30px] ${ageInput} z-10 bg-gray-200`}
    >
      <button
        className="absolute top-1 right-1 outline outline-2 rounded bg-gray-400 shadow-md w-[16px] font-bold text-gray-800 hover:text-gray-500 bg-slate-500 hover:bg-slate-600"
        onClick={onDataSend}
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 67.476 68.213"
          className="fill-green-400"
        >
          <path
            style={{ fill: "#231F20" }}
            d="M27.494,52.367c-0.793,0-1.558-0.302-2.137-0.848L13.901,40.728c-1.253-1.18-1.312-3.152-0.132-4.405
	c1.181-1.252,3.153-1.311,4.405-0.132l9.143,8.612l21.076-23.269c1.155-1.276,3.125-1.374,4.401-0.218s1.373,3.126,0.218,4.402
	L29.804,51.342c-0.562,0.621-1.35,0.989-2.187,1.022C27.576,52.366,27.535,52.367,27.494,52.367z"
          />
          <path
            style={{ fill: "#231F20" }}
            d="M64.36,68.213H3.117C1.396,68.213,0,66.819,0,65.097V3.117C0,1.396,1.396,0,3.117,0H64.36
	c1.722,0,3.116,1.396,3.116,3.117v61.98C67.476,66.819,66.082,68.213,64.36,68.213z M6.233,61.981h55.01V6.233H6.233V61.981z"
          />
        </svg>
      </button>
      <input
        type={type}
        pattern={pattern}
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        className="border h-[24px] w-[110px] text-base text-center shadow-md"
      />
    </div>
  );
}