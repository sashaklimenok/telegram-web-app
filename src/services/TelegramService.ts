import { TelegramWebApps } from "telegram-webapps-types";

class TelegramService {
  private telegram: TelegramWebApps.WebApp;

  constructor() {
    this.telegram = Telegram.WebApp;
  }

  ready() {
    this.telegram.ready();
  }

  getUserData() {
    const userData = this.telegram.initDataUnsafe.user;
    return {
      id: userData?.id,
      isBot: userData?.is_bot,
      firstName: userData?.first_name ?? "",
      lastName: userData?.last_name ?? "",
      photoUrl: userData?.photo_url,
    };
  }

  close() {
    this.telegram.close();
  }
}
export const telegramService = new TelegramService();
