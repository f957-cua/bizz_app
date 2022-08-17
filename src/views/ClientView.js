import { useState } from "react"

import Input from "../components/Input.js"

export default function ClientView({ name, age, id, clientRemove }) {
  const [updateNameStatus, setUpdateNameStatus] = useState(false);
  const [updateAgeStatus, setUpdateAgeStatus] = useState(false);

  const onStatusChange = (inputName) => {
    if (inputName === "name") {
      setUpdateNameStatus(prev => !prev)
    }
    if (inputName === "age") {
      setUpdateAgeStatus(prev => !prev)
    }
  }

  return (
    <li
      key={id}
      className="flex relative justify-between mt-2 md:mt-0 flex-col w-[140px] h-[60px] border"
    >
      <button
        className="absolute outline outline-2 left-1 top-1 w-[17px] h-[50px] hover:bg-slate-600 rounded bg-gray-400 shadow-md w-[24px] font-bold text-gray-800 hover:text-gray-500 bg-slate-500 hover:bg-slate-600"
        onClick={clientRemove}
      >
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 32 32"
          className="fill-inherit fill-transparent "
        >
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="icon-26-trash-can"
              fill="#000000"
            >
              <path
                d="M21,6 L25,6 L25,7 L8,7 L8,6 L12,6 L12,5 C12,3.88772964 12.8942627,3 13.9973917,3 L19.0026083,3 C20.1041422,3 21,3.8954305 21,5 L21,6 L21,6 Z M8,8 L8,26.9986131 C8,28.6562333 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6569187 25,26.9986131 L25,8 L8,8 L8,8 Z M9,9 L9,27.0092049 C9,28.1086907 9.89339733,29 10.9918842,29 L22.0081158,29 C23.1082031,29 24,28.1017876 24,27.0092049 L24,9 L9,9 L9,9 Z M12,11 L12,27 L13,27 L13,11 L12,11 L12,11 Z M16,11 L16,27 L17,27 L17,11 L16,11 L16,11 Z M20,11 L20,27 L21,27 L21,11 L20,11 L20,11 Z M14.0029293,4 C13.4490268,4 13,4.44386482 13,5 L13,6 L20,6 L20,5 C20,4.44771525 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z"
                id="trash-can"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        className="absolute top-0.5 right-1 outline outline-2 rounded bg-gray-400 shadow-md w-[20px] font-bold text-gray-800 hover:text-gray-500 bg-slate-500 hover:bg-slate-600"
        onClick={() =>
          onStatusChange("name")
        }
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
          className="fill-green-800"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="icon-136-document-edit"
              fill="#000000"
            >
              <path
                d="M26.4432278,12.1503345 L15.1570131,23.4499064 L15.1570131,23.4499064 L12.5514465,20.8443397 L23.8435383,9.55064513 L26.4432278,12.1503345 L26.4432278,12.1503345 Z M27.1499164,11.4428096 L28.8790954,9.71158405 C29.269069,9.32114892 29.266195,8.68650423 28.8743,8.29568497 L27.6944866,7.11910998 C27.3018646,6.72756564 26.6692577,6.72452466 26.2779126,7.11592531 L24.5505949,8.84348817 L27.1499164,11.4428096 L27.1499164,11.4428096 Z M11.9037061,21.6108129 L11.2641602,24.7235103 L14.3990645,24.1061713 L11.9037061,21.6108129 L11.9037061,21.6108129 L11.9037061,21.6108129 Z M22,10 L22,10 L16,3 L5.00276013,3 C3.89666625,3 3,3.89833832 3,5.00732994 L3,27.9926701 C3,29.1012878 3.89092539,30 4.99742191,30 L20.0025781,30 C21.1057238,30 22,29.1017876 22,28.0092049 L22,18 L29.5801067,10.4198932 C30.3642921,9.63570785 30.3661881,8.36618809 29.5897496,7.58974962 L28.4102504,6.41025036 C27.6313906,5.6313906 26.372781,5.62721897 25.5801067,6.41989327 L22,10 L22,10 L22,10 Z M21,19 L21,28.0066023 C21,28.5550537 20.5523026,29 20.0000398,29 L4.9999602,29 C4.45470893,29 4,28.5543187 4,28.004543 L4,4.99545703 C4,4.45526288 4.44573523,4 4.9955775,4 L15,4 L15,8.99408095 C15,10.1134452 15.8944962,11 16.9979131,11 L21,11 L11,21 L10,26 L15,25 L21,19 L21,19 L21,19 Z M16,4.5 L16,8.99121523 C16,9.54835167 16.4506511,10 16.9967388,10 L20.6999512,10 L16,4.5 L16,4.5 Z"
                id="document-edit"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        className="absolute top-[34px] right-1 outline outline-2 rounded bg-gray-400 shadow-md w-[20px] font-bold text-gray-800 hover:text-gray-500 bg-slate-500 hover:bg-slate-600"
        onClick={() =>
          onStatusChange("age")
        }
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
          className="fill-transparent"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="icon-136-document-edit"
              fill="#000000"
            >
              <path
                d="M26.4432278,12.1503345 L15.1570131,23.4499064 L15.1570131,23.4499064 L12.5514465,20.8443397 L23.8435383,9.55064513 L26.4432278,12.1503345 L26.4432278,12.1503345 Z M27.1499164,11.4428096 L28.8790954,9.71158405 C29.269069,9.32114892 29.266195,8.68650423 28.8743,8.29568497 L27.6944866,7.11910998 C27.3018646,6.72756564 26.6692577,6.72452466 26.2779126,7.11592531 L24.5505949,8.84348817 L27.1499164,11.4428096 L27.1499164,11.4428096 Z M11.9037061,21.6108129 L11.2641602,24.7235103 L14.3990645,24.1061713 L11.9037061,21.6108129 L11.9037061,21.6108129 L11.9037061,21.6108129 Z M22,10 L22,10 L16,3 L5.00276013,3 C3.89666625,3 3,3.89833832 3,5.00732994 L3,27.9926701 C3,29.1012878 3.89092539,30 4.99742191,30 L20.0025781,30 C21.1057238,30 22,29.1017876 22,28.0092049 L22,18 L29.5801067,10.4198932 C30.3642921,9.63570785 30.3661881,8.36618809 29.5897496,7.58974962 L28.4102504,6.41025036 C27.6313906,5.6313906 26.372781,5.62721897 25.5801067,6.41989327 L22,10 L22,10 L22,10 Z M21,19 L21,28.0066023 C21,28.5550537 20.5523026,29 20.0000398,29 L4.9999602,29 C4.45470893,29 4,28.5543187 4,28.004543 L4,4.99545703 C4,4.45526288 4.44573523,4 4.9955775,4 L15,4 L15,8.99408095 C15,10.1134452 15.8944962,11 16.9979131,11 L21,11 L11,21 L10,26 L15,25 L21,19 L21,19 L21,19 Z M16,4.5 L16,8.99121523 C16,9.54835167 16.4506511,10 16.9967388,10 L20.6999512,10 L16,4.5 L16,4.5 Z"
                id="document-edit"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      {updateNameStatus && (
        <Input
          name="name"
          type="text"
          id={id}
          onStatusChange={
            onStatusChange
          }
        />
      )}
      {updateAgeStatus && (
        <Input
          name="age"
          type="number"
          id={id}
          onStatusChange={
            onStatusChange
          }
        />
      )}
      <p className="text-base text-center shadow-md">
        name:
        <span className="pl-2">
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