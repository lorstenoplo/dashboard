import React from "react";
import { useStateValue } from "../../context/StateProvider";

export const Main: React.FC = () => {
  const { state } = useStateValue();
  const p = state.selectedProduct;

  return (
    <div className="bg-white flex flex-auto rounded-tl-xl border-l border-gray-300 shadow-xl">
      <div className="w-4/5 flex flex-col">
        <div className="flex justify-between items-center bg-white rounded-tl-xl h-16 flex-none px-4 py-6 border-b">
          <div className="flex flex-col flex-auto space-y-1">
            <strong>{p?.title || "Product Name"}</strong>
            <input
              type="text"
              className="text-sm placeholder-gray-600 text-black outline-none w-2/5  border-dashed focus:border-b-2 border-b-2 border-opacity-0 focus:border-opacity-100 border-gray-400"
              placeholder="Add a Internal title"
            />
          </div>
          <div className="flex items-center flex-none space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div
          className="flex flex-col flex-auto justify-center overflow-y-scroll bg-white p-4 space-y-6 scroll-hidden"
          style={{ height: "calc(100vh - 10rem)" }}
        >
          {/* <div className="bg-gray-300 h-72 rounded"></div> */}

          <img
            src={p?.imageURL}
            alt={p?.title}
            className="h-64 object-contain my-6 bg-gray-300 rounded py-6"
          />

          <div className="bg-gray-100 h-auto rounded p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            suscipit quaerat quod, accusantium ipsa eum officiis quam, accusamus
            sapiente amet sequi, quos quas qui aliquid. Aperiam enim rem fugit
            odit.
          </div>

          <div className="flex justify-between px-2">
            <strong>${p?.price}</strong>
            <p>Rating: {p?.rating}</p>
          </div>
        </div>
        <div className="h-24 flex items-center justify-between flex-none bg-white border-t p-4">
          <div className="flex items-center space-x-6">
            <button className="bg-blue-500 rounded py-2 px-4 text-white focus:ring-2 ring-blue-500 ring-offset-2 hover:bg-blue-600">
              Add details +
            </button>

            <button className="bg-gray-300 rounded p-2 hover:bg-gray-400 focus:ring-2 ring-gray-500 ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>

          <button className="bg-red-500 rounded py-2 px-4 text-white focus:ring-2 ring-red-500 ring-offset-2 hover:bg-red-600 flex items-center">
            Delete
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-gray-200 w-1/5 border-gray-400 border-l flex flex-col">
        <div className="border-b border-gray-400 h-52 flex justify-center p-4">
          No.of Sales
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <div className="bg-white rounded h-44 grid place-items-center">
            Reviews
          </div>
          <div className="bg-white rounded h-44 grid place-items-center">
            Reviews
          </div>
        </div>
      </div>
    </div>
  );
};
