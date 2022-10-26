import { Card, Space } from "antd";
import { useEffect } from "react";
import { telegramService } from "services";

export const CatalogPage = () => {
  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
};
