import { Product } from "components/pages/CatalogPage/MOCK_DATA";
import { ApiService } from "./ApiService";

class ShoppingCartService extends ApiService {
  saveProducts(data: { queryId: string; products: Product[] }) {
    this.post("/shopping-cart", data);
  }
}

export const shoppingCart = new ShoppingCartService();
