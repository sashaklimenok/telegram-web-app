import { API_URL } from "constants/api";
import { notification } from "antd";

export class ApiService {
  protected async get(url: string): Promise<void> {
    console.log(window.location);
    return await fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .catch((error) =>
        notification.error({
          message: "Request was failed",
          description: error?.message,
        })
      );
  }

  protected async post(url: string, body: {} | Array<string | number>) {
    await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .catch((error) =>
        notification.error({
          message: "Request was failed",
          description: error?.message,
        })
      );
  }
}
