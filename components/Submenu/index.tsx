import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchProducts } from "../../RQuery/queries/fetchProducts";
import { Modal } from "../Modal";
import { Product } from "../Product";

export const Submenu: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery(
    "products",
    fetchProducts
  );
  const queryClient = useQueryClient();

  if (isLoading) {
    return <p>loading</p>;
  }

  if (isError) {
    console.log(error);
    return <p>Some error occured :(</p>;
  }

  function toggleModal() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    modal?.classList.toggle("opacity-0");
    modal?.classList.toggle("pointer-events-none");
    body?.classList.toggle("modal-active");
  }

  return (
    <>
      <div className="w-64 p-4 space-y-4 flex-none max-h-screen overflow-y-hidden">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Products</h1>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 flex-none font-semibold cursor-pointer hover:bg-gray-200 hover:rounded transition duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleModal}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 flex-none font-semibold cursor-pointer hover:bg-gray-200 hover:rounded transition duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => queryClient.invalidateQueries("products")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-y-auto flex-auto space-y-3 p-1 h-screen custom-scrollbar">
          {data?.map((p) => (
            <Product key={p._id} product={p} />
          ))}
        </div>
      </div>
      <Modal toggleModal={toggleModal} />
    </>
  );
};
