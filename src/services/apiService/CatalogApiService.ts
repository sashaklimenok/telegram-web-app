import { ApiService } from "./ApiService";

class CatalogApiService extends ApiService {
  async sendProductData() {
    await this.get("/catalog");
  }
}

export const catalogApiService = new CatalogApiService();
