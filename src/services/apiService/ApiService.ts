import { API_URL } from "constants/api";

export class ApiService {
  protected async get<T>(url: string): Promise<void> {
    return await fetch(`${API_URL}${url}`, { method: "GET" }).then((data) =>
      data.json()
    );
  }

  protected async post(url: string, body: {} | Array<string | number>) {
    await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((data) => data.json());
  }
}
