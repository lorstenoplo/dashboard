import React from "react";
import { ProductType } from "../types/Products";

type Props = {
  product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded h-auto p-4 hover:ring-1 ring-blue-600 cursor-pointer transition duration-200 flex flex-col items-center space-y-3">
      <img
        src={product.imageURL}
        alt={product.title}
        className="object-contain h-28"
      />
      <h1 className="font-semibold">{product.title}</h1>
    </div>
  );
};
