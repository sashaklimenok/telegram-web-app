import { RouterProvider } from "react-router-dom";
import { router } from "../Router";

export const App = () => {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
