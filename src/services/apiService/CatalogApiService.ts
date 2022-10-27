import { CATALOG_PAGE_URL } from "constants/api";
import { ApiService } from "./ApiService";

class CatalogApiService extends ApiService {
  async getCatalogData() {
    return await this.get(CATALOG_PAGE_URL);
  }
}

export const catalogApiService = new CatalogApiService();
