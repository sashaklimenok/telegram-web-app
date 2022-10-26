import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import "./header.css";
import { telegramService } from "services";

export const Header = () => {
  const { photoUrl, firstName, lastName } = telegramService.getUserData();

  return (
    <header className="header">
      <Avatar size="large" src={photoUrl} icon={<UserOutlined />} />
      <Typography.Text strong>{`${firstName} ${lastName}`}</Typography.Text>
    </header>
  );
};
