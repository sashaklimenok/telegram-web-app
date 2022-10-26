import { Button, Form, Input, Select } from "antd";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

export const FormPage = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name={["user", "name"]}
        label="Ваше имя"
        rules={[{ required: true, message: "Не указано имя" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true, message: "Не указан Email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Адрес">
        <Input.Group compact>
          <Form.Item
            name={["address", "city"]}
            noStyle
            rules={[{ required: true, message: "Не указан город" }]}
          >
            <Select placeholder="Укажите город">
              <Select.Option value="Минск">Минск</Select.Option>
              <Select.Option value="Гомель">Гомель</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            noStyle
            rules={[{ required: true, message: "Не указана улица" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Введите улицу" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: layout.labelCol.span }}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};
