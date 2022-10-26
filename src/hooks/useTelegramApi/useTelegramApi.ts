import { useEffect } from "react";

export const useTelegramApi = () => {
  const tg = (window as any).Telegram.WebApp;

  useEffect(() => {
    tg.ready();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return tg;
};
