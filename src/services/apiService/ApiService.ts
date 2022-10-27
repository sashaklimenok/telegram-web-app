import { API_URL } from "constants/api";

export class ApiService {
  protected async get(url: string) {
    await fetch(`${API_URL}${url}`, { method: "GET" });
  }

  protected async post(url: string, body: {} | Array<string | number>) {
    await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify(body),
    });
  }
}
