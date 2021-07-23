import { API_BASE_URL } from "../../utils/constants";
import { ProductsType } from "../../types/Products";

export const fetchProducts = async (): Promise<ProductsType> => {
  const response = await fetch(`${API_BASE_URL}/products`).then((res) =>
    res.json()
  );

  const { products } = response;
  return products;
};
