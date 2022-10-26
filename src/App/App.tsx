import { Footer, Header } from "components/organisms";
import { BaseTemplate } from "components/templates";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { telegramService } from "services";
import { router } from "../Router";

export const App = () => {
  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <BaseTemplate
      header={<Header />}
      content={<RouterProvider router={router} />}
      footer={<Footer />}
    />
  );
};
