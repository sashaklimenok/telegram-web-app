import { createBrowserRouter } from "react-router-dom";
import { CatalogPage } from "components/pages";

export const router = createBrowserRouter([
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
]);
