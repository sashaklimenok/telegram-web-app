import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
