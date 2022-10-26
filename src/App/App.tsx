import { useTelegramApi } from "../hooks";

export const App = () => {
  const telegramApi = useTelegramApi();

  return (
    <div className="App">
      App
      <button onClick={() => telegramApi.close()}>Click</button>
    </div>
  );
};
