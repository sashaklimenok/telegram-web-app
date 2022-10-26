import { TelegramWebApps } from "telegram-webapps-types";

class TelegramService {
  private telegram: TelegramWebApps.WebApp;

  constructor() {
    this.telegram = Telegram.WebApp;
  }

  ready() {
    this.telegram.ready();
  }

  sendData(data: unknown) {
    this.telegram.sendData(data);
  }

  onEvent(eventType: TelegramWebApps.EventType, eventHandler: Function) {
    this.telegram.onEvent(eventType, eventHandler);
  }

  offEvent(eventType: TelegramWebApps.EventType, eventHandler: Function) {
    this.telegram.offEvent(eventType, eventHandler);
  }

  getMainButton() {
    return {
      text: this.telegram.MainButton.text,
      color: this.telegram.MainButton.color,
      textColor: this.telegram.MainButton.textColor,
      isVisible: this.telegram.MainButton.isVisible,
      isActive: this.telegram.MainButton.isActive,
      isProgressVisible: this.telegram.MainButton.isProgressVisible,
      setText: (text: string) => this.telegram.MainButton.setText(text),
      onClick: (callback: Function) =>
        this.telegram.MainButton.onClick(callback),
      show: () => this.telegram.MainButton.show(),
      hide: () => this.telegram.MainButton.hide(),
      enable: () => this.telegram.MainButton.enable(),
      disable: () => this.telegram.MainButton.disable(),
      showProgress: (leaveActive: boolean) => {
        return this.telegram.MainButton.showProgress(leaveActive);
      },
      hideProgress: () => {
        return this.telegram.MainButton.hideProgress();
      },
      setParams: (params: TelegramWebApps.MainButtonParams) => {
        this.telegram.MainButton.setParams(params);
      },
    };
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
