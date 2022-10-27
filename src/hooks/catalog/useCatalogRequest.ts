import { useEffect, useState } from "react";
import { catalogApiService } from "services/apiService/CatalogApiService";
import { Product } from "types/product";

export const useCatalogRequest = (): [boolean, Product[]] => {
  const [isLoading, setIsLoading] = useState(true);
  const [catalogData, setCatalogData] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    catalogApiService
      .getCatalogData()
      .then((data) => {
        setCatalogData(data as unknown as Product[]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [isLoading, catalogData];
};
