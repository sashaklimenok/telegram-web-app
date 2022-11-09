import { API_URL } from "constants/api";
import { notification } from "antd";

export class ApiService {
  protected async get(url: string): Promise<void> {
    return await fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Origin": API_URL,
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
        "Origin": API_URL,
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
