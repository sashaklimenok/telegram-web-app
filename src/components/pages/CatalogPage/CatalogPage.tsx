import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Image } from "antd";
import { useCallback, useEffect, useState } from "react";
import { telegramService } from "services";
import { data } from "./MOCK_DATA";

interface ProductRating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
  quantity?: number;
}

export const CatalogPage = () => {
  const [shoppingCartData, setShoppingCartData] = useState<Product[]>([]);
  const mainButton = telegramService.getMainButton();

  const onAddToCart = (product: Product) => {
    const data = [...shoppingCartData, product]
      .map((item, _, arr) => {
        return {
          ...item,
          quantity: arr.filter((subItem) => subItem.id === item.id).length,
        };
      })
      .filter(
        (item, index, arr) =>
          arr.findIndex((findItem) => findItem.id === item.id) === index
      );
    setShoppingCartData(data);
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
    const totalPrice = shoppingCartData.reduce(
      (acc, curr) => curr.price + acc,
      0
    );
    mainButton.setParams({
      text: `Купить ${totalPrice}`,
    });
    shoppingCartData.length ? mainButton.show() : mainButton.hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCartData.length]);

  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row gutter={[24, 24]}>
        {data.map((item) => (
          <Col xs={12} sm={12} lg={6} key={item.id}>
            <Card
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
          </Col>
        ))}
      </Row>
    </Space>
  );
};
