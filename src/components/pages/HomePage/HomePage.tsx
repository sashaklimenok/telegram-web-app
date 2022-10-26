import { Footer, Header } from "../../organisms";
import { BaseTemplate } from "../../templates";

export const HomePage = () => {
  return (
    <BaseTemplate
      header={<Header />}
      content={<div>Content</div>}
      footer={<Footer />}
    />
  );
};
