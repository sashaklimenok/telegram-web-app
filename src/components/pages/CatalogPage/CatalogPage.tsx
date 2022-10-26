import { Card, Col, Row, Space, Typography } from "antd";
import { useEffect } from "react";
import { telegramService } from "services";

export const CatalogPage = () => {
  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Typography.Title style={{ textAlign: "center", marginTop: '24px' }}>
        Catalog
      </Typography.Title>

      <Row gutter={[24, 24]}>
        {new Array(10).fill(null).map((_, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
};
