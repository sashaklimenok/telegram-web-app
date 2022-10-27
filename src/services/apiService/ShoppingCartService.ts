import { SHOPPING_CART_PAGE_URL } from "constants/api";
import { Product } from "types/product";
import { ApiService } from "./ApiService";

class ShoppingCartService extends ApiService {
  saveProducts(data: { queryId: string; products: Product[] }) {
    this.post(SHOPPING_CART_PAGE_URL, data);
  }
}

export const shoppingCart = new ShoppingCartService();
