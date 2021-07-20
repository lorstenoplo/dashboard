export interface ProductType {
  _id: string;
  imageURL: string;
  price: number;
  rating: number;
  title: string;
  category: string;
}

export type ProductsType = [ProductType];
