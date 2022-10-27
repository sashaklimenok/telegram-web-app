import { Space, Spin } from "antd";
import { useEffect, useState } from "react";
import "./catalogPage.css";
import { Product } from "types/product";
import { ProductCard } from "components/molecules";
import { useMainButton } from "hooks/catalog/useMainButton";
import { useCatalogRequest } from "hooks";

export const CatalogPage = () => {
  const [shoppingCartData, setShoppingCartData] = useState<Product[]>([]);
  const [isLoadingRequest, catalogData] = useCatalogRequest();
  const [isLoading, setIsLoading] = useState(true);
  const isSubmitting = useMainButton(shoppingCartData);

  useEffect(() => {
    setIsLoading(isSubmitting);
  }, [isSubmitting]);

  useEffect(() => {
    setIsLoading(isLoadingRequest);
  }, [isLoadingRequest]);

  const onAddToCart = (product: Product) => {
    setShoppingCartData([...shoppingCartData, product]);
  };

  return (
    <Spin spinning={isLoading}>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <div className="container">
          {catalogData.map((item) => (
            <ProductCard key={item.id} item={item} onClick={onAddToCart} />
          ))}
        </div>
      </Space>
    </Spin>
  );
};
