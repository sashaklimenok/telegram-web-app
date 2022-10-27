import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import "./header.css";
import { telegramService } from "services";

export const Header = () => {
  const { photoUrl, firstName, lastName } = telegramService.getUserData();

  return (
    <header className="header">
      <div>
        <div style={{ textAlign: "center" }}>
          <Avatar
            size='default'
            src={photoUrl}
            icon={<UserOutlined />}
          />
        </div>
        <Typography.Text
          strong
        >{`${firstName} ${lastName}`}</Typography.Text>
      </div>
    </header>
  );
};
