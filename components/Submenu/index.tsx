import React from "react";
import { ProductsType } from "../../types/Products";
import { Product } from "../Product";

type Props = {
  products: ProductsType;
};

export const Submenu: React.FC<Props> = ({ products }) => {
  return (
    <div className="w-64 p-4 space-y-4 flex-none max-h-screen overflow-y-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Products</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 flex-none font-semibold cursor-pointer hover:bg-gray-200 hover:rounded transition duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <div className="overflow-y-auto flex-auto space-y-3 p-1 h-screen custom-scrollbar">
        {products.map((p) => (
          <Product product={p} />
        ))}
        <div className="bg-gray-300 rounded h-60 hover:ring-1 ring-blue-600 cursor-pointer transition duration-200"></div>
        <div className="bg-gray-300 rounded h-60 hover:ring-1 ring-blue-600 cursor-pointer transition duration-200"></div>
      </div>
    </div>
  );
};
