import { Product } from "types/product";

export const getTotalPrice = (data: Product[]) => {
  return data.reduce((acc, curr) => curr.price + acc, 0);
};
