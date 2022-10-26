import { Footer, Header } from "components/organisms";
import { BaseTemplate } from "components/templates";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router";

export const App = () => {

  return (
    <BaseTemplate
      header={<Header />}
      content={<RouterProvider router={router} />}
      footer={<Footer />}
    />
  );
};
