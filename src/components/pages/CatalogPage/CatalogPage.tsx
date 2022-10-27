import { Space, Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import { numberService, telegramService } from "services";
import "./catalogPage.css";
import { shoppingCart } from "services/apiService/ShoppingCartService";
import { getTotalPrice } from "./utils";
import { Product } from "types/product";
import { ProductCard } from "components/molecules";
import { catalogApiService } from "services/apiService/CatalogApiService";

export const CatalogPage = () => {
  const [shoppingCartData, setShoppingCartData] = useState<Product[]>([]);
  const [catalogData, setCatalogData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getMainButton, getQueryId, ready, onEvent, offEvent } =
    telegramService;
  const { roundToHundredths } = numberService;
  const mainButton = getMainButton();

  const onAddToCart = (product: Product) => {
    setShoppingCartData([...shoppingCartData, product]);
  };

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    shoppingCart.saveProducts({
      queryId: getQueryId() as string,
      products: shoppingCartData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCartData]);

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

  useEffect(() => {
    mainButton.setParams({
      text: `Купить (Total price ${roundToHundredths(
        getTotalPrice(shoppingCartData)
      )}$)`,
    });
    shoppingCartData.length ? mainButton.show() : mainButton.hide();
  }, [mainButton, roundToHundredths, shoppingCartData]);

  useEffect(() => {
    onEvent("mainButtonClicked", onSubmit);
    return () => {
      offEvent("mainButtonClicked", onSubmit);
    };
  }, [offEvent, onEvent, onSubmit]);

  useEffect(() => {
    ready();
  }, [ready]);

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
