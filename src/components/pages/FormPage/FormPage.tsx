import { Form, Input, Select } from "antd";
import { useCallback, useEffect, useState } from "react";
import { telegramService } from "services";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

export const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const mainButton = telegramService.getMainButton();

  const onSubmit = useCallback(() => {
    const data = {
      name,
      email,
      city,
      street,
    };
    console.log(data);
    telegramService.sendData(data);
  }, [name, email, city, street]);

  useEffect(() => {
    telegramService.onEvent("mainButtonClicked", onSubmit);
    return () => {
      telegramService.offEvent("mainButtonClicked", onSubmit);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isShowButton = [name, email, city, street].every(Boolean);
    if (isShowButton) {
      mainButton.show();
    } else {
      mainButton.hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, city, street]);

  useEffect(() => {
    telegramService.ready();
    mainButton.setParams({
      text: "Отправить",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form {...layout} name="nest-messages">
      <Form.Item
        name={["user", "name"]}
        label="Ваше имя"
        rules={[{ required: true, message: "Не указано имя" }]}
      >
        <Input onChange={(evt) => setName(evt.target.value)} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true, message: "Не указан Email" }]}
      >
        <Input onChange={(evt) => setEmail(evt.target.value)} />
      </Form.Item>
      <Form.Item label="Адрес">
        <Input.Group compact>
          <Form.Item
            name={["address", "city"]}
            noStyle
            rules={[{ required: true, message: "Не указан город" }]}
          >
            <Select
              placeholder="Укажите город"
              onChange={(value) => setCity(value)}
            >
              <Select.Option value="Минск">Минск</Select.Option>
              <Select.Option value="Гомель">Гомель</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["address", "street"]}
            noStyle
            rules={[{ required: true, message: "Не указана улица" }]}
          >
            <Input
              style={{ width: "50%" }}
              placeholder="Введите улицу"
              onChange={(evt) => setStreet(evt.target.value)}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Form>
  );
};
