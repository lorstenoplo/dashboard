import React from "react";
import { useQueryClient } from "react-query";
import { API_BASE_URL } from "../../utils/constants";

type Props = {
  toggleModal: () => void;
};

export const Modal: React.FC<Props> = ({ toggleModal }) => {
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    }
    if (isEscape && document.body.classList.contains("modal-active")) {
      toggleModal();
    }
  };

  const queryClient = useQueryClient();

  const createProduct = async () => {
    await fetch(`${API_BASE_URL}/addProduct`, {
      method: "POST",
      body: JSON.stringify({
        title: "jamela",
        price: "3000",
      }),
    }).then((r) => r.json());
    toggleModal();
    queryClient.invalidateQueries("products");
  };

  return (
    <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        onClick={toggleModal}
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div
          onClick={toggleModal}
          className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>

        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <div className="modal-content py-4 text-left px-6">
          {/* <!--Title--> */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Enter Details</p>
            <div
              onClick={toggleModal}
              className="cursor-pointer z-50 hover:bg-gray-100 hover:rounded-full p-2 -ml-4"
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          {/* <!--Body--> */}

          <div className="flex flex-col space-y-2 mt-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Ex: Alovera cream"
              className="focus:ring-indigo-500 focus:border-indigo-500 outline-none focus:ring-1 flex-1 block w-full rounded-md sm:text-sm border-gray-300 border p-2"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-3">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image Url
            </label>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm">
                https://
              </span>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="exmaple.com/phone.png"
                className="focus:ring-indigo-500 focus:border-indigo-500 outline-none focus:ring-1 flex-1 block w-full rounded-tr rounded-br sm:text-sm border-gray-300 border p-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-2 mt-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Ex: Creams"
                className="focus:ring-indigo-500 focus:border-indigo-500 outline-none focus:ring-1 flex-1 block w-full rounded-md sm:text-sm border-gray-300 border p-2"
              />
            </div>
            <div className="flex flex-col space-y-2 mt-3">
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700"
              >
                Slug
              </label>
              <select
                id="slug"
                name="slug"
                autoComplete="slug"
                className="mt-1 block pr-4 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>food</option>
                <option>skin-care</option>
                <option>electronics</option>
                <option>juices</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>

            <input
              type="number"
              name="price"
              id="price"
              placeholder="49 (In dollars)"
              className="focus:ring-indigo-500 focus:border-indigo-500 outline-none focus:ring-1 flex-1 block w-full rounded-md sm:text-sm border-gray-300 border p-2"
            />
          </div>

          {/* <!--Footer--> */}
          <div className="flex justify-end pt-2 mt-3">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-transparent rounded h-full text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={createProduct}
              className="py-2 px-4 bg-indigo-500 rounded h-full text-white hover:bg-indigo-700"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
