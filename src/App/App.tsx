import { Header } from "components/organisms";
import { CatalogPage, FormPage } from "components/pages";
import { BaseTemplate } from "components/templates";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BaseTemplate header={<Header />}>
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BaseTemplate>
  );
};
