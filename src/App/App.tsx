import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { telegramService } from "services";
import { router } from "../Router";

export const App = () => {
  useEffect(() => {
    telegramService.ready();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
