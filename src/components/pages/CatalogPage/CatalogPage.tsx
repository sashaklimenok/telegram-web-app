import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Space, Image } from "antd";
import { useCallback, useEffect, useState } from "react";
import { numberService, telegramService } from "services";
import { data, Product } from "./MOCK_DATA";
import "./catalogPage.css";

export const CatalogPage = () => {
  const [shoppingCartData, setShoppingCartData] = useState<Product[]>([]);
  const mainButton = telegramService.getMainButton();

  const onAddToCart = (product: Product) => {
    setShoppingCartData([...shoppingCartData, product]);
    const totalPrice = shoppingCartData.reduce(
      (acc, curr) => curr.price + acc,
      product.price
    );
    console.log(numberService.roundToHundredths(totalPrice));
    mainButton.setParams({
      text: `Купить (Total price ${numberService.roundToHundredths(totalPrice)}$)`,
    });
    shoppingCartData.length ? mainButton.show() : mainButton.hide();
  };

  const onSubmit = useCallback(() => {
    telegramService.sendData(shoppingCartData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCartData.length]);

  useEffect(() => {
    telegramService.onEvent("mainButtonClicked", onSubmit);
    return () => {
      telegramService.offEvent("mainButtonClicked", onSubmit);
    };
  }, [onSubmit]);

  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <div className="container">
        {data
          .map((item) => ({
            ...item,
            price: numberService.roundToHundredths(item.price),
          }))
          .map((item) => (
            <Card
              key={item.id}
              hoverable
              cover={
                <Image
                  width={200}
                  height={300}
                  style={{ objectFit: "contain" }}
                  src={item.image}
                />
              }
              style={{ textAlign: "center" }}
            >
              <Card.Meta
                style={{ justifyContent: "center" }}
                title={item.title}
                description={`${item.price} $`}
              />
              <Button
                style={{ marginTop: "12px" }}
                type="primary"
                shape="round"
                icon={<ShoppingCartOutlined />}
                size={"small"}
                onClick={() => onAddToCart(item)}
              >
                Добавить в корзину
              </Button>
            </Card>
          ))}
      </div>
    </Space>
  );
};
