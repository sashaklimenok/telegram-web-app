import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Image } from "antd";
import { FC } from "react";
import { Product } from "types/product";

interface ProductCarProps {
  item: Product;
  onClick: (item: Product) => void;
}

export const ProductCard: FC<ProductCarProps> = ({ item, onClick }) => {
  return (
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
        onClick={() => onClick(item)}
      >
        Добавить в корзину
      </Button>
    </Card>
  );
};
